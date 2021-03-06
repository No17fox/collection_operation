'use strict';

let compute_median = collection => findMedian(collection.sort((a, b) => a - b));

let findMedian = array => {
  if (array.length % 2 === 0) {
    return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
  } else {
    return array[(array.length - 1) / 2];
  }
};

module.exports = compute_median;


