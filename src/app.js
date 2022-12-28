//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(name, age, team, trophies) {
    let managerDetails = [
      name,
      age,
      team,
      trophies
    ]
    return managerDetails
} 

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function  createFormation(formation){
  if(formation.length == 0){
    return null;
  }
  let formationO = {
    defender:formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return formationO;

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let a = [];
  for(let i=0; i<players.length; i++){
    if(players[i].debut == year){
      a.push(players[i]);
    }
  }
  return a;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(posi){
  let a = [];
  for(let i=0; i<players.length; i++){
    if(players[i].position == posi){
      a.push(players[i]);
    }
  }
  return a;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awards){
  let a = [];
  for(let i=0; i<players.length; i++){
    for(let j=0; j<players[i].awards.length; j++){
    if(players[i].awards[j].name == awards){
      a.push(players[i]);
    }
  }
  }
  return a;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awards , noOfTimes){
  let a = [];
  for(let i=0; i<players.length; i++){
    let count = 0;
    for(let j=0; j<players[i].awards.length; j++){
    if(players[i].awards[j].name == awards){
      count++;
    }
  }
  if(count == noOfTimes){
    a.push(players[i]);
  }
}
  
  return a;
}
//Progression 7 - Filter players that won __ award and belong to __ country
function filterByAwardxCountry(awards, country) {
  let arr=[];
  for (let i=0;i<players.length;i++) {
    for (let j=0;j<players[i].awards.length;j++)
    if (players[i].awards[j].name==awards && players[i].country==country) arr.push(players[i]);
  }
  return arr;
}
//Progression 8 - Filter players that won atleast __ awards, belong to __ team and are younger than __
function filterByNoOfAwardsxTeamxAge(awards, team, age) {
  let arr=[];
  for (let i=0;i<players.length;i++) {
    if (players[i].awards.length>=awards && players[i].team==team && players[i].age<=age) {
      arr.push(players[i]);
  }
}
  return arr;
}
//Progression 9 - Sort players in descending order of their age{
function sortAge(){
let a = players.sort((a,b)=>(a.age>b.age)?1:(a.age<b.age)?-1:0)

return a;
}


//Progression 10 - Sort players beloging to ___ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  let a=[];
  for (let i=0;i<players.length;i++) {
    if (players[i].team==team) arr.push(players[i]);
  }
  arr.sort(
    (p1, p2) => (p1.awards.length > p2.awards.length) ? 1 : (p1.awards.length < p2.awards.length) ? -1 : 0);
  
  return a;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  let a=[];
  for (let i=0;i<players.length;i++) {
    let count=0;
    if (players[i].country==country) {
      for (let j=0;j<players[i].awards.length;j++) {
        if (players[i].awards[j].name==awardName) 
        count++;
      }
    }
    if (count==noOfTimes)
      arr.push(players[i]);
  }

  arr.sort((a, b) => (a.name > b.name ? 1 : -1))
  return a;
}
//Challenge 2 - Sort players that are older than ___ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  let a=[];
  for (let i=0;i<players.length;i++) {
    if (players[i].age>=age) arr.push(players[i]);
  }

  
  a.sort((a, b) => (a.name > b.name ? 1 : -1))
  
  arr.sort((a, b) => (a.awards.year > b.awards.year ? 1 : -1))
  return a;
}