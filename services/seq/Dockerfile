FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

expose 4000

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install -g nodemon

# add app
ADD . /usr/src/app

CMD ["nodemon","index.js"]