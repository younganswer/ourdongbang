FROM node:16-alpine3.14 AS builder

LABEL	name="nestjs" \
		version="1.0" \
		description="nestjs"

EXPOSE $PORT

WORKDIR /app

COPY . .

ENV HOME=/app

RUN	yarn install

ENTRYPOINT [ "yarn", "run", "start" ]