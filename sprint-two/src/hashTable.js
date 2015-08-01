var HashTable = function(){
  this._limit = 8;
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
