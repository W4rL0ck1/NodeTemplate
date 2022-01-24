// Main JS file, your application entry point
const express = require('express');
const compression = require('compression'); // https://www.npmjs.com/package/compression
const app = express();

//Use Libs 
app.use(express.static('public'));
app.use(compression()); //Compress all routes
app.use( express.json());

//Allocate here the app port and domain
const PORT = process.env.PORT || 5000

app.use(require("./routes"));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));