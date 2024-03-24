// Code your solution in this file!

function distanceFromHqInBlocks(blockNo) {
    //returns the number of blocks given a value
    let hqDistance = 42
    if (blockNo > hqDistance){
      var distanceFromHq = blockNo - hqDistance
      return distanceFromHq
    }
    if (blockNo < hqDistance){
      var distanceFromHq = hqDistance - blockNo
      return distanceFromHq
    }
  }

  console.log(distanceFromHqInBlocks(34)); 


  function distanceFromHqInFeet(blockNo) {
    let hqDistance = 42
    if (blockNo > hqDistance){
      var distanceFromHq = blockNo - hqDistance
      var distanceInFeet = distanceFromHq * 264
      return distanceInFeet
    }
    if (blockNo < hqDistance){
      var distanceFromHq = hqDistance - blockNo
      var distanceInFeet = distanceFromHq * 264
      return distanceInFeet
    }
  }

  console.log(distanceFromHqInFeet(36));


  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination){
      var distanceTravelled = (start - destination) * 264
      return distanceTravelled
    } 
    if (start < destination){
      var distanceTravelled = (destination - start) * 264
      return distanceTravelled
    } 
  }
  console.log(distanceTravelledInFeet(36, 38));

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (start > destination){
      var distanceTravelled = (start - destination) * 264
    } 
    if (start < destination){
      var distanceTravelled = (destination - start) * 264
    } 

    if(distanceTravelled <= 400){
      return 0
    }else if (distanceTravelled > 400 && distanceTravelled <= 2000){
      return (distanceTravelled - 400) * 0.02
    }else if ( distanceTravelled > 2000 && distanceTravelled <= 2500){
      return 25
    }else{
      return 'cannot travel that far'
    }
  }