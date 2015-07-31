var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // 1. create new Node instance
    // 2. set new Node value to "value" and set new Node next to "null"
    // 3. use "tail" to select the last node, and change its "next" to the new Node
    // 4. set "tail" equal to the new node



  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
