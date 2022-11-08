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
