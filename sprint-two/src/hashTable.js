var HashTable = function(newLimit){
  if (newLimit) this._limit = newLimit;
  else this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    this._storage.set(i,[[k,v]]);
  }
  else {
    var temp = this._storage.get(i);
    temp.push([k,v]);
    this._storage.set(i,temp);
  }
  this.checkTable();
};

HashTable.prototype.checkTable = function() {
  console.log("Checking Table....");
  var counter = 0;
  for(var j=0; j<this._limit; j++){
    if(this._storage.get(j)){
      counter++
    }
  }
  console.log("Counter: " + counter);
  if(counter >= this._limit * 0.50){
    this.expandTable();
  }
};

HashTable.prototype.expandTable = function() {
  console.log("Expanding Table...");
  var tempTable = new HashTable(this._limit * 2);
  for(var j=0; j<this._limit; j++){
    var bucket = this._storage.get(j);
    console.log("Current bucket: " + bucket);
    if(bucket){
      for(var k=0; k<bucket.length; k++){
        console.log("Current key/value pair: " + bucket[k][0] + ", " + bucket[k][1]);
        tempTable.insert(bucket[k][0], bucket[k][1]);
      }
    }
  }
  var oldTable = this;
  console.log("old:"+oldTable);
  oldTable = tempTable;
  console.log("new expanded table:"+oldTable);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] && bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  this._storage.each(function(item, index, collection) {
    if (index === i) {
      for (var j = 0; j < bucket.length; j++) {
        if (bucket[j][0] === k) {
          bucket[j] = null;
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //helper functions: get O(1)
 //                  set O(1)
 //                  each O(n)
 //insert O(1)
 //retrieve O(n)
 //remove O(n^2)
