var BinarySearchTree = function(value){
  var newBinarySearchTree = {};

  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  newBinarySearchTree.value = value;

  _.extend(newBinarySearchTree, binarySearchTreeMethods);

  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left) {
      this.left.insert(newNode);
    }
    else {
      this.left = newNode;
    }
  } else {
    if (this.right) {
      this.right.insert(newNode);
    }
    else {
      this.right = newNode;
    }

  }
};

binarySearchTreeMethods.contains = function(value) {

};

binarySearchTreeMethods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
