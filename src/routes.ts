import { Router } from 'express'
import Orphanages from './controllers/Orphanages'

const routes = Router()

routes.get('/orphanages', Orphanages.index)
routes.post('/orphanages', Orphanages.create)

export default routes
