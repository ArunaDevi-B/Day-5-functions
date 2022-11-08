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



    
