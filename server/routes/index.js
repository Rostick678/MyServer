const Router = require('express')
const router = new Router()
const cartRoutes = require('./cartRoutes')

router.use('/cart', cartRoutes)

module.exports = router