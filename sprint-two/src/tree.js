var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me - fixed!
  newTree.parent = parent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value, this));

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

treeMethods.removeFromParent = function(){
  var mySiblings = this.parent.children;
  for(var i=0; i<mySiblings.length; i++){
    if(this === mySiblings[i]){
      mySiblings.splice(i);
    }
  }
  this.parent = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild = O(1)
// contains = O(n)
