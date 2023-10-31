const Express = require('express')
const Routes = Express.Router()

Routes.get("/", function(req,res) {
	res.status(200).send("Hello i'm another routes")
})

module.exports = Routes