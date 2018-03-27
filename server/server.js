const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// required delivery info in from the JSON file located in the Modules folder. 
const deliveryInfo = require('./modules/deliveryJson.module');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/

// gets delivery info from JSON module
app.get('/delivery', (req, res) => {
    // sends deliveries to client.js    
    res.send(deliveryInfo.deliveries);
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});