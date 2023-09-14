# -*- coding: utf-8 -*-
from flask import Flask, request,render_template
import requests, os, uuid, time, json
from werkzeug.utils import secure_filename
from urllib.parse import quote


app = Flask(__name__)

# 업로드된 이미지를 저장할 디렉토리 설정
UPLOAD_FOLDER = "./uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


def remove_space(str):
    return str.replace(" ", "")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/receipt_OCR", methods=["POST"])
def receipt_OCR():
    api_url = "https://scvmznlk42.apigw.ntruss.com/custom/v1/24564/a0629381f32bee7cf0b261bb5a8ff1b2787c9b4c7f6fd82d54ec6e500752315c/document/receipt"
    secret_key = "WEhNZUZkR0thdEdMcnBybVVhU2NsU3N5RFNud2xaWXg="
    if "image" not in request.files:
        return "이미지 파일을 선택해주세요."

    files = request.files["image"]

    if files.filename == "":
        return "파일을 선택하지 않았습니다."

    if files:
        # 이미지 파일의 확장자를 확인하여 안전하게 저장합니다.
        filename = secure_filename(files.filename)
        filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        files.save(filepath)
        image_data = [("file", open(filepath, "rb"))]
    print("files : ", files)
    print("files's type : ", type(files))

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
        "POST", api_url, headers=headers, data=payload, files=image_data
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

    # 결과 출력
    # print("dateOfPayment :", payment_date)
    # print("timeOfPayment :", payment_time)
    # print("storeName :", store_name)
    # print("price :", total_price)
    parsed_data = {
        "dateOfPayment": payment_date,
        "timeOfPayment": payment_time,
        "storeName": store_name,
        "price": total_price,
    }
    os.remove(filepath)
    print(parsed_data)
    return parsed_data


if __name__ == "__main__":
    app.run(debug=True,port=os.environ["PORT"])
