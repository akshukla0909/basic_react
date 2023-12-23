const express = require('express');
const app = express()

require('dotenv').config();

// logger
const logger = require('morgan')
app.use(logger('tiny'))


// routes
app.use('/', require('./routes/indexRoutes.js'))

app.listen(process.env.PORT, console.log(`server running on port ${process.env.PORT}`))
