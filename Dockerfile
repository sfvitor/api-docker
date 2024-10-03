FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3132

EXPOSE 3132

CMD [ "npm", "start" ]
