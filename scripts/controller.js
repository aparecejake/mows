// basic functionalities
var btnConnect = document.getElementById('btn-connect');
var btnPublish = document.getElementById('btn-publish');
var btnDisconnect = document.getElementById('btn-disconnect');

btnConnect.addEventListener('click', function (e) {
  e.preventDefault();
  console.log("connect btn");
  document.getElementById("status").innerHTML = 'Connected';

  client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")//broker address
  client.subscribe("mqtt/demo")//subscribe

  client.on("connect", function () {
    console.log("Successfully connected");//triggered
  })

  client.on("message", function (topic, payload) {//mo execute if naay message
    console.log([topic, payload].join(": "));//receiving messagw
    client.end();//disconnect
  })

  client.publish("mqtt/demo", "hello world!")//execute

})
btnDisconnect.addEventListener('click', function (e) {
  e.preventDefault();
  console.log("Connection Closed")
  document.getElementById("status").innerHTML = 'Disconnected';
})

// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })

