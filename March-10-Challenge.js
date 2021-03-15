/**
 * Given an int input, convert it a Roman numeral string.
 * 
 */

/**
 * @param {number} num
 * @return {string}
 * 
 * I: integer
 * O: A string representing the Roman Numeral value of the input
 * C: 1 <= num <= 3999
 * E: num: 1, out: 'I'; num: 4, out: 'IV'; num: 9, out: 'IX'
 */

/**
 * Result: 180 ms (beat 35.66% other JS code); 45.7mb (beat 49.42% other JS code)
 * Not the best, especially the runtime result
 */

 let RomanNum = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
 }
 var intToRoman = function(num) {
    let resultStr = "";
    let currPlace = Math.trunc(Math.log10(num));
    let pVal = 0;

    let getPlaceVal = (place, num) => {
      let placeVal = Math.pow(10, place);
      return Math.floor(num/placeVal);
    }

    let addRomanNum = (place, val, string) => {
      let tempStr = '';
      if(val === 9){
        tempStr = RomanNum[Math.pow(10, place)] + RomanNum[(Math.pow(10, place+1))];
      } else if(val >= 5){
        tempStr = RomanNum[5*Math.pow(10, place)];
        val = val - 5;
        tempStr = addRomanNum(place, val, tempStr);
      } else if(val === 4){
        tempStr = RomanNum[Math.pow(10, place)] + RomanNum[5*(Math.pow(10, place))];
      } else {
        while(val > 0){
          tempStr += RomanNum[Math.pow(10, place)];
          val--;
        }
      }
      return string+tempStr;
    }
    while (currPlace !== (-Infinity)){
      pVal = getPlaceVal(currPlace, num);
      resultStr = addRomanNum(currPlace, pVal, resultStr);
      num -= ( pVal === 0 ? Math.pow(10, currPlace) : pVal * Math.pow(10, currPlace));
      currPlace = Math.trunc(Math.log10(num));
    }
    return resultStr;
};

console.log(intToRoman(1)); // > 'I'
console.log(intToRoman(14)); // > 'XIV'
console.log(intToRoman(40)); // > 'XL'
console.log(intToRoman(99)); // > 'XCIX'
console.log(intToRoman(302)); // > 'CCCII'
console.log(intToRoman(3999)); // > 'MMMCMXCIX'
console.log(intToRoman(2731)); // > 'MMDCCXXXI'
console.log(intToRoman(58)); // > 'MMDCCXXXI'

/**
 * Most common solution type:
 * 
    let result = ''
    
    for (let i=0; i<Math.floor(num/1000); i++)
        result += 'M'

    result += mapToChar( Math.floor((num%1000)/100), 'C')
    result += mapToChar( Math.floor((num%100)/10), 'X')
    result += mapToChar( Math.floor((num%10)), 'I')
    
    return result
  };

  function mapToChar(n, char) {

    if(n===0) { 
        return ''
    } else if (n<4) {
        return char.repeat(n);
    } else if (n===4) {
        return char + halfUp(char)
    } else if (n===5) {
        return halfUp(char)
    } else if (n<9) {
        return halfUp(char) + char.repeat(n-5)
    } else if (n===9) {
        return char + up(char)
    }
  }

  const chars = ['I', 'V', 'X', 'L', 'C','D','M']
  function halfUp(c) {
    return chars[chars.indexOf(c)+1]
  }
  function up(c) {
    return chars[chars.indexOf(c)+2]
  }
 */