import { Router } from 'express'
import Orphanages from './controllers/OrphanagesController'
import multer from 'multer'

import uploadConfi from './config/upload'

const routes = Router()

const upload = multer(uploadConfi)

routes.get('/orphanages', Orphanages.index)
routes.get('/orphanages/:id', Orphanages.show)
routes.post('/orphanages', upload.array('images'), Orphanages.create)

export default routes
