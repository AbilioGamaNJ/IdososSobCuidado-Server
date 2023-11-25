const router = require('express-promise-router')()
const idosoController = require('../controllers/idoso.controllers')

router.get('/idoso', idosoController.findAll)
router.get('/idoso/:id', idosoController.findById)
router.post('/idoso', idosoController.create)
router.put('/idoso/:id', idosoController.update)
router.delete('/idoso/:id', idosoController.delete)
router.post('/login/idoso', idosoController.login)


module.exports = router