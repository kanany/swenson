// configs/database.js
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongo_path = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose.connect(mongo_path, { useNewUrlParser: true });

// get notified if the connection
// was successful or not
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`Connected to the ${process.env.DB_NAME} database`);
})
