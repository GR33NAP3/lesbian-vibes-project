const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const ProfileRoutes = require("./routes/profile");
const AccountRoutes = require("./routes/account");


const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/authentication", require("./controllers/authentication"));

// // serve static front end in production mode
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, 'client', 'build')));
// }

//routes
app.use("/profile", ProfileRoutes);
app.use("/account", AccountRoutes);

const PORT = process.env.PORT || 8080;
// db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));


app.listen(PORT, console.log(`listining on port ${PORT}`));

module.exports = app;

