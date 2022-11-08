// Return all the prime numbers in an array using Anonymous function
let arr=[-1,-2,-3,1,2,3,4,5,6,7,8,9,10];
// let arr=[1,2,4,68,54,51,24,64,32,7];
let primeNum=[];
let primeNumbers=function(array){
for(let i=0;i<array.length;i++){
    let isPrimeNum=true;
    if (array[i]<2){
        isPrimeNum=false;
    }
    for(let j=2;j<=array[i]/2;j++){
        if( array[i]%j===0){
            isPrimeNum=false;
            break;
        }
    }
    if (isPrimeNum){
        primeNum.push(array[i])
    }
}
console.log(primeNum);
}
primeNumbers(arr)

// Return all the prime numbers in an array using IIFE function

(function primeNumbers(array){
    for(let i=0;i<array.length;i++){
        let isPrimeNum = true;
        if(array[i]<2){
            isPrimeNum = false;
        }
        for(let j=2;j<=array[i]/2;j++){
            if(array[i]%j===0){
                isPrimeNum= false;
                break;
            }
        }
        if(isPrimeNum){
            primeNum.push(array[i])
        }
    }
       console.log(primeNum);
})(arr)