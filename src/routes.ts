import { Router } from 'express'
import Orphanages from './controllers/Orphanages'

const routes = Router()

routes.get('/orphanages', Orphanages.index)
routes.get('/orphanages/:id', Orphanages.show)
routes.post('/orphanages', Orphanages.create)

export default routes
