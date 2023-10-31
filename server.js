const Express = require('express')
const App = Express()
const PORT = 5000
const Routes = require('./routes/routes')
const DataUser = require('./data')

// Routes
App.use('/hello', Routes)

App.listen(PORT, function(){
	console.log('Server running on port : http://localhost:' + PORT)
})

App.get("/", function(req,res) {
	res.send("Hello i'm jhon")
})

Routes.get("/users", function(req,res) {
	const {id } = req.query
	// console.log(id )
	res.status(200).send({
		data: DataUser
	})
})
