var five = require("johnny-five");
var Spark = require("spark-io");
var d0;
var d1;
var d2;
var d3;
var a0;
var a1;
var a2;
var a3;

var status = {
  d0: true,
  d1: true,
  d2: true,
  d3: true,
  a0: true,
  a1: true,
  a2: true,
  a3: true
};

module.exports = {
  init: function(){
    var board = new five.Board({
      io: new Spark({
        token: "7e0aa933046e52c5f4aa0bd6389e5145aef22d75",
        deviceId: "51ff6b065082554952230887"
      })
    });
    d0 = new five.Relay({
      pin: "D0",
      type: "NC"
    });
    d1 = new five.Relay({
      pin: "D1",
      type: "NC"
    });
    d2 = new five.Relay({
      pin: "D2",
      type: "NC"
    });
    d3 = new five.Relay({
      pin: "D3",
      type: "NC"
    });
    a0 = new five.Relay({
      pin: "A0",
      type: "NC"
    });
    a1 = new five.Relay({
      pin: "A1",
      type: "NC"
    });
    a2 = new five.Relay({
      pin: "A2",
      type: "NC"
    });
    a3 = new five.Relay({
      pin: "A3",
      type: "NC"
    });
    board.on("ready", function() {
      this.pinMode("A0", this.MODES.OUTPUT);
      this.pinMode("A1", this.MODES.OUTPUT);
      this.pinMode("A2", this.MODES.OUTPUT);
      this.pinMode("A3", this.MODES.OUTPUT);
      this.repl.inject({
        d0: d0,
        d1: d1,
        d2: d2,
        d3: d3,
        a0: a0,
        a1: a1,
        a2: a2,
        a3: a3
      });

    a0.on();
    a1.on();
    a2.on();
    a3.on();
    d0.on();
    d1.on();
    d2.on();
    d3.on();
    });
  },
  toggle:{
    d0: function(){
      d0.toggle();
      status.d0 = d0.isOn;
    },
    d1: function(){
      d1.toggle();
      status.d1 = d1.isOn;
    },
    d2: function(){
      d2.toggle();
      status.d2 = d2.isOn;
    },
    d3: function(){
      d3.toggle();
      status.d3 = d3.isOn;
    },
    a0: function(){
      a0.toggle();
      status.a0 = a0.isOn;
    },
    a1: function(){
      a1.toggle();
      status.a1 = a1.isOn;
    },
    a2: function(){
      a2.toggle();
      status.a2 = a2.isOn;
    },
    a3: function(){
      a3.toggle();
      status.a3 = a3.isOn;
    }
  },
  status: status
};
