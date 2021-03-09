/**
 * @param {string[]} words
 * @return {number}
 * 
 * I: an array of strings (words)
 * O: a number: shortest reference string possible of any valid encoding of words
 * C: words contain 1 to 2000 strings; each string's length is 1 to 7; all strings are in lower case 
 * E: words = ["time", "me", "bell"], out: 10; words = ["me", "time", "bell"], out: 10; words = ["t"], out: 2
 */
var minimumLengthEncoding = function(words) {
  let encodeString = '';
  let filteredWords;
  for(let i = 7; i > 0; i--){
    filteredWords = words.filter(word => word.length === i);
    if(filteredWords.length === 0){
      continue;
    }
    filteredWords = filteredWords.map(word => word+'#');
    filteredWords.forEach((word) => {
      if(!(encodeString.includes(word))){
        encodeString += word;
      }
    })
  }

  return encodeString.length;
};

console.log(minimumLengthEncoding(['time', 'me', 'bell'])); // > 10
console.log(minimumLengthEncoding(['me', 'time', 'bell'])); // > 10
// console.log(minimumLengthEncoding(['t'])); // > 2

// Sample 128 ms code:
/**
 var minimumLengthEncoding = function(words) {
    words.sort((a, b) => {
        let minLen = Math.min(a.length, b.length)
        for (let i = 0; i < minLen; i++) {
            if (a[a.length - 1 - i] < b[b.length - 1 - i]) return -1
            else if (a[a.length - 1 - i] > b[b.length - 1 - i]) return 1
        }
        if (a.length === minLen) return -1
        return 1
    })
    let res = words[words.length - 1].length + 1
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i + 1].endsWith(words[i]))
            continue
        res += words[i].length + 1
    }
    return res
};
 */