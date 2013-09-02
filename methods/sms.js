exports.info = {
  name: "sms"
};

exports.send = function(address, message) {
  var fs = require('fs');

  // Load the configuration JSON file
  var config = JSON.parse(fs.readFileSync('./config.json'));

  var nexmo = require('node-nexmo-api').Nexmo({
      key: config.nexmo.key,
      secret: config.nexmo.secret
    });

  nexmo.sms.send({
    from: 'Sysgar',
    to: address,
    type: 'text',
    text: message[1]
  }, function(err, response) {
    
     // Sample Response:
     // { 'message-count': '1',
     //    messages: 
     //     [ { 'message-price': '0.00450000',
     //         status: '0',
     //         'message-id': '05861BCE',
     //         'remaining-balance': '1.32350000',
     //         statusText: 'Success',
     //         meaning: 'The message was successfully accepted for delivery by nexmo' } ] }
     
     consolelog(err, response);
  });

  nexmo.account.getBalance(function(err, res) {
    consolelog(err, res);
  });

  console.log("   sending sms");

  function consolelog (err,messageResponse) {
    if (err) {
      console.log(err);
    } else {
      console.dir(messageResponse);
    }
  }

};
