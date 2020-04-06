FROM node:12-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install

CMD ["npm", "start"]
