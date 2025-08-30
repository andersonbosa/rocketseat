import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastify from 'fastify'
import { resolve } from 'node:path'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'

const app = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
})

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, { secret: process.env.JWT_SECRET || 'secret-potato' })
app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)
// app.register(userRoutes) /* TODO: API CRUD to work with Users */

app.get('/status', (_req, _res) => {
  return {
    status: 'live',
    when: new Date().toISOString(),
  }
})

app
  .listen({
    port: (process.env.FASTIFY_SERVER_PORT ?? 3333) as number,
    host: (process.env.FASTIFY_SERVER_HOST ?? '0.0.0.0') as string,
  })
// .then(() => {
// console.log('🚀 HTTP server running on port http://localhost:3333')
// })
