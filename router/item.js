import express from 'express'
import itemService from '../service/itemService'

// const itemService = new ItemService()

const router = express.Router()

/* 
Get item list
*/
router.get('/', async (req, res) => {
    res.json(await itemService.get());
})

module.exports = router