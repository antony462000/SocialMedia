const express = require("express");
const router = require("./router");
const app = express();
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, (error) => {
    if (!error) console.log(`Server listening to http://localhostt:${port}/`);
    else console.log("Error ocuured! Server can't start", error);
});
app.use("/user",router);