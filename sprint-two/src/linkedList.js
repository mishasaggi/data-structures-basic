var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // 1. create new Node instance
    // 2. set new Node value to "value" and set new Node next to "null"
    // 3. use "tail" to select the last node, and evaluate its "next" to the new Node
    // 4. set "tail" point to the new node
    if(list.tail === null){
      list.tail = Node(value);
      list.head = list.tail;
    }
    else{
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head && (list.head = list.head.next);
    return result;
  };

  list.contains = function(target){

    var checkNode = function(currentNode){
      if (currentNode.value === target) {
        return true;
      }
      else if (currentNode.next === null){
        return false;
      }
      else{
        return checkNode(currentNode.next);
      }

    }

    return checkNode(list.head);

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
