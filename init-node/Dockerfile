FROM node:14
COPY ./package.json /package.json
COPY ./package-lock.json /package-lock.json
RUN npm i
COPY . .
ENTRYPOINT [ "node", "index.js" ]