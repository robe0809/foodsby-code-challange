const deliveryInfo = require('../models/deliveries-sample.json');

console.log('delivery Info', deliveryInfo);
console.log('arrays', deliveryInfo.dropoffs);

let deliveries = deliveryInfo.dropoffs;

for(let i = 0; i < deliveries.length; i++) {
    console.log('deliveries', deliveries[i].deliveries);
}



module.exports = deliveryInfo;
