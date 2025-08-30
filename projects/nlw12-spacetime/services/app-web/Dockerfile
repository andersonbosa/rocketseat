FROM node:lts-alpine3.18

ARG NEXTJS_PORT=3000
ARG PORT=3000
ARG FASTIFY_SERVER_PORT=3333

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${NEXTJS_PORT} ${PORT}

ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT=${PORT}
ENV FASTIFY_SERVER_PORT=${FASTIFY_SERVER_PORT}

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script when container starts
CMD [ "npm", "start" ]