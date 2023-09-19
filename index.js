// Code your solution in this file!
function distanceFromHqInBlocks(blockDestination){
    let hqBlock=42;
    let min=Math.min(blockDestination,hqBlock);
    let max=Math.max(blockDestination,hqBlock);
    let numberOfBlocks=max-min;
    return numberOfBlocks
}
function distanceFromHqInFeet(blockDestination){
   let blocks= distanceFromHqInBlocks(blockDestination);
   let feetPerBlock=264;
   let totalFeet=blocks*feetPerBlock;
   return totalFeet
}
function distanceTravelledInFeet(start,destination){
    let min=Math.min(start,destination);
    let max=Math.max(start,destination);
    return (max-min)*264
}
function calculatesFarePrice(start,destination){
    let min=Math.min(start,destination);
    let max=Math.max(start,destination);
    let feetTravelled=(max-min)*264;
    if(feetTravelled<=400){
        return 0
    }
    else if(feetTravelled>400 && feetTravelled<=2000){
        return (feetTravelled-400)*0.02
    }
    else if(feetTravelled>2000 && feetTravelled<=2500){
    return 25
    }
    else{
        return 'cannot travel that far'
    }

   }


