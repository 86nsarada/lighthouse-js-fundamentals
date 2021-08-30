const ageCalculator = (name, ageFrom, ageTo) => {

    if (ageFrom && ageTo) {
        let age = (parseInt(ageTo) - parseInt(ageFrom));

        console.log(''+name + ' is ' + age + ' years old.')
        return ''+name + ' is ' + age + ' years old.';
    }
    else{
        console.log("Mentioned Agefrom and AgeTo")
    }
}

ageCalculator("Suzie", 1984, 2016)
