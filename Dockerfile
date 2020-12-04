FROM node:13.12.0-alpine

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]