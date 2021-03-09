// Design a full HashMap without using any Hash table libraries

/**
 * MyHashMap must have the following functionalities:
 * put(key, value)
 * get(key)
 * remove(key)
 * 
 * if get is given a key that does not exist, return -1
 * if put is given a key that already exist, update the existing value;
 */

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.map = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  return (this.map[key] === undefined ? -1 : this.map[key]);
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  this.map[key] = undefined;
};

let myHMap = new MyHashMap();
myHMap.put(10, 10);
console.log(myHMap.get(10)); // > 10
console.log(myHMap.get(1)); // > -1
myHMap.put(1, 2);
console.log(myHMap.get(1)); // > 2
myHMap.put(1, 5);
console.log(myHMap.get(1)); // > 5
myHMap.remove(10);
console.log(myHMap.get(10)); // > -1


// I was close on the most common approach
/**
 * For the get function, instead of checking if it is undefined, check if it is !== undefined instead for a bit faster result
 * For the remove function, you can use delete this.map and it will work
 * In total, this should make get and remove go a little bit faster.
 */