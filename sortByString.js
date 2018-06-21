// **** PROBLEM 1 *****
// @s is the string to check
// @t is the the second string

function sortByString(s,t) {
  let counter = {}
  let sortedString = "";

  // loop through s & check if exist in counter
  for(let char of s) {
    counter[char] ? counter[char]++ : counter[char] =1;
  }
  
  // loop through t & check if char exist
  for(let char of t) {
    if(counter[char]) {
      //repeats return a string with specific numb of copies
      sortedString += char.repeat(counter[char])
    }
  }

  return sortedString;
}

sortByString("weather", "therapyw"); // => theeraw

