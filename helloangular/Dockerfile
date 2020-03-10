FROM node:lts-alpine as base

MAINTAINER t-kash

RUN git clone https://github.com/t-kash/os-sample-java-web.git

WORKDIR helloangular

RUN npm install


FROM base as build

RUN ng build --prod --output-path=./dist/build-by-docker


FROM nginx:alpine as prod

COPY --from=build ./dist/build-by-docker /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf