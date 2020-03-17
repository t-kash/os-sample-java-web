FROM node:lts-alpine as base

LABEL maintainer t-kash

WORKDIR /hellonuxt

RUN apk add git && git clone https://github.com/t-kash/os-sample-java-web.git

WORKDIR /hellonuxt/os-sample-java-web/hellonuxt

RUN npm install -g nuxt

RUN npm install


FROM base as build

RUN nuxt build -- --spa


FROM nginx:alpine as prod

RUN chgrp -R root /usr/share/nginx /etc/nginx /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /usr/share/nginx /etc/nginx /var/cache/nginx /var/run /var/log/nginx

COPY --from=build ./hellonuxt/os-sample-java-web/hellonuxt/.nuxt/dist/client /usr/share/nginx/html

COPY --from=build ./hellonuxt/os-sample-java-web/hellonuxt/default.conf /etc/nginx/conf.d/default.conf