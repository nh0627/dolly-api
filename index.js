import express from 'express'
const app = express()
const port = process.env.PORT || 3000
const ROUTES_PATH = './routes'

app.use('/', require(`${ROUTES_PATH}`))
app.use('/item', require(`${ROUTES_PATH}/item`))

app.listen(port, () => {
  console.log('Dolly server is up on', port)
})

module.exports = {
  path: '/api',
  handler: app
}