import express from 'express'
import itemDTO from '../dto/itemDTO'

class ItemService {

    async get() {
        return itemDTO.get()
    }
}

export default new ItemService()