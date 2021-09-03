const conditionalSum = function(data,conditions){
    let sum = 0
   console.log("Ranjit")
    if(data.length > 0){
    
        if(conditions.toUpperCase() ===  "EVEN"){
            for (let i = 0; i < data.length; i++){
                
                if(data[i] % 2 === 0){
                    sum = sum + parseInt(data[i])
                }
            }
        }
        else if(conditions.toUpperCase() === "ODD"){
            for (let i = 0; i < data.length; i++){

                if(data[i] % 2 !== 0){
                    sum = sum + data[i]
                }
            }
        }
        return sum;
    }
    else{
        return sum
    }

}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));