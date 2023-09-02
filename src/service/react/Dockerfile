FROM node:16-alpine3.14 AS builder

LABEL 	name="react" \
		version="1.0" \
		description="react"

EXPOSE $PORT

WORKDIR /app

COPY . .

ENV HOME=/app

RUN	yarn install

ENTRYPOINT [ "yarn", "run", "start" ]