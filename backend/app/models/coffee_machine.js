var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var machineSchema = new Schema({
  name: {type: String},
  product_type: {
    type: String,
    enum: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE']
  },
  model: {
    type: String,
    enum: ['BASE', 'PREMIUM', 'DELUXE']
  },
  water_line_compatible: {type: Boolean}

});

module.exports = mongoose.model('coffee_machine', machineSchema);