const judgeVegetable = function (vegetables, metric) {
    let highestRedness = 0
    let indexOfRedness;
    let keys;
    if (vegetables.length > 0) {
        keys = Object.keys(vegetables[0])
    }
    for (let i = 0; i < vegetables.length; i++) {

        if (vegetables[i][metric] > highestRedness) {
            highestRedness = vegetables[i][metric]
            indexOfRedness = i
        }

    }

    if (keys.includes(metric)) {
        return vegetables[indexOfRedness].submitter
}
}



const vegetables = [
    {
        submitter: 'A',
        d: 5,
    },
    {
        submitter: 'B',
        d: 10,
    },
    {
        submitter: 'C',
        d: 25,
    }
]

//const metric = 'redness'
console.log(judgeVegetable(vegetables, "d"));
//console.log(judgeVegetable(vegetables, "plumpness"));
