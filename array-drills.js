//URL-ify a string
function createStringURL(string) {
    const arr = string.split('');

    const setArr = arr.map(item => {
        if (item === ' ') {
            return item= '%20'
        }
        return item
    })

    return setArr.join('')
}

createStringURL('bilbo baggins');

//Filtering an array
function filterArray(arr, value) {
    let newArr = [];

    arr.forEach(item => {
        if (item > value) {
            newArr.push(item)
        }
    })
    return newArr
}

filterArray([1, 2, 7, 8, 4, 6], 5)

//Max sum array
function maxSum(arr) {
    let sum = 0;
    let maxSum = 0;

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

maxSum([4, 6, -3, 5, -2, 1])

//Merge arrays
function mergeArray(arr1, arr2) {
    const newArr = Array.from(arr1)

    arr2.forEach((num) => {
        let i = 0;
        while (i < newArr.length) {
            if (num <= newArr[i]) {
                newArr.splice(i, 0, num)
                break
            }
            i++
        }
    })
    return newArr;
}

mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])

//Remove characters
function removeCharacters(string, letters) {
    const arrLetter = [];
    const arrString = [];

    for (let i = 0; i < letters.length; i++) {
        arrLetter.push(letters.charAt(i))
    }
    for (let i = 0; i < string.length; i++) {
        arrString.push(string.charAt(i))
    }

    arrLetter.forEach(letter => {
        arrString.forEach((strLtr, index) => {
            if (letter === strLtr) {
                arrString.splice(index, 1)
            }
        })
    })

    const concatenate = arrString.reduce((acc, curr) => {
        return acc + curr
    })

    return concatenate
}

removeCharacters('Battle of the Vowels: Hawaii vs. Gronzy', 'aeiou')

// Products
function getProduct(arr) {
    const arrProduct = arr.map((num, i) => {
        const otherNums = arr.slice(0, i).concat(arr.slice((i + 1), (arr.length)))
        return otherNums.reduce((acc, curr) => acc * curr)
    })
    return arrProduct
}

getProduct([1, 3, 9, 4])

//2D Array
function get2D(arr) {
    const firstArr = JSON.parse(JSON.stringify(arr));
    let newArr = arr

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

get2D([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]])

//String Rotation
// function rotateString(str1, str2) {
//     const arr1 = str1.split('');
//     const arr2 = str2.split('');

//     if (arr1.length !== arr2.length) {
//         return false
//     }

//     const letter = arr2[0]
//     const indexArr2 = 0
//     let letterArr = []
//     let arr1End = 0
//     let arr2End = 0

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === letterArr) {
//             letterArr.push(i)
//         }
//     }

//     for (let i = 0; i < letterIndex.length; i++) {
//         const arr1Letters = arr1[letterArr[i]] + arr1[letterArr[i] + 1]
//         const arr2Letters = letter + arr2[indexArr2 + 1]

//         if (arr1Letters !== arr2Letters) {
//             continue
//         }

//     }
// }