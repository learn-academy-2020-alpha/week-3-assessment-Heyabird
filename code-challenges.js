// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//easy way -- is this acceptable haha?
fibonacci = () => {
    return ([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
}

//harder way
fibonacci2 = () => {
    let newArr = [1,1]
    for (let i=0; i<8; i++) {
        nextNum = newArr[i] + newArr[i+1]
        newArr.push(nextNum)
    }
    return newArr
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

rearrangeBaby = (array) => {
    return array.sort((a,b) => a-b).filter(value => typeof value === "number" &&value%2===1 || value%2===-1)
}

console.log(rearrangeBaby(fullArr1))
console.log(rearrangeBaby(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleBaby = (string) => {
    let midIndex = Math.round(string.length / 2)
    if (string.length%2 === 0) {
        return string.slice(midIndex-1, midIndex+1)
    } else if (string.length%2 === 1) {
        return string[midIndex]
    }
}
console.log(middleBaby(middleLetters1))
console.log(middleBaby(middleLetters2))

// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
class SphereArea {
    constructor(radi) {
        this.radi=radi
        this.area= Math.pow(radi,2) * Math.PI * 4
    }
}
var sphere1 = new SphereArea(1)
var sphere2 = new SphereArea(2)
var sphere3 = new SphereArea(3)






// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


const sumBaby = (array) => {
    let x = 0
    let newArr = array.map(function(num, index) {
        if (index > 1) {
            return num[0] + num[1]
        } else if (index===1) {
            return num + x
        } else if (index===0) {
            let x = num
            return num
        }
    })
    }


const sumBaby = (array) => {
    let newArr = []
    //if the array has values
    if (array.length > 0) {
        let totalNum = 0
         for (let i=0; i<array.length; i++) {
            totalNum = array[i] + totalNum
            newArr.push(totalNum)
        }
        return newArr
    //if the array is empty
    } else {
        return array
    }
}

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

console.log(sumBaby(numbersToAdd1))
console.log(sumBaby(numbersToAdd2))
console.log(sumBaby(numbersToAdd3))


