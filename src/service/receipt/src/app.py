# -*- coding: utf-8 -*-
from flask import Flask, request, render_template, Response, make_response
import requests, os, uuid, time, json, base64
from werkzeug.utils import secure_filename
from urllib.parse import quote
import tempfile

app = Flask(__name__)

def remove_space(str):
	return str.replace(" ", "")

def load_image(imageId):
	url = os.environ['S3_BUCKET_PREFIX_URL'] + '/' + imageId
	
	response = requests.get(url)
	if response.status_code != 200:
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

	payment_info = response["images"][0]["receipt"]["result"]["paymentInfo"]
	payment_date = payment_info["date"]["text"]  # 날짜
	payment_time = remove_space(payment_info["time"]["text"])  # 시간
	store_name = remove_space(
		response["images"][0]["receipt"]["result"]["storeInfo"]["name"]["text"]
	)  # 상호명
	total_price = remove_space(
		response["images"][0]["receipt"]["result"]["totalPrice"]["price"][
			"formatted"
		]["value"]
	)  # 금액

	parsed_data = {
		"dateOfPayment": payment_date,
		"timeOfPayment": payment_time,
		"storeName": store_name,
		"price": total_price,
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
