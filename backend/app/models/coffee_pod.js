var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var podSchema = new Schema({
  name: {type: String},
  product_type: {
    type: String,
    enum: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD']
  },
  coffee_flavor: {
    type: String,
    enum: ['COFFEE_FLAVOR_VANILLA', 'COFFEE_FLAVOR_CARAMEL', 'COFFEE_FLAVOR_PSL', 'COFFEE_FLAVOR_MOCHA', 'COFFEE_FLAVOR_HAZELNUT']
  },
  pack_size: {
    type: Number,
    enum: [1,3,5,7]
  }

});

module.exports = mongoose.model('coffee_pod', podSchema);