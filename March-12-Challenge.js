/**
 * Given a binary string s and an int k, return true if EVERY BINARY CODE of LENGTH K IS A SUBSTRING of S. Return false otherwise.
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 * 
 * I: A binary string s (ie: '010100110'), and an int k (ie: 4)
 * O: A boolean; true if every binary code of k is a substring of s. false otherwise.
 * C: 1 <= s.length <= 5 * 10^5; s[i] will only either be '0' or '1'; 1 <= k <= 20
 * E: s: '00110110', k: 2, out: true (The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indicies 0, 1, 3 and 2 respectively.)
 *    s: '00110, k: 2, out: true
 *    s: '0110', k: 1, out: true (The binary code is '0' and '1'. They both can be found as substrings)  
 *    s: '0110', k: 2, out: false (The binary code '00' is missing from the substring)
 *    s: '0000000001011100', k: 4, out: false (The binary code of length 4 are "0000", "1111", '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110'. A couple of these patterns are missing.) 
 */
/**
 * 
 * Thoughts on the problem:
 * 
 * Well, we first need to first get a list of binary code with that full length. We have to generate that list as we run the function because we do not know what k is.
 * So we it would be unreaasonable to try and hardcode a list for reference.
 * Once we have the list of binary patterns, we go through the string per character. We go down the list, checking off every patterns that the string matches.
 * Afterwards, we check and see if any patterns were missed. If any are missing, we return false. If everything is checked off, we return true.
 * 
 * The list we have would probably be an object. Each pattern is unique, so it can be a key. The value for each key will be a boolean value, starting with false.
 * 
 * I would want to write up a recursive function that will find all the patters. I will pass in an object, a string, and k. The output is an object with the patterns inside.
 * It will recursively be called to generate the binary pattern with length k. Each recursive call will pass the object, string and k back.
 * We only put the pattern into the object (with value is False) only if the pattern's length is same as k.
 */

/**
 * results: 7532ms with 46.9mb 
 * Time wise, it took way too long. There are 300ms ~400ms entries. Mine is more than 20 times longer than the average. Which is a problem.
 * Although my memory usage wise is pretty good. Beating 80% of the other javascript codes.
 * Included below is a 320ms code to make sure I know how I can do faster.
 */
 var hasAllCodes = function(s, k) {
    let binaryPatterns = (s, k, p = '', result = true) => {
      let tstr = '';
      let count = k-1;
      for(let i = 0; i < 2 && result; i++){
        tstr = p.concat(i.toString());
        if(k > 1){
          result = binaryPatterns(s, count, tstr, result);
        } else if(!(s.includes(tstr))) {
          return false;
        }
      }
      return result;
    };
    return binaryPatterns(s, k);
};

console.log(hasAllCodes('00110', 2)); // > true
console.log(hasAllCodes('0110', 1)); // > true
console.log(hasAllCodes('0110', 2)); // > false
console.log(hasAllCodes('0000000001011100', 4)); // > false


//
/** Example of 320ms code
 * {
    let set = new Set();
    let numberOfKDigitNums = 2**k;

    for (let i = 0; i <= s.length - k; i++) {
        set.add(s.substring(i, i + k));
    }
    return set.size === numberOfKDigitNums;
 * };
 */