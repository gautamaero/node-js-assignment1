
/* Problem 2 - Working with Arrays
Q5: Create an array containing the following 3 elements:

your favorite color
the number of pets you have
a boolean value describing whether you have previous programming experience*/


let myArray =["blue", 15, "No"]


console.log('My favorite color is',myArray[0])




if(myArray[2]=="Yes"){
  console.log("I have previous programming experience")
} else {
  console.log("I don't have previous programming experience")
}

myArray.push(9.6)

console.log(myArray)

myArray.pop()
console.log(myArray)

console.log(`The array has ${myArray.length} elements `)

/* Problem 3 - Conditions and loops
Q10: Calculate and display the sum of all the numbers 
divisible by 7 between 18 and 534 i.e. 21+28+35+...+525+532.
*/

let sum=0;
let myArray_7=[];

for( let i=18;i<=534;i++){
  if(i%7==0) {
    myArray_7.push(i);
  }
}

console.log(myArray_7);

/*

Problem 4 - Flying to the Bahamas
Q11: A travel company wants to fly a plane to the Bahamas. 
Flying the plane costs 5000 dollars. So far, 29 people have signed up for the trip. 
If the company charges 200 dollars per ticket, what is the profit made by the company? 

*/

let costOfFlyingPlane=5000;

let signUpeople=29;

let perTicket=200;
let profit=costOfFlyingPlane-signUpeople*perTicket;

if (profit<0){
console.log(`Operating the flight is giving loss in ${profit} $`)
} 

else if (profit>0)
{
  
  console.log(`Operating the flight is giving profit in ${profit} $`)
}


