"use strict";
let hackerrankURL =
  "https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true";

// Climbing the Leaderboard
const climbingLeaderboard = (ranked, player) => {
  console.log("Inputs ranked -> ", ranked);
  console.log("Player ranked -> ", player);
  // Write your code here
  let _tempCounter = 0;
  let final2DRanked = [];
  for (let i = 0; i < ranked.length; i++) {
    if (ranked[i] == ranked[i - 1]) {
      _tempCounter--;
    }
    final2DRanked.push([++_tempCounter, ranked[i]]);
  }
  console.log("Data storing the Dense Ranking |>", final2DRanked);
  // Above code is not required
  // tried above code by using 2D array

  // code to remove dublicate element from array
  //   ranked = ranked.filter((item,index)=> ranked.indexOf(item) == index)
  // code finish to remove dublicate element from array

  // checking and storing data accorsing to the player
  let finalRanking = [];
  for (let i = 0; i < player.length; i++) {
    let _player = player[i];
    let tempranking = 1;
    for (let j = 0; j < ranked.length; j++) {
      if (_player <= ranked[j]) {
        tempranking = j;
      }
    }
    finalRanking.push(tempranking);
  }
  return finalRanking;
};

// Driver code
console.clear();
let _ranked = [100, 100, 50, 40, 40, 20, 10];
let __ranked = [100, 90, 90, 80, 75, 60];
let _player = [5, 25, 50, 120];
let __player = [50, 65, 77, 90, 102];
// 1,2,4,6
// 1,2,4,5,6
console.log(climbingLeaderboard(__ranked, __player));
