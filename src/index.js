exports.min = function min(array) {
  if (array !== undefined && array.length !== 0) {
    let number = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < number) number = array[i];
    }
    return number;
  }
  return 0;
}


exports.max = function max(array) {
  let number = 0;
  if (array !== undefined && array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > number) number = array[i];
    }
    return number;
  }
  return 0;
}


exports.avg = function avg(array) {
  let number = 0;
  let q = 0;
  sum = 0;
  if (array !== undefined && array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      q++;
      sum += array[i];
      number = sum / q;
    }
    return number;
  }
  return 0;
}

