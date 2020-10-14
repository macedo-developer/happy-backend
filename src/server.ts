import express from 'express'

import './database/connection'

const app = express()

app.use(express.json())

app.get('/orphanages', (request, response) => {
    return response.json({ user: 'Renata Macedo' })
})

app.listen(3333)
