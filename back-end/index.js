const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const profileRoutes = require('./routes/profile')

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/profile',profileRoutes)

const PORT = process.env.PORT || 8080

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


app.listen(PORT, console.log(`listening on port ${PORT}`))