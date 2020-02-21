// import libraries
import express from 'express'
import createError from 'http-errors'

const app = express()
const port = process.env.PORT || 3000

// define router folders
const itemRouter = require('./routes/item')

// set routes
app.use(['/item', '/api/item'], itemRouter)
// add router here ! ! ! ★

// set a server listener
app.listen(port, () => {
  console.log('Dolly server is up on', port)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.status, message: res.locals.message });
});

module.exports = app