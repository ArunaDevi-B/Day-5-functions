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
