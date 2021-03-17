/**
 * Given a different denominations of coins and a target amount, return the fewest number of coins needed to make up that amount
 * Return -1 if no combination is possible. Can safely assume there are infinite amount of coins
 * 
 * I: An array of 'coins' with different denominations, and an int of target amount
 * O: An int indicating the fewest number of coin needed to make target amount. -1 if no possible combination is possible.
 * C: 1 <= coins.length <= 12; 1 <= coins[i] <= (2^38)-1; 0 <= amount <= 10^4
 * E: coins:[1,2,5], amount:11, out: 3 (5+5+1=11); coins: [2], amount:3, out: -1; coins:[1], amount: 0, out: 0; coins:[1], amount: 2, out: 2
 */

/**
 * Since our input coins is in an array, we can try to sort the coins by value (largest to smallest). Then we go down the line, substracting the largest from the amount until we can no longer subtract.
 * Once that happens, if any amount remains, continue on to the next coin, until amount is zero.
 * Every subtraction would increment a count variable. At the end, return the count variable.
 * If going through all the values still yields a remainder, return a -1.
 * 
 * 
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  let count = 0;
  let sortCoins = coins.slice().sort((a,b) => b - a);

  while(amount > 0 && sortCoins.length > 0){
    if(sortCoins[0] <= amount){
      amount -= sortCoins[0];
      count++;
    } else{
      sortCoins.shift();
    }
  }

  if(amount > 0){
    return -1;
  }
  return count;
};

console.log(coinChange([1,2,5], 11)) // > 3
console.log(coinChange([2], 3)) // > -1
console.log(coinChange([1], 0)) // > 0
console.log(coinChange([1], 2)) // > 2
console.log(coinChange([4, 3, 7, 9, 1], 7)) // > 1
console.log(coinChange([8, 5, 4, 9, 10, 17, 42], 63)) // > 3
console.log(coinChange([8, 5, 4, 9, 10, 17, 42], 62)) // > 3