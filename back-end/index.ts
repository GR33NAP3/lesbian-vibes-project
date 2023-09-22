const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
    user: "avnadmin",
    password: "AVNS_jH6_b4jfwiQPe4SMrtf",
    host: "lesbian-vibes-alexanderkinsley405-42de.aivencloud.com",
    port: 27379,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUKL8fgFS5gAwtMj8I4Mt4YZEbhhQwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYjE5YWY4OGQtY2FhMC00MTAwLWIyNWQtNGVmNmZkYTRj
NTVkIFByb2plY3QgQ0EwHhcNMjMwOTIxMjI1NDMxWhcNMzMwOTE4MjI1NDMxWjA6
MTgwNgYDVQQDDC9iMTlhZjg4ZC1jYWEwLTQxMDAtYjI1ZC00ZWY2ZmRhNGM1NWQg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALr5RqhQ
rOv+oyiM2mkiKdV2XTYKMEGMHrpBhPhBzorYL+8ZN4KnxQAzC1Vle5XfKwH14kcI
Iu84V2yNPqkLyHho1kF6jiVY3NM20O+KTTnqtVaLMKDtEEAA2MB6v+sG6LXl91EF
9G/BRFaJVUftJ+CQDQKxu/fgI8uP1nKpaS3nH6p/oHUhLxGhNsaADQQ0Q96OvUSA
gZmsHc5PwVGSFIdWTJIZHQBkRXx/C3hR9wWvhn3jEWDKSOi1Gojx8uyntwbUz7E7
/ItIeTv1biBhLr8WSjn/rhDsltGp0au/ffrA+Yt/roxD88bxXAzCfD9B7eArzAfd
RJCBuHr1cMSuYXLUibxVLIUj99hobWamQkIMHoQw1Pv2P/Rcuc02L0gKeuS2FBFq
LvHoeasZiXObmV0BWHv5qjMEfnd6rsHa0FFwTwrdKyLCz+73pGCU1s1bKKMAXBEa
yUw8bbS5+Pu7lX+lclfhLfM0u99xj19QCXRZ+xOYf9OIomepIcnjUYlj2wIDAQAB
oz8wPTAdBgNVHQ4EFgQUcKgcBBwRN0yjZk9AR6BSUy8Py+IwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBADgu+H2ggWowaIdn
OPvA03xCAd8/7n7lqri0eWXAn+FT/6N01S9z+U60MNGU0hvvaP17TMGePnlqodWY
hv6DxwmGy8OY17iwqFtP5X3ziHSXxQUc44Hkn5Z0xQCxj3GgBB22dlfY6Ge5EiRM
kxM9bOkfb0TQhmg2fyYS+/dk1SWsV9ozLX+hbZ8c45kyIHaQd0nXT7FXUf06MdWR
c752QHcaTCIJ2siLrpAOYHo8rf8eR8QQlvIq/c0OYpBODosgGPdZXXW3btIlLFBm
DKac+7brIhHcxqkrC3tYGGPqvQv70f7izGpJ9cKWBD7d5EBisy0mUnT6T9Yu/Vya
bXQ+EeE4irR8A7kVJg44Apf/zxbTeEbL1C4EaUlcQfz2PwUkj+BX2kUOI5aa6gAc
q9Vlu+WM+/0S7FS9nKc7kMEJu+GXEmW9KzgR5UzIVURJuQuyZf1d1Vwg0V4XeWOi
HJ4f5uKvY7hdE06s3vW40rR/81+1Mirl91rFdbs8FuNGSNlzmQ==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});

const express = require("express");
const cors = require("cors");
// const Sequelize = require('sequelize');
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

// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize({
//   storage: process.env.PG_URI,
//   dialect: 'postgres',
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD
// })

// try {
//   sequelize.authenticate() 
//   console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//   console.log(`Unable to connect to PG: ${err}`) 
// }

app.listen(PORT, console.log(`listining on port ${PORT}`));
