// var btnConnect = $('#btn-connect');
// var btnPublish = $('btn-publish');
// var btnDisconnect = $('.btn-disconnect');

$('#btn-connect').click(function () {
  console.log("connect btn");
  $("#status").text('Connecting...');
  client = mqtt.connect($("#name").val())//broker address

  client.on("connect", function () {
    $("#status").text('Connected');
  })

  client.on("message", function (topic, payload) {//mo execute if naay message
    console.log([topic, payload].join(": "));//receiving messagw
    client.end();//disconnect
  })

$("#btn-publish").click(function(){
  client.publish($("#topic").val(), $("#payload").val())//execute
  client.subscribe($("#topic").val())//subscribe

})
  $('#btn-disconnect').click(function (e) {
   client.end()
    $("#status").text("Disconnected");
  })
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

