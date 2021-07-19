import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config({ path: '../.env' })

app.use('/public', express.static('./public'))

app.get('/', (req, res) => {
    res.json({ status: 'Ok', time: Date.now() })
})

app.listen(3000, () => {
    console.log('Server running on server http://localhost:3000')
})