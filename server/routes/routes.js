
var TestServerController = require('./../controller/TestServerController.js');

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json({ type: 'application/*+json'});

module.exports = function(app){

	app.get('/', TestServerController.index );

    //other routes..
//	app.post('/paypal-notify', jsonParser, MainController.paypalNotify);

//	app.get('/getBasicInfo/:vin', CheckoutController.getBasicInfo);

//	app.post('/stripe-notify', jsonParser, MainController.stripeNotify);
}
