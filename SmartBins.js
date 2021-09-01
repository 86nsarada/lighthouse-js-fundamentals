const smartGarbage = function (trash, bins) {
    console.log(trash);
    switch (trash) {

        case "waste": let wasteValue= bins.waste
                    bins.waste = parseInt(wasteValue) + 1;
            break;
        case "recycling":  let value = bins.recycling 
                        bins.recycling = parseInt(value) + 1
            
            break;
        case "compost": let compostvalue = bins.compost
                bins.compost = parseInt(compostvalue) + 1
            break;
        default: bins
    }
    return bins;
}


console.log(smartGarbage ("waste", { waste: 5, recycling: 3, compost: 4 }))