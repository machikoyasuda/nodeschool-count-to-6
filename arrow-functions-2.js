var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate(() => console.log(this.yelp));
  }
};
foot.kick();

// x => x + 1
// means: function(x) { return x + 1; }
