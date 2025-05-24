import { isStringPranthesesBalanced } from './src/q1';
import { findRecurringWords, RecurringWord } from "./src/q2";

console.log("-------------------");
console.log("finding starting and ending points brackets with correct");
const validString = "{ ds { j (h) k } sdf } "
const inValidString = "asdhjkhasdkjfhasd { dsj(hksdf } sakdfhakjsdhkjasdf(asdhfkjashdf) askdjfhaskdj asdkjfhasdkj (jhsdjfhas (asdfhjksd) ashjdfkjasdh) "


console.log(validString)
const valid = isStringPranthesesBalanced(validString)
console.log(`Is the ${validString} valid? `, valid ? "Yes" : "No", "branckets found: ", valid);
console.log("-------------------");

console.log(inValidString);
const invalid = isStringPranthesesBalanced(inValidString);
console.log(`Is the ${inValidString} valid? `, invalid? "Yes" : "No", "branckets found: ", invalid);
console.log("-------------------");


console.log("-------------------");
console.log("Finding most frequent words in a string...");
const stringX = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu tellus ut lacus faucibus viverra. Nam sem justo, euismod sit amet hendrerit quis, rhoncus ac ante. Proin ante ex, facilisis ut viverra sit amet, ultricies semper lacus. Quisque pellentesque varius libero, nec feugiat diam vehicula ut. Nullam eu pharetra odio. Suspendisse semper ipsum arcu, auctor gravida augue posuere sed. In hac habitasse platea dictumst. Nulla sit amet est elit. In feugiat vestibulum bibendum.";
const results = findRecurringWords(stringX);
console.log("Most frequent words in the string:");
results.forEach((result:RecurringWord)  => {
    console.log(`Word: ${result.word}, Count: ${result.count}`);
});


// 
console.log("-------------------");