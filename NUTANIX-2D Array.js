"use strict";

let hackerrankURL =
  "https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=nutanix";
/**
 * @hourGlassArray // store the array data
 */
console.clear();
const hourglassSum = (arr) => {
  let hourGlassArray = [];
  let splitHourGlassArray = {};
  // making horizontal data
  for (let i = 0; i < arr.length; i++) {
    let tempSplit = [];
    for (let j = 0; j < arr[i].length - 2; j++) {
      tempSplit.push(arr[i].slice(j, j + 3)); // using slice to split the array partition
    }
    splitHourGlassArray[`${i}`] = tempSplit;
  }
  console.log(`Splitting Horizontal Data |>`, splitHourGlassArray);

  // making vertical data sets
  let _splitdata = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < Object.keys(splitHourGlassArray).length - 2; j++) {
      let temp = [];
      for (let k = 0; k < 3; k++) {
        temp.push([...splitHourGlassArray[`${j + k}`][i]]);
      }
      _splitdata.push(temp);
    }
  }
  console.log(`Splitting Vertical Data |>`, _splitdata);

  // making the whole array flat
  for (let i = 0; i < _splitdata.length; i++) {
    _splitdata[i] = _splitdata[i].flat();
    for (let j = 0; j < _splitdata[i].length; j++) {
      if (j == 3 || j == 5) {
        _splitdata[i][j] = 0;
      }
    }
    hourGlassArray.push(
      _splitdata[i].reduce(
        (accumulator, currentvalue) => accumulator + currentvalue
      )
    );
  }
  return Math.max(...hourGlassArray);
};

let data = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(data));
