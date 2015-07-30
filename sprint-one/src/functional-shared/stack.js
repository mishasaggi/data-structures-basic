var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackSize = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};


stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;

};

stackMethods.pop = function(){
  this.stackSize && this.stackSize--;
  var result = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return result;

};

stackMethods.size = function(){
  return this.stackSize;

};

//Stack.methodnames not working. Extending that as properties of Stack throwing error.




