// Candy distribution problem

/**
 * @param {number[]} candyType
 * @return {number}
 * Contraints:
 * * n == candyType.length
 * * 2 <= n <= 10^4
 * * n is even.
 * * -10^5 <= candyType[i] <= 10^5
 * 
 * Alice can only 'eat' n/2 candy, and she wants to eat maximum different candytype (i)
 * return maximum number of candy type she can eat in n/2
 */
var distributeCandies = function(candyType) {
    let maxCandy = 1;
    let n = (candyType.length/2);
    let candyTracker = new Set();
    let candyEat = 0;

    let eatCandy = (i) => {
      if(candyTracker.size === n){
        return candyTracker.size;
      }
      for(let j = i+1; j < candyType.length; j++){
        if(candyTracker.size !== n){
          if(!candyTracker.has(candyType[j])){
            candyTracker.add(candyType[j]);
          }
        } else {
          return candyTracker.size;
        }
      }
      return candyTracker.size;
    }
    for(let i = 0; i < candyType.length; i++){
      candyTracker.add(candyType[i]);
      candyEat = eatCandy(i);
      if(candyEat > maxCandy){
        maxCandy = candyEat;
        candyTracker.clear();
      }
      if(maxCandy === n){
        return maxCandy;
      }
    }

    return maxCandy;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); // > 3
console.log(distributeCandies([1, 1, 2, 3])); // > 2
console.log(distributeCandies([6, 6, 6, 6])); // > 1

// most optimal way:
/**
 * 
 */