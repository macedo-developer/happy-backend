import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanages from '../models/Orphanages'

export default {
    async index(resquest: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanages)

        const orphanages = await orphanagesRepository.find()

        return response.json(orphanages)
    },
    async show(request: Request, response: Response) {
        const { id } = request.params
        const orphanagesRepository = getRepository(Orphanages)

        const orphanage = await orphanagesRepository.findOne(id)

        if (!orphanage) return response.status(400).json({ message: 'Orphanage not found' })

        return response.json(orphanage)
    },
    async create(request: Request, response: Response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends } = request.body

        const orphanagesRepository = getRepository(Orphanages)

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        })

        await orphanagesRepository.save(orphanage)

        return response.status(201).json(orphanage)
    },
}
