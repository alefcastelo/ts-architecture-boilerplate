import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'

const app = express()

app.use(routes)

dotenv.config({ path: './.env' })

app.listen(process.env.HOST_PORT, () => {
    console.log(`Server running on server http://localhost:${process.env.HOST_PORT}`)
})