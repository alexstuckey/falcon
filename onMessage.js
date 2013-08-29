module.exports = function(message, headers, deliveryInfo, queue){
  var payload = JSON.parse(message.data.toString('utf-8'))
  console.log("Received message: ", payload)

  var method_string = './methods/' + payload[1] + '.js'
  var method = require(method_string)
  console.log("Using method:", method.info['name'])

  method.send(payload[3], payload[2])

  // Acknowledges the message, should only be done if the notification
  // has been successfully processed. Need to check if it has been first.
  queue.queue.shift()
}