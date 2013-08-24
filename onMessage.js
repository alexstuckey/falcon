module.exports = function(message, headers, deliveryInfo, queue){
  payload = JSON.parse(message.data.toString('utf-8'))

  // Acknowledges the message, should only be done if the notification
  // has been successfully processed. Need to check if it has been first.
  queue.queue.shift()
}