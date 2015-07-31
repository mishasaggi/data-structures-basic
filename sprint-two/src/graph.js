

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = [];
};

Graph.prototype.contains = function(node){
  for (var key in this.nodes) {
    if (key === node) return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i<this.nodes[fromNode].length; i++) {
    if (this.nodes[fromNode][i] === toNode) return true;
  }
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode] && this.nodes[fromNode].push(toNode);
  this.nodes[toNode] && this.nodes[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i =0; i< this.nodes[fromNode].length; i++ ){
    if(this.nodes[fromNode][i] === toNode){
      this.nodes[fromNode].splice(i);
    }
  }
  for(var i =0; i< this.nodes[toNode].length; i++ ){
    if(this.nodes[toNode][i] === fromNode){
      this.nodes[toNode].splice(i);
    }
  }

};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNodes = O(1)
// contains = O(n)
// removeNode = O(1)
// hasEdge = O(n)
// addEdge = O(1)
// removeEdge = O(n)
// forEachNode = O(n)

