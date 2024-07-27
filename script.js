// 1. JS-Assignment-5 (arrayMethods)

// 1. concat()
// Combines two or more arrays and returns a new array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = arr1.concat(arr2);
console.log('concat:', combinedArray);

// 2. every()
// Checks if every element in an array passes a test.
const isBelowThreshold = (currentValue) => currentValue < 40;
const arr3 = [1, 30, 39, 29, 10, 13];
console.log('every:', arr3.every(isBelowThreshold));

// 3. fill()
// Fills all the elements of an array from a start index to an end index with a static value.
const arr4 = [1, 2, 3, 4];
console.log('fill:', arr4.fill(0, 2, 4));

// 4. find()
// Returns the first element in the array that satisfies the provided testing function.
const arr5 = [5, 12, 8, 130, 44];
const found = arr5.find(element => element > 10);
console.log('find:', found); 

// 5. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function.
const arr6 = [5, 12, 8, 130, 44];
const foundIndex = arr6.findIndex(element => element > 10);
console.log('findIndex:', foundIndex); 

// 6. flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr7 = [1, 2, [3, 4, [5, 6]]];
console.log('flat:', arr7.flat(2)); 

// 7. includes()
// Determines whether an array includes a certain value among its entries.
const arr8 = [1, 2, 3];
console.log('includes:', arr8.includes(2)); 

// 8. indexOf()
// Returns the first index at which a given element can be found in the array.
const arr9 = [2, 9, 9];
console.log('indexOf:', arr9.indexOf(9)); 

// 9. join()
// Joins all elements of an array into a string.
const arr10 = ['Fire', 'Air', 'Water'];
console.log('join:', arr10.join()); 

// 10. lastIndexOf()
// Returns the last index at which a given element can be found in the array.
const arr11 = [2, 5, 9, 2];
console.log('lastIndexOf:', arr11.lastIndexOf(2)); 

// 11. pop()
// Removes the last element from an array and returns that element.
const arr12 = [1, 2, 3];
console.log('pop:', arr12.pop()); 
console.log('pop array:', arr12); 

// 12. push()
// Adds one or more elements to the end of an array and returns the new length of the array.
const arr13 = [1, 2, 3];
console.log('push:', arr13.push(4)); 
console.log('push array:', arr13); 

// 13. reverse()
// Reverses the order of the elements in an array.
const arr14 = ['one', 'two', 'three'];
console.log('reverse:', arr14.reverse()); 

// 14. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
const array15 = [1, 2, 3];
console.log('unshift:', array15.unshift(4, 5)); 
console.log('unshift array:', array15); 

// 15. shift()
// Removes the first element from an array and returns that element.
const array16 = [1, 2, 3];
console.log('shift:', array16.shift()); 
console.log('shift array:', array16); 

// 16. slice()
// Returns a shallow copy of a portion of an array into a new array object selected from start to end.
const array17 = ['ant', 'hen', 'camel', 'duck', 'elephant'];
console.log('slice:', array17.slice(1, 3)); 

// 17. some()
// Tests whether at least one element in the array passes the test implemented by the provided function.
const array18 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log('some:', array18.some(even)); 

// 18. sort()
// Sorts the elements of an array in place and returns the sorted array.
const array19 = [4, 2, 3, 1];
console.log('sort:', array19.sort());

// 19. splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
const array20 = [1, 2, 3, 4, 5];
const removed = array20.splice(2, 2, 'a', 'b');
console.log('splice:', removed);
console.log('splice array:', array20); 

// 20. toString()
// Returns a string representing the specified array and its elements.
const array21 = [1, 2, 'a', '1a'];
console.log('toString:', array21.toString());

// 21. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
const array22 = [1, 2, 3, 4, 5];
const result = array22.filter(number => number > 3);
console.log('filter:', result); 

// 22. reduce()
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array23 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log('reduce:', array23.reduce(reducer)); 

// 23. map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
const array24 = [1, 2, 3, 4];
const map1 = array24.map(x => x * 2);
console.log('map:', map1); 

// 24. forEach()
// Executes a provided function once for each array element.
const array25 = ['a', 'b', 'c'];
array25.forEach(element => console.log('forEach:', element));



//////////////////////////////////////////////////////////////



// 2. JS-Assignment-5 (stringMethods)

// 1. concat()
// Combines two or more strings and returns a new string.
const str1 = "Hello";
const str2 = "World";
const combinedString = str1.concat(" ", str2);
console.log('concat:', combinedString);

// 2. includes()
// Determines whether a string contains the characters of a specified string.
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log('includes:', sentence.includes("fox"));

// 3. indexOf()
// Returns the index within the calling String object of the first occurrence of the specified value.
const str3 = "Hello, world!";
console.log('indexOf:', str3.indexOf("world"));
// 4. lastIndexOf()
// Returns the index within the calling String object of the last occurrence of the specified value.
const str4 = "Hello, world! Hello, universe!";
console.log('lastIndexOf:', str4.lastIndexOf("Hello"));

// 5. padEnd()
// Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
const str5 = "Hi";
console.log('padEnd:', str5.padEnd(10, "."));

// 6. padStart()
// Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
const str6 = "Hi";
console.log('padStart:', str6.padStart(10, "."));

// 7. repeat()
// Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
const str7 = "Hi!";
console.log('repeat:', str7.repeat(3));

// 8. replace()
// Returns a new string with some or all matches of a pattern replaced by a replacement.
const str8 = "The quick brown fox jumps over the lazy dog.";
const newStr = str8.replace("dog", "cat");
console.log('replace:', newStr);

// 9. search()
// Executes a search for a match between a regular expression and this String object.
const str9 = "The quick brown fox jumps over the lazy dog.";
console.log('search:', str9.search("fox"));

// 10. slice()
// Extracts a section of a string and returns it as a new string, without modifying the original string.
const str10 = "The quick brown fox";
console.log('slice:', str10.slice(4, 9));

// 11. split()
// Splits a String object into an array of strings by separating the string into substrings.
const str11 = "The quick brown fox";
const words = str11.split(" ");
console.log('split:', words);

// 12. startsWith()
// Determines whether a string begins with the characters of a specified string.
const str12 = "Saturday night plans";
console.log('startsWith:', str12.startsWith("Sat"));

// 13. substr()
// Returns the characters in a string beginning at the specified location through the specified number of characters.
const str13 = "Mozilla";
console.log('substr:', str13.substr(1, 2));

// 14. substring()
// Returns the part of the string between the start and end indexes, or to the end of the string.
const str14 = "Mozilla";
console.log('substring:', str14.substring(1, 3));

// 15. toLowerCase()
// Returns the calling string value converted to lower case.
const str15 = "Hello World!";
console.log('toLowerCase:', str15.toLowerCase());

// 16. toUpperCase()
// Returns the calling string value converted to upper case.
const str16 = "Hello World!";
console.log('toUpperCase:', str16.toUpperCase());

// 17. trim()
// Removes whitespace from both ends of a string.
const str17 = "   Hello World!   ";
console.log('trim:', str17.trim());

// 18. trimEnd() (or trimRight())
// Removes whitespace from the end of a string.
const str18 = "   Hello World!   ";
console.log('trimEnd:', str18.trimEnd());

// 19. trimStart() (or trimLeft())
// Removes whitespace from the beginning of a string.
const str19 = "   Hello World!   ";
console.log('trimStart:', str19.trimStart()); 

// 20. charAt()
// Returns the character at the specified index.
const str20 = "Hello World!";
console.log('charAt:', str20.charAt(0));

// 21. charCodeAt()
// Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
const str21 = "Hello World!";
console.log('charCodeAt:', str21.charCodeAt(0));
