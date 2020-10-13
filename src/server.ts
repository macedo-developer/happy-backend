import express from 'express'

const app = express()

app.use(express.json())

app.get('/orphanages', (request, response) => {
    return response.json({ user: 'Renata Macedo' })
})

app.listen(3333)
