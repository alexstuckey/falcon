var amqp = require('amqp');

var connection = amqp.createConnection(
  { 
    host: 'localhost',
    port: 5672,
    login: 'guest',
    password: 'guest',
    authMechanism: 'AMQPLAIN',
    vhost: '/',
    ssl:  { 
            enabled : false
          }
  }
)

connection.on('ready', function(){
  console.log('Connected to RabbitMQ', )
})