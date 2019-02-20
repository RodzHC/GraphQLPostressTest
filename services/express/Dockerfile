FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH usr/src/app/node_modules/.bin:$PATH

EXPOSE 4000

ADD package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install -g nodemon
ADD . /usr/src/app
CMD ["nodemon","index.js"]



