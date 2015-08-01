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
      this.left.insert(value);
    } else {
      this.left = newNode;
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = newNode;
    }
  }
};

binarySearchTreeMethods.contains = function(value) {
  if(value === this.value){
    return true;
  } else if(value < this.value) {
    if(!this.left){
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if(value > this.value) {
    if(!this.right){
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

binarySearchTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  this.left && this.left.depthFirstLog(cb);
  this.right && this.right.depthFirstLog(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
