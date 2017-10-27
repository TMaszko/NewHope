/* DEPENDENCIES */

const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const multer = require('multer')
const imageType = require('image-type')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const cors = require('cors')
const formData = require("express-form-data");

// /* APP MODULES */

app.use(cors())




/* CONFIG */

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))


mongoose.Promise = global.Promise;

/* MODELS */

app.models = {
    

};


/* ROUTES */
const routes = {
    admin : require('./src/routes/admin.js'),
    challenge : require('./src/routes/challenge.js'),
    user : require('./src/routes/user.js'),
}
app.use("/admin/", routes.admin())
app.use("/challenges/", routes.challenge())
app.use("/user/", routes.user())


/* MONGO CONNECT */
const port = 3000
mongoose.connect('mongodb://admin:TomeczekJestSuper1@ds137435.mlab.com:37435/newhope', { useMongoClient: true })
    .then((db) => {
        app.listen(port, () => {
            console.log(`listening on ${port}`)
        })
    })