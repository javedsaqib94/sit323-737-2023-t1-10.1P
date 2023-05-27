FROM node:16.3.0-alpine

# Create app directory 
WORKDIR /usr/src/app

# Install dependencies
# 

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]

