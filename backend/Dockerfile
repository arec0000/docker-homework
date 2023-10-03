FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm run build

COPY . .

CMD ["npm", "run", "start"]
