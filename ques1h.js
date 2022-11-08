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


