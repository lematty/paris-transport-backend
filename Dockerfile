FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN node -v
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
RUN npm run build
COPY ormconfig.docker.json /usr/src/app/ormconfig.json
CMD [ "npm", "run", "start" ]