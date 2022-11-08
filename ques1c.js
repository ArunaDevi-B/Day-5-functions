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