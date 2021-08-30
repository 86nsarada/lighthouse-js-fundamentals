let direction=[
    'east',
    'east',
    'east',
    'east',
    'west',
    'west',
    'south'
  ]

const finalPosition = function (moves) {
  
    let positions = []

    let yaxis = 0
    let xaxis = 0
   
    moves.forEach(direction => {
    
        
        if(direction === "north"){
          yaxis = yaxis + 1
          
        }
        else if(direction === "south"){
          yaxis = yaxis - 1
          
        }
        else if(direction === "east"){
          
          xaxis = xaxis + 1
          
        }
        else if(direction === "west"){
          xaxis = xaxis - 1
          
        }
      })
    positions.push(yaxis,xaxis)
    return positions;
  }

  console.log(finalPosition(direction));