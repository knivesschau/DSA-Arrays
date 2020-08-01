//URL-ify a string
function createStringURL(string) {
    const arr = string.split(''); // turn string into array with each single letter + space separated

    // map through existing array, if word contains any spaces, return the %20 space character in new array setArr.
    const setArr = arr.map(item => {
        if (item === ' ') {
            return item = '%20';
        }
        return item;
    });

    return setArr.join('') // return array and the new %20 characters for any spaces in string. 
}

console.log(createStringURL('bilbo baggins'));
console.log(createStringURL("bi l b o ba gg ins"));

//Filtering an array
function filterArray(arr, value) {
    let newArr = [];

    // go through each item in the array with the comparison, if larger than provided filter value, put in newArr.
    arr.forEach(item => {
        if (item > value) {
            newArr.push(item);
        }
    })
    return newArr;
}

console.log(filterArray([1, 2, 7, 8, 4, 6], 5));

//Max sum array
function maxSum(arr) {
    let sum = 0;
    let maxSum = 0;

    // nested loops, iterate over array length twice to determine largest sum in the sequence. 
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        sum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j]

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

//Merge arrays
function mergeArray(arr1, arr2) {
    // make new array from the first one passed in 
    const newArr = Array.from(arr1)

    // on the second array, go through each item. if item is less than/greater than another item in new array, splice into new array.  
    arr2.forEach((num) => {
        let i = 0;

        while (i < newArr.length) {
            if (num <= newArr[i]) {
                newArr.splice(i, 0, num);
                break;
            }
            i++;
        }
    });

    return newArr;
}

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//Remove characters
function removeCharacters(string, letters) {
   let finalString = '';
   let arrFilter = [];

   // put the letters to filter out into an array. 
   for (let i = 0; i < letters.length; i++) {
       arrFilter.push(letters[i]);
   }

   // if the filtered array does not contain the letters from the 1st loop, add it to the final string to be returned. 
   for (let j = 0; j < string.length; j++) {
       if (!arrFilter.includes(string[j].toLowerCase())) {
           finalString += string[j];
       }
   }
   return finalString;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Gronzy', 'aeiou'));

// Products
function getProduct(arr) {
    // map through the array parameter, take out index number, return the product of remaining numbers in array. 
    const arrProduct = arr.map((num, i) => {
        const otherNums = arr.slice(0, i).concat(arr.slice((i + 1), (arr.length)));
        return otherNums.reduce((acc, curr) => acc * curr);
    });

    return arrProduct;
}

console.log(getProduct([1, 3, 9, 4]));

//2D Array
function get2D(arr) {
    const firstArr = JSON.parse(JSON.stringify(arr));
    let newArr = arr;

    firstArr.map((row, rowAlt) => {
        row.map((item, arrAlt) => {
            if (item === 0) {
                newArr[rowAlt].forEach((num, i) => newArr[rowAlt][i] = 0)
                newArr.forEach(newRow => newRow[arrAlt] = 0)
            }
        })
    })
    return newArr;
}

console.log
(get2D
    ([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]));

//String Rotation
function stringRotate(string1, string2) {
    // if no string exists on either param passed through, return false
    if (!string1 || !string2) {
        return false;
    }
    // if string1's length does not equal string2's length, return false
    if (string1.length !== string2.length) {
        return false; 
    }
    // return string1 and verify if it includes string2 as a rotation. 
    return (string1 + string1).includes(string2);
}

console.log(stringRotate("amazon", "azonma")); 
console.log(stringRotate("amazon", "azonam"));