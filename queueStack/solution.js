var Stack = function(value) {
  var storage = [];

  this.push = function(value){
    storage.push(value);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    var len = inbox.size();
    var out = outbox.size();
    if (out > 0) {
      return outbox.pop();
    }
    for (var i = 0; i < len; i++) {
      var a = inbox.pop();
      outbox.push(a);
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
};
