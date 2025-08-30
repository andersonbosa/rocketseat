import axios from 'axios'

const BACKEND_HOST = process.env.FASTIFY_SERVER_HOST ?? 'localhost'
const BACKEND_PORT = process.env.FASTIFY_SERVER_PORT ?? 3333

export const api = axios.create({
  baseURL: `http://${BACKEND_HOST}:${BACKEND_PORT}`,
})
