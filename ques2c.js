// Sum of all numbers in an array using arrow function
let arr=[1,2,3,4,5,6,7,8,9];
let sum=(array)=>{
    let add = array.reduce((initialValue,element)=>initialValue+element);
    console.log(add);
}
sum(arr)
