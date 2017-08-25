var meanFinder = function(arrayOfTimes) {
  var sum = 0;
  var meanAndMode = [];
  for (var i = 0; i < arrayOfTimes.length; i++) {
    sum += arrayOfTimes[i];
  }
  var avg = sum / arrayOfTimes.length;
  return avg;
}

function mode(arrayOfTimes) {
  if (arrayOfTimes.length == 0) {
    return null;
  }
  // setting the object
  var countObject = {};
  var mostCommon = arrayOfTimes[0];
  // just starting the max at 1, it may go up much higher.
  var maxCount = 1;
  for (var i = 0; i < arrayOfTimes.length; i++) {
    // creating the key
    var thisTime = arrayOfTimes[i];
    if (countObject[thisTime] == null) {
      //if new time, add it to object and set its count to 1
      countObject[thisTime] = 1;
    } else {
      // so this time has happened before, so iterate it by adding 1 to its value
      countObject[thisTime]++;
    }
    // so if the current time is greater than the previous maxCount amount...
    if (countObject[thisTime] > maxCount) {
      // set the this current time as the new most common time
      mostCommon = thisTime;
      // AND set the new maxCount amount to the amount of times this current time has
      maxCount = countObject[thisTime];
    } else if (countObject[thisTime] == maxCount) {
      mostCommon += '&' + thisTime;
      maxCount = countObject[thisTime];
    }
    console.log(countObject);
  }
  return mostCommon;
}




function averageFinder(arrayOfTimes) {
  if (arrayOfTimes.length == 0) {
    return null;
  }
  var meanAndMode = [];
  // mean variables
  var sum = 0;
  // setting the mode variables
  var countObject = {};
  var mostCommon = arrayOfTimes[0];
  var maxCount = 1;
  //for loop
  for (var i = 0; i < arrayOfTimes.length; i++) {
    // start mean
    sum += arrayOfTimes[i];
    // end mean
    // start mode
    var thisTime = arrayOfTimes[i];
    if (countObject[thisTime] == null) {
      countObject[thisTime] = 1;
    } else {
      countObject[thisTime]++;
    }
    if (countObject[thisTime] > maxCount) {
      mostCommon = thisTime;
      maxCount = countObject[thisTime];
    } else if (countObject[thisTime] == maxCount) {
      mostCommon += '&' + thisTime;
      maxCount = countObject[thisTime];
    }
    //end mode
  }
  var mean = sum / arrayOfTimes.length;
  meanAndMode.push(mean, mostCommon);
  return meanAndMode;
}

averageFinder([500, 450, 400, 400, 375, 350, 325, 300]);
