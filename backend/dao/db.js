// import modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// configure dotenv
dotenv.config();


// Mongoose will support my promise chains
mongoose.Promise = global.Promise;
// Add Mongoose connection to Express.js
mongoose.connect(
// Set up the connection to your database.
 "mongodb://0.0.0.0:27017/barluna_db",


  {// useNewUrlParser: true , // not longer neccesary
	// useFindAndModify: false } // not longer neccesary
  });
//mongoose.set("useCreateIndex", true); // not longer neccesary
// Assign the database to the db variable.
const db = mongoose.connection;

// Log a message when the application connects to the database.
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// export mongoose
module.exports = mongoose;
