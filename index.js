const express = require("express");
const router = require("./api/router");
const APP = express();
const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");


APP.use(bodyParser.urlencoded({extended: true}));
APP.use(bodyParser.json());
APP.use(express.static(path.resolve(__dirname, 'static')));

router(APP);





APP.listen(PORT, ()=>{
    console.log(`Server listens on port ${PORT}`);
})