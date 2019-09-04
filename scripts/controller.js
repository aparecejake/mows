$('#btn-connect').click(function () {
  $("#status").text('Connecting...');
  console.log("connected");
  client = mqtt.connect($("#name").val())
  client.on("connect", function () {
    $("#status").text('Connected');
  })

  $("#btn-publish").click(function () {

    var topic = $("#topic").val();
    var payload = $("#payload").val();

    if (topic == "" || payload == "") {
      alert("Please add a topic or/and payload")
    } else {
      client.publish(topic, payload)
    }
    $('#btn-subscribe').click(function (e) {
      client.subscribe($("#topic").val())
      $("#substatus").text('Subscribed');
    })
    $('#btn-unsubscribe').click(function (e) {
      client.unsubscribe($("#topic").val())
      $("#substatus").text('Unsubscribed');

     
    })

  })
  $('#btn-disconnect').click(function (e) {
    client.end()
    $("#status").text("Disconnected");
  })
  client.on("message", function (topic, payload) {
    var tr = $("<tr>")
    var timestamp = moment().format('MMMM D YYYY , h:mm:ss a')
    $("<td>").text(topic).appendTo($(tr))
    $("<td>").text(payload).appendTo($(tr))
    $("<td>").text(timestamp).appendTo($(tr))
    $("tbody").append($(tr))
    

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

