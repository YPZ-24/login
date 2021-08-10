const express = require('express')
const app = express()
const userRoutes = require('./routes/user.routes')
const errorMiddleware = require('./middleware/errorMiddleware')
//Middlewares
app.use(express.json())
//Routes
app.use('/api/users',userRoutes)
//Error middlware
app.use(errorMiddleware)

module.exports = app