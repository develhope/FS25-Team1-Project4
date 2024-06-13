import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT

const server = express()

server.get('/', (req, res) => {
    res.status(200).json()
});

server.listen(port, () => {
    console.log(`Server running on ${port}`)
})

