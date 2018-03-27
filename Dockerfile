FROM node:8.10.0

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
RUN npm install -g --no-optional @angular/cli
COPY . .

EXPOSE 4200 49153

CMD [ "npm", "start" ]