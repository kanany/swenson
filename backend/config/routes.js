//controllers
var coffeeMachinesController = require('../app/controllers/coffeeMachinesController');
var coffeePodsController = require('../app/controllers/coffeePodsController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



module.exports = function (app) {
	app.get('/', (req, res) => {
		res.json({"error" : false, "message" : "Hello !"})
	});
	app.get("/coffee_machines",coffeeMachinesController.list);
	app.get("/coffee_pods",coffeePodsController.list);

	//swagger for API
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}