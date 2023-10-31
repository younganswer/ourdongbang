# -*- coding: utf-8 -*-
from flask import Flask, request, render_template, Response, make_response
import requests, os, uuid, time, json, base64
from werkzeug.utils import secure_filename
from urllib.parse import quote
import tempfile
import time

app = Flask(__name__)

def remove_space(str):
	return str.replace(" ", "")

def load_image(imageId):
	url = os.environ['S3_BUCKET_PREFIX_URL'] + '/' + imageId
	
	timeout = time.time() + 60*5
	response = requests.get(url)
	while response.status_code != 200:
		time.sleep(0.5)
		response = requests.get(url)
		if timeout < time.time():
			print("Failed to download the image")
			return make_response(response.data, response.status_code)

	temp_dir = tempfile.mkdtemp(dir=os.environ['TMPDIR'], prefix='receipt_')
	temp_file = tempfile.mktemp(dir=temp_dir, suffix='.jpg')
	with open(temp_file, 'wb') as f:
		f.write(response.content)

	return make_response(json.dumps(temp_file), 200)
	
def receipt_recognition(temp_file):
	with open(temp_file, 'rb') as f:
		file_data = f.read()

	request_json = {
		"images": [{
			"format": "jpg",
			"name": "demo",
			"data": base64.b64encode(file_data).decode()
		}],
		"requestId": str(uuid.uuid4()),
		"version": "V2",
		"timestamp": int(round(time.time() * 1000)),
	}

	os.remove(temp_file)
	os.rmdir(os.path.dirname(temp_file))

	payload = json.dumps(request_json).encode("UTF-8")

	headers = {
		"X-OCR-SECRET": os.environ["CLOVA_API_SECRET_KEY"],
		'Content-Type': 'application/json'
	}

	response = requests.request("POST", os.environ["CLOVA_API_URL"], headers=headers, data=payload)
	if response.status_code != 200:
		print("Failed to request OCR")
		return make_response(json.dumps(response.json()), response.status_code)

	response = response.json()
	print(response)

	response = response["images"][0]["receipt"]["result"]

	payment_date, payment_time = None, None
	try:
		payment_date = response["paymentInfo"]["date"]["text"]  # 날짜
		payment_time = remove_space(response["paymentInfo"]["time"]["text"])  # 시간
	except:
		pass

	store_name = None
	try:
		store_name = remove_space(response["storeInfo"]["name"]["text"])  # 상호명
	except:
		pass
	
	total_price = None
	try:
		total_price = remove_space(response["totalPrice"]["price"]["formatted"]["value"])  # 금액
	except:
		pass

	if (payment_date):
		delimeters = ["/", ".", "-", " "]
		for i in range(len(payment_date)):
			if payment_date[i] in delimeters:
				payment_date = payment_date[:i] + "-" + payment_date[i+1:]
		payment_date = payment_date.split("-")
		if (len(payment_date) != 3):
			payment_date = None
		elif (len(payment_date[0]) == 2):
			payment_date = "20" + payment_date[0] + "-" + payment_date[1] + "-" + payment_date[2]
		elif (len(payment_date[0]) == 4):
			payment_date = payment_date[0] + "-" + payment_date[1] + "-" + payment_date[2]			

	parsed_data = {
		"date": payment_date,
		"franchise": store_name,
		"amount": total_price,
	}
	
	return make_response(json.dumps(parsed_data), 200)

@app.route("/receipt", methods=["POST"])
def receipt_OCR():
	imageId = request.form['imageId']
	
	response = load_image(imageId)
	if response.status_code != 200:
		return Response(response.data, response.status_code)

	temp_file = json.loads(response.data)

	response = receipt_recognition(temp_file)

	response = Response(response.data, response.status_code)
	response.headers["Access-Control-Allow-Origin"] = "https://nestjs:3000"

	print(json.loads(response.data))

	return response

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=os.environ['PORT'], debug=True)
