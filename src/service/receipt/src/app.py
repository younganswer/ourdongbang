# -*- coding: utf-8 -*-
from flask import Flask, request, render_template, Response, make_response
import requests, os, uuid, time, json
from werkzeug.utils import secure_filename
from urllib.parse import quote


app = Flask(__name__)

# 업로드된 이미지를 저장할 디렉토리 설정
UPLOAD_FOLDER = "./uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


def remove_space(str):
	return str.replace(" ", "")

def load_image(imageId):
	response = requests.get('https://cdn.econoi.com/news/photo/old/news/ND006/1988232117_fRmAurPs_562.jpg')
	if response.status_code == 200:
		image = response.content
		filename = os.path.join(app.config['UPLOAD_FOLDER'],'receipt_image.jpg')
		with open(filename, 'wb') as f:
			f.write(response.content)
		return 200
	else:
		print("Failed to download the image. Status code:", response.status_code)
		return make_response(response.status_code)
	
def receipt_recognition(code):
	if code == 404 or code == 500:
		return code
	path = os.path.join(app.config['UPLOAD_FOLDER'],'receipt_image.jpg')
	files = [('file', open(path,'rb'))]
	api_url = os.environ["CLOVA_API_URL"]
	secret_key = os.environ["CLOVA_API_SECRET_KEY"]
	request_json = {
			"images": [{"format": "jpg", "name": "demo"}],
			"requestId": str(uuid.uuid4()),
			"version": "V2",
			"timestamp": int(round(time.time() * 1000)),
		}

	payload = {"message": json.dumps(request_json).encode("UTF-8")}

	headers = {
		"X-OCR-SECRET": secret_key,
	}

	response = requests.request(
		"POST", api_url, headers=headers, data=payload, files=files
	)
	Clova_result = response.json()
	payment_info = Clova_result["images"][0]["receipt"]["result"]["paymentInfo"]
	payment_date = payment_info["date"]["text"]  # 날짜
	payment_time = remove_space(payment_info["time"]["text"])  # 시간

	store_name = remove_space(
		Clova_result["images"][0]["receipt"]["result"]["storeInfo"]["name"]["text"]
	)  # 상호명
	total_price = remove_space(
		Clova_result["images"][0]["receipt"]["result"]["totalPrice"]["price"][
			"formatted"
		]["value"]
	)  # 금액


	parsed_data = {
		"dateOfPayment": payment_date,
		"timeOfPayment": payment_time,
		"storeName": store_name,
		"price": total_price,
	}
	
	return parsed_data


@app.route("/receipt", methods=["POST"])
def receipt_OCR():
	imageId = request.form['imageId']
	parsed_data = receipt_recognition(load_image(imageId))
	if parsed_data == 404 or parsed_data == 500:
		return Response(500)

	#print(parsed_data)
	response = Response(json.dumps(parsed_data),200)
	response.headers["Access-Control-Allow-Origin"] = "https://nestjs:3000"
	print(response.data)
	print(response.headers)
	return response

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=os.environ['PORT'], debug=True)
