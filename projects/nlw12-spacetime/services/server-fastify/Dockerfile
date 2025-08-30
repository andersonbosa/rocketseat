# https://github.com/prisma/prisma/issues/16901
FROM node:lts-alpine3.18

ARG FASTIFY_SERVER_PORT=3333

WORKDIR /server

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx prisma generate

EXPOSE ${FASTIFY_SERVER_PORT}

CMD ["npm", "start"]
