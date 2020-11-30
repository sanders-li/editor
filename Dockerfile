FROM node:13.12.0-alpine

WORKDIR /

ENV PATH /node_modules/.bin:$PATH
ENV PORT=3000
ENV PORT=3001

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent


COPY . ./

EXPOSE 3000
EXPOSE 3001

CMD ["npm", "start"]