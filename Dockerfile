FROM node:alpine

RUN mkdir -p /pokedex

WORKDIR .

COPY package.json .

RUN yarn 

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]