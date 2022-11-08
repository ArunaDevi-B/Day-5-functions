// Return all the primenumbers in an array using arrow function

let arr=[1,2,3,4,5,6,7,8,9];
let primeNum=[];
let primeNumbers=(array)=>{
    for(let i=0;i<array.length;i++){
        let isPrime=true;

        if(array[i]<2){
            isPrime = false;
        }
        for(let j=2;j<=array[i]/2;j++){
            if(array[i]%j===0){
                isPrime= false;
                break;
            }       
          }
          if(isPrime){
           primeNum.push(array[i])
    }
    }
    console.log(primeNum);
}
primeNumbers(arr)