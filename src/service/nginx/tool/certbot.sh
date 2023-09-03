#!/bin/bash

NC='\033[0m' # No Color
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'

read -p "$(echo -e "Enter your domain name: ")" domain
if [ -z "$domain" ]; then
	echo -e "${RED}Error: Domain name cannot be empty${NC}"
	exit 1
fi

read -p "$(echo -e "${BLUE}'$domain'${NC} will be used to generate SSL certificate. Continue? [y/N] ")" confirm
if [ "$confirm" != "y" -a "$confirm" != "Y" ]; then
	echo -e "${RED}Aborted${NC}"
	exit 1
fi

echo -e "${GREEN}Generating SSL certificate for '$domain' ...${NC}"
docker run -it --rm --name certbot \
	-v /etc/letsencrypt:/etc/letsencrypt \
	-v /var/lib/letsencrypt:/var/lib/letsencrypt \
	certbot/certbot certonly -d $domain \
	--manual --preferred-challenges dns \
	--server https://acme-v02.api.letsencrypt.org/directory