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



