const express = require("express");
const cors = require("cors");
const Sequelize = require('sequelize');
require("dotenv").config();

const profileRoutes = require("./routes/profile");

const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use('/authentication', require('./controllers/authentication'))

// // serve static front end in production mode
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, 'client', 'build')));
// }


//routes
app.use("/profile", profileRoutes);

const PORT = process.env.PORT || 8080;




// db connection

// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
  storage: process.env.PG_URI,
  dialect: 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
})

try {
  sequelize.authenticate() 
  console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
  console.log(`Unable to connect to PG: ${err}`) 
}

app.listen(PORT, console.log(`listining on port ${PORT}`));
