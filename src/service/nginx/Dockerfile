FROM debian:bookworm-slim

LABEL	name="nginx" \
		version="1.0" \
		description="nginx"

# create nginx user/group first, to be consistent throughout docker variants
RUN set -x \
    && groupadd --system --gid 101 nginx \
    && useradd --system --gid nginx --no-create-home --home /nonexistent --comment "nginx user" --shell /bin/false --uid 101 nginx \
    && apt-get update \
    && apt-get install --no-install-recommends --no-install-suggests -y gnupg1 ca-certificates

RUN apt-get install -y nginx && apt-get install -y openssl

COPY ./conf/default.conf /etc/nginx/sites-available/default.conf
COPY ./tool/setup.sh /setup.sh

RUN chmod +x /setup.sh

ENTRYPOINT [ "/bin/bash", "/setup.sh" ]