var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail++;

};

queueMethods.dequeue = function(){
  var result = this.storage[this.head];
  delete this.storage[this.head];
  this.head === this.tail || this.head++;
  return result;

};

queueMethods.size = function(){
  return this.tail - this.head;
};

