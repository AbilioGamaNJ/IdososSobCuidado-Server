const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routers/index')
const cuidadorRouters = require('./routers/cuidador.routers')
const idosoRouters = require('./routers/idoso.routers')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: 'aplication/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/', cuidadorRouters)
app.use('/api/', idosoRouters)
module.exports = app