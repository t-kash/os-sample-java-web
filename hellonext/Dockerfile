FROM node:lts-alpine as base

LABEL maintainer t-kash

WORKDIR /hellonext

RUN apk add git && git clone https://github.com/t-kash/os-sample-java-web.git

WORKDIR /hellonext/os-sample-java-web/hellonext

RUN npm install -g react react-dom next

RUN npm install


FROM base as build

WORKDIR /hellonext/os-sample-java-web/hellonext

RUN npm run build
RUN npm run export

FROM nginx:alpine as prod

RUN chgrp -R root /usr/share/nginx /etc/nginx /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /usr/share/nginx /etc/nginx /var/cache/nginx /var/run /var/log/nginx

COPY --from=build ./hellonext/os-sample-java-web/hellonext/out /usr/share/nginx/html

COPY --from=build ./hellonext/os-sample-java-web/hellonext/default.conf /etc/nginx/conf.d/default.conf