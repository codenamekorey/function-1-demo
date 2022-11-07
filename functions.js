let jonSnowHealth = 100;

//jonSnowHealth = String(jonSnowHealth);
//jonSnowHealth = Number(jonSnowHealth)
//converting to a number
//jonSnowHealth =parseInt(jonSnowHealth)
//converting to a boolean
//jonSnowHealth = Boolean(jonSnowHealth)
//jonSnowHealth = jonSnowHealth + ' health'


console.log(jonSnowHealth)

let theWinnerIs = 'Jamie is the winner';

//replace
let newWinner = theWinnerIs.toLowerCase().replace('jamie','Jon');
//console.log(newWinner);

//includes
if(newWinner.includes('Jon')){
    console.log('replace succesfully');
} else {
    console.log('not replaced')
}

console.log(newWinner);

//convert to kebob-case eg, jon-is-the-winner
//let newWinnerReplace = newWinner.replaceAll(' ', '-')

//let newWinnerLower = newWinner.toLowerCase()
//let newWinnerLowerSplit = newWinnerLower.split(' ')
//let newWinnerKebab = newWinnerLowerSplit.join('-')

//let newWinnerKebab = newWinner.toLowerCase().split(' ').join('-');
//console.log(newWinnerReplace)

//funtion 

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive');
    } else {
        console.log('rest in peace Jon');
    }
}



//create a function to launch attack on jon

function surpriseAttack(attack){
  //return jonSnowHealth -= attack;
  jonSnowHealth -= attack;
  isJonAlive();
}

surpriseAttack(20);
surpriseAttack(10);
surpriseAttack(40);
surpriseAttack(42);
//et remainingPlusSheild = surpriseAttack(60) + 50;
//console.log(remainingPlusSheild);

function greeting(person1, person2){
    console.log(`${person1} and ${person2} are saying hello to eachother.`)
}

greeting('Ned', 'John');

//function with return 

function rollDice(){
    let possibleRolls = [1,2,3,4,5,6];
    let randomIndex = Math.floor(Math.random()* possibleRolls.length) 
    return possibleRolls[randomIndex]
}

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    console.log(firstRoll, secondRoll)

    return firstRoll * secondRoll
}

let multipleRoll = diceMultiplier()
console.log(multipleRoll);

