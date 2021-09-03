const sumtheLargestNumbers = (data) => {
    data.sort()
    console.log(data)
    if (data.length > 0) {

        let firstLargestNumber = 0;
        let secondLargestNumber = 0;
        for (let i = 0; i < data.length; i++) {

            if (data[i] > firstLargestNumber) {
                secondLargestNumber = firstLargestNumber
                firstLargestNumber = data[i]
            }
        }

        return firstLargestNumber + secondLargestNumber
    }
}

console.log(sumtheLargestNumbers([10, 4, 34, 6, 92, 2]))