FROM node:lts-alpine as base

LABEL maintainer t-kash

WORKDIR /helloangular

RUN apk add git && git clone https://github.com/t-kash/os-sample-java-web.git

WORKDIR /helloangular/os-sample-java-web/helloangular

RUN npm install -g @angular/cli@9.0.1

RUN npm install


FROM base as build

RUN ng build --prod --output-path=./dist/build-by-docker


FROM nginx:alpine as prod

RUN chgrp -R root /usr/share/nginx /etc/nginx /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /usr/share/nginx /etc/nginx /var/cache/nginx /var/run /var/log/nginx

COPY --from=build ./helloangular/os-sample-java-web/helloangular/dist/build-by-docker /usr/share/nginx/html

COPY --from=build ./helloangular/os-sample-java-web/helloangular/default.conf /etc/nginx/conf.d/default.conf