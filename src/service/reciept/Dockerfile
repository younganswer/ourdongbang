FROM python:3.7

LABEL	name="flask" \
	version="1.0" \
	description="flask"

EXPOSE 5000


RUN pip install requirements.txt

ENTRYPOINT [ "yarn", "run", "start:dev" ]