const { Router } = require('express')

const ContactController = require('./app/controllers/ContactController')
const CategoryController = require('./app/controllers/CategoryController')

const router = Router();

// Contacts Routes
router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.post('/contacts', ContactController.store)
router.put('/contacts/:id', ContactController.update)


// Categories Routes
router.get('/categories', CategoryController.index)
router.post('/categories', CategoryController.store)


module.exports = router
