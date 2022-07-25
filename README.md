# Day-5-functions

QUESTION 1.
A)
// Printing odd numbers in an array using Anonymous function

let arr=[1,2,4,68,54,51,24,64,32,7];
let oddNumbers= function(array){
    let odd=arr.filter((element)=>element%2===1)
    return odd;
}
console.log(oddNumbers(arr));

// Printing odd numbers in an array using IIFE function

(function oddNumbers(array){
let odd=arr.filter((element)=>element%2===1)
console.log(odd);
})(arr);

B)
// Convert all the strings to title caps in a string array using anonymous function

let arr=["banana","orange","mango","straberry","pineapple"];
let titlecaps=function(array){
let titleCaps=[];
for(let i=0;i<array.length;i++){
    let firstLetter=array[i][0].toUpperCase();
    let remainLetter=array[i].slice(1);
    // console.log(remainLetter);
    let uppercase= firstLetter+remainLetter;
    titleCaps.push(uppercase);
}
console.log(titleCaps);
}
titlecaps(arr);

// Convert all the strings to title caps in a string array using IIFE function

(function titlecaps(array){
let titleCaps=[];
for(let i=0;i<array.length;i++){
    let firstLetter=array[i][0].toUpperCase();
    let remainLetters=array[i].slice(1);
    let newArray=firstLetter+remainLetters;
    titleCaps.push(newArray)
}
console.log(titleCaps);
})(arr)

C)
// Sum of all numbers in an array using Anonymous function
let arr=[1,2,4,68,54,51,24,64,32,7];
let sum=function(array){
    let add=arr.reduce((initialValue,element)=>initialValue+element);
    return add;
}
console.log(sum(arr));


// Sum of all numbers in an array using IIFE function

(function sum(b){
    let add=arr.reduce((initialValue,element)=>initialValue+element);
console.log(add);
})(arr);

D)

// Return all the prime numbers in an array using Anonymous function
let arr=[-1,-2,-3,1,2,3,4,5,6,7,8,9,10];
// let arr=[1,2,4,68,54,51,24,64,32,7];
let primeNum=[];
let primeNumbers=function(array){
for(let i=0;i<array.length;i++){
    let isPrimeNum=true;
    if (array[i]<2){
        isPrimeNum=false;
    }
    for(let j=2;j<=array[i]/2;j++){
        if( array[i]%j===0){
            isPrimeNum=false;
            break;
        }
    }
    if (isPrimeNum){
        primeNum.push(array[i])
    }
}
console.log(primeNum);
}
primeNumbers(arr)

// Return all the prime numbers in an array using IIFE function

(function primeNumbers(array){
    for(let i=0;i<array.length;i++){
        let isPrimeNum = true;
        if(array[i]<2){
            isPrimeNum = false;
        }
        for(let j=2;j<=array[i]/2;j++){
            if(array[i]%j===0){
                isPrimeNum= false;
                break;
            }
        }
        if(isPrimeNum){
            primeNum.push(array[i])
        }
    }
       console.log(primeNum);
})(arr)

E)

// Return all the palindromes in an array using anonymous function 
let arr=["racecar","madam","hello", "eve", "level","everyone"];
let palindrom = function(array){
    let palindromArray=[];
for(let i=0;i<array.length;i++){
    let element=array[i].split("");
    if(array[i]==element.reverse().join("")){
        palindromArray.push(array[i])
    }
}
console.log(palindromArray);

}
palindrom(arr)

// Return all the palindromes in an array using IIFE function 
let palindromArray=[];
(function palindrom(array){
   for(let i=0;i<array.length;i++){
       let element=array[i].split("");
       if(array[i]==element.reverse().join("")){
           palindromArray.push(array[i])
       }
   }

})(arr)
console.log(palindromArray);


F)

// Return median of two sorted arrays of the same size using anonymous function 

let array1=[1,3,67,8,3,4];
let array2=[5,3,7,7,8,34];
let combinedArray=[...array1,...array2];
function bubbleSort(array){
    let done=false;
    while(!done){
        done = true;
    for(let i=1;i<array.length;i++){
        if(array[i-1]>array[i]){
            done= false;
            let temp= array[i-1];
            array[i-1]=array[i];
            array[i]=temp;
        }
        }
    }
    
    return array;
}



let median=function(array){
    const sortedarray = bubbleSort(combinedArray);
if(sortedarray.length%2===0){
    let newArray=sortedarray[sortedarray.length/2]+sortedarray[sortedarray.length/2-1];
    let resultantArray=newArray/2;
    console.log(resultantArray);
}else{
    let result=sortedarray[Math.floor(sortedarray.length/2)];
    console.log(result);
}
}
median(combinedArray)

// Return median of two sorted arrays of the same size using IIFE function 

(function median(parameter){
    let arr = bubbleSort(combinedArray);
    if(arr.length%2===0){
        let newArray=arr[arr.length/2]+arr[arr.length/2-1];
        let resultArray=newArray/2;
        console.log(resultArray);
    }
})(combinedArray)

G)

//  Remove duplicates from an array using anonymous function

let arr = [1, 2, 6, 7, 8, 9, 5, 2, 1, 6, 7, 9, 0, 4];
let originalArray = function (inputArray) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let notRepeating = true;
    for (let j = 0; j < array.length; j++) {
      if (arr[i] === array[j]) {
        notRepeating = false;
      }
    }
    if (notRepeating === true) {
      array.push(arr[i]);
    }
  }
 console.log(array);
};
originalArray(arr);

//  Remove duplicates from an array using IIFE function

(function originalArray(array){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        let notRepeating=true;
        for(let j=0;j<newArray.length;j++){
            if(arr[i]===newArray[j]){
                notRepeating=false;
            }
        }
        if(notRepeating){
            newArray.push(arr[i])
        }
    }
    console.log(newArray);
})(arr)

H)

let arr=[1,2,3,4,5];
let K=4;
// Rotate an array by k times using anonymous function
let rotatedArray=function(nums,k){
    for(let i=1;i<=K;i++){
        nums.unshift(nums.pop());
    }
    return nums;
}
console.log(rotatedArray(arr,K));

// Rotate an array by k times using IIFE function
(function rotatedArray(nums,k){
    for(let i=1;i<=K;i++){
        nums.unshift(nums.pop());
    }
    console.log(nums);    
})(arr,K)


QUESTION 2)

A)

// Print odd numbers in an array using arrow function

let arr=[1,2,3,4,5,6,7,8,9];
let odd=[];
let oddNumbers= (array)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]%2===1){
            odd.push(array[i]);
        }
    }
    console.log(odd);
}
oddNumbers(arr)

B)

// Convert all the strings to title caps in a string array using arrow function

let arr=["aruna","butterfly","fairy","cartoon"];
let result=[];
let titleCaps=(array)=>{
    for(let i=0;i<array.length;i++){
        let resultantArray=array[i][0].toUpperCase();
        let remainArray=array[i].slice(1,array[i].length);
        result.push(resultantArray+remainArray)
    }
    console.log(result);
}
titleCaps(arr)

C)

// Sum of all numbers in an array using arrow function
let arr=[1,2,3,4,5,6,7,8,9];
let sum=(array)=>{
    let add = array.reduce((initialValue,element)=>initialValue+element);
    console.log(add);
}
sum(arr)

D)

// Return all the primenumbers in an array using arrow function

let arr=[1,2,3,4,5,6,7,8,9];
let primeNum=[];
let primeNumbers=(array)=>{
    for(let i=0;i<array.length;i++){
        let isPrime=true;

        if(array[i]<2){
            isPrime = false;
        }
        for(let j=2;j<=array[i]/2;j++){
            if(array[i]%j===0){
                isPrime= false;
                break;
            }       
          }
          if(isPrime){
           primeNum.push(array[i])
    }
    }
    console.log(primeNum);
}
primeNumbers(arr)

E)

// Return all the palindromes in an array using arrow function
let arr=["racecar","madam","hello", "eve", "level","everyone"];
let palindrome=(array)=>{
    let palindromeArray=[];
    for(let i=0;i<array.length;i++){
        let splitedArray=array[i].split("");
        if(array[i]===splitedArray.reverse().join("")){
            palindromeArray.push(array[i])
        }
    }
    console.log(palindromeArray);
}
palindrome(arr);


