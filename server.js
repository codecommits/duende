var express       =     require('express'),
    sprintf       =     require('locutus/php/strings/sprintf'),
    echo          =     require('locutus/php/strings/echo'),
    ucwords       =     require('locutus/php/strings/ucwords'),
    effectiveness =             'futile',
   
    
	  app 	= express();
	  messagebird = require('messagebird')('test_jfX7IFLu07gSea3nBwlkDMJvZ');

    app.set('view engine', 'jade');
    app.use(express.static(__dirname + '/public'));

    app.get('/',function(req,res) {
    messagebird.balance.read(function (err, response) {
  if (err) {
   console.log(err);
  } else
      
       res.render('index', {
       	
       	balance:response.amount,
        // balance:response['amount'];
       	// type:response.type
        // method:response.payment
        console.log(balance);


       	
       });
    });   
 });


app.listen(3000, function () {
	console.log('ReadyUp');
});