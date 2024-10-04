FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_API_URL=http://100.26.164.56:5000

EXPOSE 5173

CMD [ "npm", "start" ]
