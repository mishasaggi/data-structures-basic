var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me - fixed!

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));

};

treeMethods.contains = function(target){
  var checkTree = function(currentNode){
    if(currentNode.value === target){
      return true;
    }
    else if(currentNode.children.length > 0){
      for(var i=0; i<currentNode.children.length; i++){
        var result = checkTree(currentNode.children[i]);
        if (result) return result;

      }
    }
    return false;
  }
    return checkTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild = O(1)
// contains = O(n)
