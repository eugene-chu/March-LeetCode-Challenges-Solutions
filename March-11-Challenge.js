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
 * This is a tree problem, where the top/root of the tree is the total amount. Each 'branch' or node would be amount - coins[i].
 * The thing we are looking for is the depth (how many times do we subtract until amount equals 0).
 * If all the branch yields a negative amount, hence there isn't a valid combination of coins to make the amount, return -1
 * If any of the branch yields 0, we compare each one and return the one that result in the smallest depth.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// This is my attempt (within the alloted 1hr I set for myself). I ended up not being able to solve the problem.
// Within the tests I have setup below, what I wrote fails the last test.
// The way I have set up the code, I do not have a way to keep track of the different amount left over and where in the tree I currently am.
// That is one thing that I did not quite understand how to setup with this problem.
// Looking over the various solutions, this is not an optimal solution anyways. This would have exceeded time limit.
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

// This is an example of top-down DFS I found in the discussion/solution:
// They added an extra param call dp (depth I pressume), which is an object.
// By adding this object, I now have a way to "keep track of" my progress in the tree

// if(amount in dp) return dp[amount] >>>> check if the current amount exists as an entry inside of the dp object.
//                                         If it does, then we have already went down this path, and just return what's inside
// if(amount < 0) retrun -1           >>>> check if the remaining amount we have is less than 0. If it is, that means we subtracted too much and that branch does not yield a valid solution. Thus return -1.
// if(amount == 0) return 0;          >>>> check if the amount is 0, if it is then just return 0
//                                         Most likely for the base case/exception case where initial amount asked is 0
// for(let...coins) {                 >>>> loop through all the coins to go down each possible branch
//   count = coinchange(...)          >>>> recursively call this function, passing down the coins, amount-coin, and the depth counter obj. Place that return into a count variable.
//                                         When the recurvise call is done, the result of count will either be -1, 0, or 1+
//   if(count!=-1) min=Math.min(...); >>>> If the result of the count is a valid result (not -1), we check our current min with the count we got+1
//                                         At the top, min is Infinity, so any result would replace min with infinity.
//                                         First increment that is valid would be min = 1 (because of 0)
//                                         So on and so forth until we are done.
// }
// return (...) ? (...);              >>>> After we are done with the loop, if min was never changed (min === infinity), then there were never a valid path to trigger the if(count != -1) condition.
//                                         Then we log that amount with -1 and return that
//                                         If min was changed, then we set log that amount with min and return that

var coinChange = function(coins, amount,dp={}) {
  let min=Infinity,count;
    if (amount in dp) return dp[amount];
    if (amount < 0) return -1;
    if (amount==0) return 0;
    for (let coin of coins) {
      count=coinChange(coins,amount-coin,dp);
      if (count!=-1) min=Math.min(min,1+count);
    }
    return (min===Infinity) ? dp[amount]=-1 : dp[amount]=min; 
  };