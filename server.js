require ('dotenv').config()
const passport = require('passport')
const express = require ('express')
const cors = require ('cors')
const router = require("./routes/index")
require('./config/database')
const app = express()
require('./config/passport')
const fileUpload = require('express-fileupload')
var cloudinary = require('cloudinary').v2

cloudinary.config({cloud_name: 
    process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
// const path = require ('path')
app.use(express.static('fotos'))

app.use(cors())
app.use(fileUpload({useTempFiles: true}))
app.use(express.json())

app.use("/api", router)

app.listen(4000, () => console.log('App listening on port 4000'))