require ('dotenv').config()
const passport = require('passport')
const express = require ('express')
const cors = require ('cors')
require('./config/database')
const router = require("./routes/index")
const app = express()
require('./config/passport')
const fileUpload = require('express-fileupload')
var cloudinary = require('cloudinary').v2

const path = require('path')

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


const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+ "/client/build/index.html"))
    })
}

app.listen(port, host, () => {
    console.log(`App listening on port ${port} on ${host}`)
})
