#!/bin/bash

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out $CERTS -subj "/C=MO/L=KH/O=1337/OU=student/CN=$DOMAIN_NAME"

sed -i "s|react_port|$REACT_PORT|g" /etc/nginx/sites-available/default
sed -i "s|nestjs_port|$NESTJS_PORT|g" /etc/nginx/sites-available/default
sed -i "s|my_domain|$DOMAIN_NAME|g" /etc/nginx/sites-available/default
sed -i "s|my_certs_key|$CERTS_KEY|g" /etc/nginx/sites-available/default
sed -i "s|my_certs|$CERTS|g" /etc/nginx/sites-available/default

cat /etc/nginx/sites-available/default

#sed -i '40s/.*/\tlog_format debug '\''$remote_addr - $remote_user [$time_local] '\'' '\''"$request" $status $body_bytes_sent '\'' '\''"$http_referer" "$http_user_agent"'\'';/' /etc/nginx/nginx.conf
#sed -i '41s/.*/\taccess_log \/var\/log\/nginx\/access.log debug;/' /etc/nginx/nginx.conf
#sed -i '42s/.*/\terror_log \/var\/log\/nginx\/error.log debug;/' /etc/nginx/nginx.conf

#cat /etc/nginx/nginx.conf

nginx -g "daemon off;"