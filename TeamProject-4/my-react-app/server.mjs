import express from 'express'
import dotenv from 'dotenv'
import {users} from './users.mjs'

dotenv.config()

const port = process.env.PORT

const server = express()

server.get('/users', (req, res) => {
    res.status(200).json(users)
});

server.listen(port, () => {
    console.log(`Server running on ${port}`)
})

