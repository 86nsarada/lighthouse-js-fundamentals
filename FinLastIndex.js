const lastIndexOf = (arrayToFind, valueToFind) =>{
    if(arrayToFind.length > 0  
        && (!Number.isNaN(valueToFind) && valueToFind !== "undefined")){
          value=  arrayToFind.filter(num => num === valueToFind)
          if(value .length > 0){
            lastIndex = arrayToFind.lastIndexOf(valueToFind);
            return lastIndex;
          }
          else{
              return -1;
          }
        }
        else{
           return -1; 
        }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))

 console.log( lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
 console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
 console.log(lastIndexOf([ 5, 5, 5 ], 5));
 console.log(lastIndexOf([], 3))