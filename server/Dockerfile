FROM node:7.10.0

ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /usr/src/server && cp -a /tmp/node_modules /usr/src/server

WORKDIR /usr/src/server

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]