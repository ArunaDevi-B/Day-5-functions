//  Remove duplicates from an array using anonymous function

let arr = [1, 2, 6, 7, 8, 9, 5, 2, 1, 6, 7, 9, 0, 4];
let originalArray = function (inputArray) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let notRepeating = true;
    for (let j = 0; j < array.length; j++) {
      if (arr[i] === array[j]) {
        notRepeating = false;
      }
    }
    if (notRepeating === true) {
      array.push(arr[i]);
    }
  }
 console.log(array);
};
originalArray(arr);

//  Remove duplicates from an array using IIFE function

(function originalArray(array){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        let notRepeating=true;
        for(let j=0;j<newArray.length;j++){
            if(arr[i]===newArray[j]){
                notRepeating=false;
            }
        }
        if(notRepeating){
            newArray.push(arr[i])
        }
    }
    console.log(newArray);
})(arr)

