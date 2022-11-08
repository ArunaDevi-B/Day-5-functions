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

