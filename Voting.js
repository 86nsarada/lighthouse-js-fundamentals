const stationsarray= [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ]


const chooseStations = function (stations) {
    //Your code in here ...
  let goodStations = []

  for(let i=0 ; i< stations.length; i++){
      value = stations[i];
  }
     stations.forEach(x => {

        let capacity = x[1];
        if (capacity >= 20) {
             type = x[2];
            console.log(x[1])
            console.log(type)
            if (type === 'school' || type.trim() === 'community centre'.trim()) {
                console.log(x[0])
            goodStations.push(x[0]);
            }
        }

    })
    return goodStations;
}
let outPut=chooseStations(stationsarray)

console.log(outPut);