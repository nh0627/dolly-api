import express from 'express'
const app = express()
const port = process.env.PORT || 3000
const ROUTES_PATH = './routes'

app.get('/', (req, res, next) => {
  res.send('작동 여부 확인' + Math.random())
})

app.use('/item', require(`${ROUTES_PATH}/item`))

app.listen(port, () => {
  console.log('Server is up on', port)
})

module.exports = {
  path: '/api',
  handler: app
}