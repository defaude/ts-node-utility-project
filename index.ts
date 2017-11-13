import { someUtility } from './src/some-utility';

console.log('starting the thing now');

const word1 = 'hello, world';
const word2 = 'anna';

const result1 : boolean = someUtility(word1);
const result2 : boolean = someUtility(word2);

console.log(word1, result1 ? 'is' : 'is not', 'a palindrome');
console.log(word2, result2 ? 'is' : 'is not', 'a palindrome');

console.log('bye bye');
