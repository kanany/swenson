var CoffeeMachine = require('../models/coffee_machine');

var self = module.exports = {

	/**
	 * Filter coffee machines data
	 * 
	 * @param {product_type} coffee machine type
	 * @param {water_line_compatible} water line
	 * @param {page} number of current page
	 * @returns {array}
	*/
    list: function (req, res) {

    	var query = self.build_query(req);

        //pagination
        var perPage = 15, page = req.query.page - 1;

        CoffeeMachine.find(query)
	        .sort({'name': 1})
	        .limit(perPage)
		    .skip(perPage * page)
		    .select('name')
        	.exec(function (err, coffee_machines) {
        	if (err)
        		res.status(200).json({error:true, message: "Something went wrong!"});
        	else{
        		//get total pages count
        		CoffeeMachine.countDocuments(query).exec(function (err, count){
        			var machines_name = coffee_machines.map(machine => machine.name);
        			res.status(200).json({error:false , coffee_machines:machines_name, pages:Math.ceil(count/perPage)});
        		});
	        	
        	}
        });
    },

    /**
	 * Build coffee machines query 
	 * 
	 * @param {req} request params
	 * @returns {array}
	*/
    build_query: function(req){
    	//query build
        let query = {};

		//check if product type filter sent
		if (req.query.product_type)
		    query.product_type = req.query.product_type;

		//check if water_line_compatible filter sent
		if (req.query.water_line_compatible)
		    query.water_line_compatible = req.query.water_line_compatible

		return query;
    }


}