const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const deliveryInfo = require('./modules/deliveryJson.module');
// const DeliveryRouter = require('./routes/delivery.router.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/delivery', (req, res) => {
    console.log('deliveryInfo', deliveryInfo.deliveries);
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});