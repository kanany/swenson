var CoffeePod = require('../models/coffee_pod');

var self = module.exports = {

	/**
	 * Filter coffee pods data
	 * 
	 * @param {product_type} product type
	 * @param {coffee_flavor} coffee flavor
	 * @param {pack_size} pack size
	 * @param {page} number current page
	 * @returns {array}
	*/
    list: function (req, res) {

    	var query = self.build_query(req);

        //pagination
        var perPage = 15, page = req.query.page - 1;

        CoffeePod.find(query)
	        .sort({'name': 1})
	        .limit(perPage)
		    .skip(perPage * page)
		    .select('name')
        	.exec(function (err, coffee_pods) {
        	if (err)
        		res.status(200).json({error:true, message: "Something went wrong!"});
        	else{
        		//get total pages count
        		CoffeePod.countDocuments(query).exec(function (err, count){
        			var pods_name = coffee_pods.map(pod => pod.name);
        			res.status(200).json({error:false , coffee_pods:pods_name, pages:Math.ceil(count/perPage)});
        		});
	        	
        	}
        });
    },

    /**
	 * Build coffee pods query 
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

		//check if coffee_flavor filter sent
		if (req.query.coffee_flavor)
		    query.coffee_flavor = req.query.coffee_flavor;

		//check if pack_size filter sent
		if (req.query.pack_size)
		    query.pack_size = req.query.pack_size;

		return query;
    }


}