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

