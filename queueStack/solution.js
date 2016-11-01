var Stack = function(value) {
  var storage = [];

  this.push = function(value){
    // value -> storage
    storage.push(value);
  };

  this.pop = function(){
    // last thing in storage would be removed
    return storage.pop();
  };

  this.size = function(){
    // .length of storage
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    // add value to inbox stack
    inbox.push(value);
  };

  this.dequeue = function(){
    // add value to outbox stack
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
    // .length of stacks
    return inbox.size() + outbox.size();
  };
};
