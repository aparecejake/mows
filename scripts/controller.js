// var btnConnect = $('#btn-connect');
// var btnPublish = $('btn-publish');
// var btnDisconnect = $('.btn-disconnect');
// var timestamp= null;
$('#btn-connect').click(function () {
  console.log("connected");
  $("#status").text('Connecting...');
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
      // timestamp = moment().format('MMMM D YYYY , h:mm:ss a')
    }
    // client.publish($("#topic").val(), $("#payload").val())
    client.subscribe($("#topic").val())

  })
  $('#btn-disconnect').click(function (e) {
    client.end()
    $("#status").text("Disconnected");
  })
  // $("#btn-subscribe").click(function () {
  //   var topics = $("#topics").val();
  //   if (topics == "") {
  //     alert("Please add a topic")
  //   } else {
  //     client.subscribe(topics);
  //   }
  // });
  

  client.on("message", function (topic, payload) {
    var tr = $("<tr>")
    $("<td>").text(topic).appendTo($(tr))
    $("<td>").text(payload).appendTo($(tr))
    //  $("<td>").text(timestamp).appendTo($(tr))
    $("tbody").append($(tr))
    console.log($(tr).html())
    console.log([topic, payload].join(": "));
    // client.end();
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

