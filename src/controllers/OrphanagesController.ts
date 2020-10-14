import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'

import orphanagesView from '../view/orphanages_view'

export default {
    async index(resquest: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage)

        const orphanages = await orphanagesRepository.find({
            relations: ['images'],
        })

        return response.json(orphanagesView.renderMany(orphanages))
    },
    async show(request: Request, response: Response) {
        const { id } = request.params
        const orphanagesRepository = getRepository(Orphanage)

        const orphanage = await orphanagesRepository.findOne(id, {
            relations: ['images'],
        })

        if (!orphanage) return response.status(400).json({ message: 'Orphanage not found' })

        return response.json(orphanagesView.render(orphanage))
    },
    async create(request: Request, response: Response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends } = request.body

        const orphanagesRepository = getRepository(Orphanage)

        const requestImage = request.files as Express.Multer.File[]

        const images = requestImage.map((image) => {
            return { path: image.filename }
        })

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images,
        })

        await orphanagesRepository.save(orphanage)

        return response.status(201).json(orphanage)
    },
}
