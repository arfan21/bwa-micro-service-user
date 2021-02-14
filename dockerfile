FROM node:lts-alpine3.9

WORKDIR /app

COPY . ./
RUN chmod +x ./wait-for-it.sh
RUN apk add --no-cache bash
RUN yarn install
CMD yarn start