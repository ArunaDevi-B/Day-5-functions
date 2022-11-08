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
