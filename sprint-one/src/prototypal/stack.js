var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.stackSize = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  this.stackSize && this.stackSize--;
  var result = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return result;
};

stackMethods.size = function() {
  return this.stackSize;
}
