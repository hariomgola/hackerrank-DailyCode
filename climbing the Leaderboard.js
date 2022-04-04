"use strict";
let hackerrankURL =
  "https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true";

// Climbing the Leaderboard
const climbingLeaderboard = (ranked, player) => {
  console.log("Inputs ranked -> ", ranked);
  console.log("Player ranked -> ", player);
  // Write your code here
  let _ranked = []
  for(let i=0;i<ranked.length;i++){
    if(ranked[i] != ranked[i-1]){
      _ranked.push(ranked[i])
    }
  }
  ranked = _ranked
  // code finish to remove dublicate element from array

  // checking and storing data accorsing to the player
  let finalRanking = [];
  for (let i = 0; i < player.length; i++) {
    let tempScore = 0;
    for (let j = ranked.length - 1; j >= 0; j--) {
      if (player[i] >= ranked[j] && tempScore != ranked[j]) {
        tempScore = j + 1;
      }
    }
    finalRanking.push(tempScore);
  }
  if(finalRanking[0] == 0){
    finalRanking[0] = ranked.length +1 
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
