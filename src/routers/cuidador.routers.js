const router = require('express-promise-router')()
const cuidadorController = require('../controllers/cuidador.controllers')

router.get('/cuidador', cuidadorController.findAll)
router.get('/cuidador/:id', cuidadorController.findById)
router.post('/cuidador', cuidadorController.create)
router.put('/cuidador/:id', cuidadorController.update)
router.delete('/cuidador/:id', cuidadorController.delete)
router.post('/login/cuidador', cuidadorController.login)


module.exports = router