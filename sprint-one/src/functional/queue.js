var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var pointer = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    console.log("Size before increment: " + size);
    size++;
    console.log("Size after increment: " + size);

  };

  someInstance.dequeue = function(){
    size && size--;
    var result = storage[pointer];
    delete storage[pointer];
    console.log("Pointer before increment: " + pointer);
    pointer++;
    console.log("Pointer after increment: " + pointer);
    console.log("Result after dequeue: " + result);

    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
