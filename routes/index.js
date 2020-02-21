import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('작동 여부 확인' + Math.random())
})

module.exports = router