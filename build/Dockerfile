# Copyright 2020 - Offen Authors <hioffen@posteo.de>
# SPDX-License-Identifier: Apache-2.0

FROM alpine:3.13
LABEL maintainer="offen <hioffen@posteo.de>"

RUN apk add -U --no-cache ca-certificates

COPY ./bin/offen-linux-amd64 /opt/offen/offen-linux-amd64
RUN ln -s /opt/offen/offen-linux-amd64 /usr/local/bin/offen

RUN mkdir -p /var/opt/offen \
	&& mkdir -p /var/www/.cache \
	&& mkdir -p /etc/offen

ENV OFFEN_SERVER_PORT 80
EXPOSE 80 443

WORKDIR /root
ENTRYPOINT ["offen"]
