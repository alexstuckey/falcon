exports.info = {
  name: "boxcar"
};

exports.send = function(address, message) {
  var fs = require('fs');

  // Load the configuration JSON file
  var config = JSON.parse(fs.readFileSync('./config.json'));

};
