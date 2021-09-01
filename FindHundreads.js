const howManyHundreds = (num) => {
    if(!Number.isNaN(num) && num !== "undefined"){
        let hundreads = Math.floor(num/100);
        return hundreads;
    }
}

console.log(howManyHundreds(894));