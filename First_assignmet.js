
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

//console.log(myArray_7);

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


/*
 Out of the 29 people who took the flight, only 12 buy tickets to return from the Bahamas on the same plane. If the flying the plane back also costs 5000 dollars, and does the company make an overall profit or loss? 
 The company charges the same fee of 200 dollars per ticket for the return flight.

 */

let return_people=29;
let returnFlight=5000;
let return_per_ticket=200;

let return_profit=5000-29*200;

if (return_profit<0){
  console.log(`Return flight is giving loss of ${return_profit}  $`);
}

else if ( return_profit>0){
  console.log(`Return flight is giving profit in ${return_profit}`);
}

let tweets = [
  "Wow, what a great day today!! #sunshine",
  "I feel sad about the things going on around us. #covid19",
  "I'm really excited to learn JavaScript with @JovianHQ #fsdbootcamp",
  "This is a really nice song. #linkinpark",
  "The JavaScript programming language is useful for full stack development",
  "Why do bad things happen to me?",
  "Apple announces the release of the new iPhone 15. Fans are excited.",
  "Spent my day with family!! #happy",
  "Check out my blog post on common string operations in JavaScript. #fsdbootcamp",
  "Freecodecamp has great coding tutorials. #skillup"
];

let happyWords = [
  'great', 
  'excited', 
  'happy', 
  'nice', 
  'wonderful', 
  'amazing',
  'good', 
  'best'
];

let sadWords = ['sad', 'bad', 'tragic', 'unhappy', 'worst'];
let count_happ=0;
let count_sad=0;
// Looping through each tweet and checking for happy or sad words
for (let i = 0; i < tweets.length; i++) {
  let tweet = tweets[i].toLowerCase().split(/\s+/); // Split and lowercase tweet words

  // Check if the tweet contains any sad word
  let containsSad = tweet.some(word => sadWords.includes(word));

  // Check if the tweet contains any happy word
  let containsHappy = tweet.some(word => happyWords.includes(word));

  // Output based on the tweet's mood
  if (containsSad) {
    count_happ=count_happ+1;
    console.log("unhappy tweet: " + tweets[i]);
  }
  if (containsHappy) {
    count_sad=count_sad+1;
    console.log("happy tweet: " + tweets[i]);
  }
}
console.log(`Number of happy tweets ${count_happ}`);

console.log(`Number of sad tweets ${count_sad}`);

console.log(`% of happy tweets in  ${count_happ*100/tweets.length}`);
console.log(`% of happy tweets in  ${count_sad*100/tweets.length}`);