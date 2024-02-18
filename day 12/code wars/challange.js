var number = function(busStops){
    let into = 0
    let out = 0
    for (let i = 0; i < busStops.length; i++){
      into = into + busStops[i][0]
      out = out + busStops[i][1]
      
    }
  
    return into - out
  }
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));

// var number = function(busStops) {
//   return busStops.reduce(function(total, stop) {
//       return total + stop[0] - stop[1];
//     }, 0);
// }