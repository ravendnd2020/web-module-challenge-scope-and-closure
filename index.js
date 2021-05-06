

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));


/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
  counter 1 resets the counter
  2. Which of the two uses a closure? How can you tell?
  counter1 because the variable count resets then stops/
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     Counter 1 would be when you only want it to count from 0 each time. Counter2 adds 1 to the current number.
     You would want counter one if it was something that resets vs counter 2 an object that is static.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
  var inning = Math.round(Math.random() * (2 - 0) + 0)
  return inning;
}
inning();


/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inning, num){
  let totalHome = 0;
  let totalAway = 0;
  for(i = 0; i < num; i++){
    totalHome += inning();
    totalAway += inning();
  }
    return {
    Away: totalAway,
    Home: totalHome,
}
}
finalScore(inning, 9);
/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */


function getInningScore(callbackFunc) {
  let awayTeam = callbackFunc();
  let homeTeam = callbackFunc();
 return {
   Away: awayTeam,
   Home: homeTeam,
 }
}
getInningScore(inning);

/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", n
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(inning, getInningScore, numToPlay) {
  /* CODE HERE */
}




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  //console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
