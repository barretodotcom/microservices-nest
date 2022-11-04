FROM node:19-alpine3.15

WORKDIR /usr/src/app

RUN npm install

COPY . .