exports.info = {
  name: "boxcar"
};

exports.send = function(address, message) {
  var fs = require('fs');
  var http = require('http');
  var querystring = require('querystring');

  // Load the configuration JSON file
  var config = JSON.parse(fs.readFileSync('./config.json'));

  var post_data = querystring.stringify({
    'email': address,
    'notification[from_screen_name]': message[0],
    'notification[message]': message[1]
  });

  var options = {
    host: 'boxcar.io',
    port: 80,
    path: '/devices/providers/' + config.boxcar.key + '/notifications',
    method: 'POST',
    headers: {
      'Content-Length': post_data.length
    }
  };

  var req = http.request(options, function(res) {
    // console.log('STATUS: ' + res.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      // console.log('BODY: ' + chunk);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  // write data to request body
  req.write(post_data);
  req.end();

};
