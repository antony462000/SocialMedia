const express = require("express");
const router = require("./router");
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.port, (error) => {
    if (!error) console.log(`Server listening to http://localhostt:${process.env.port}/`);
    else console.log("Error ocuured! Server can't start", error);
});

app.use("/user", router);