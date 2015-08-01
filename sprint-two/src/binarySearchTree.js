var BinarySearchTree = function(value, parent){
  var newBinarySearchTree = {};

  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  newBinarySearchTree.value = value;
  newBinarySearchTree.parent = parent;

  _.extend(newBinarySearchTree, binarySearchTreeMethods);

  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value, this);
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

binarySearchTreeMethods.breadthFirstLog = function(cb, array) {

  var recursePartialTree = function(tree) {
    var innerArray = [];
    if (tree.left) {
      innerArray.push(tree.left);
    }
    if (tree.right) {
      innerArray.push(tree.right);
    }

    for (var i = 0; i < innerArray.length; i++) {
    if (innerArray[i].left){
      cb(innerArray[i].left.value);
      recursePartialTree(innerArray[i].left);
    }
    if (innerArray[i].right){
      cb(innerArray[i].right.value);
      recursePartialTree(innerArray[i].right);
    }
  }
  };

  if (this.parent === undefined) {
    cb(this.value);
    if (this.left) {
      cb(this.left.value);
      recursePartialTree(this.left);
    }
    if (this.right) {
      cb(this.right.value);
      recursePartialTree(this.right);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
