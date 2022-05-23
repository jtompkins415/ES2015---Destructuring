//Destructuring

//Object Destructuring

//With destructuring, we can, on a single line, extract any values out of an object into a new variable

const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffine: true,
    quantity: 3
};

//The old way:

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

//The new way:

// const{price, quantity, teaName} = teaOrder;
// const {origin} = teaOrder;

//Creates the variable the variable and extracts the data, as long as that key exists w/in the object

//Can use the rest operator in conjuction w/ destructuring

//when used inside destructuring, the rest operator will collect all the remaining properties and put them in a variable


// const {price, quantity, teaName, ...others} = teaOrder;

//Defaults with destructuring


//Can add a default/ fall back value to a property that may not exist in the object

//  const {brewTemp: temp = 175} = teaOrder

 //Renaming with Destructuring

 //Can change the key name of a property in destructuring 

 const {teaName: tea} = teaOrder

 function checkout(tea){
     const {quantity = 1, price} = tea;
    return quantity * price;
 }


const order1 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffine: true,
};

//Destructuring Arrays

const students = [
    {name: 'Drake', gpa: 4.6},
    {name: 'Henrietta', gpa: 4.4},
    {name: 'Tung', gpa: 4.0},
    {name: 'Harry', gpa: 3.8},
    {name: 'Ant', gpa: 3.2}
];

//similar to object destructuring, but extraction is based on postioning of elements & use square brackets

// const [topStudent, secondBest] = students;

//Can skip elements using double commas(,,)

// const [topStudent, secondBest,,fourth] = students;

//Can also use rest operator

const [first, ...losers] = students 

//Destructuring Functions

// we can use destructuring in the parameters list to easily grab elements and put them in their own variables

const order2 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffine: true,
};

function getTotal({quantity: qty = 1, price}){
    return qty * price;
}

//Can be used the same way with Arrays

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];

function awardMedals([gold, silver, bronze]){
    return {
        gold,
        silver,
        bronze
    };
}

//Nested Destructuring 

//We Can destructure nested objects by nesting w/in the curly braces of the original destructure statement

const movie = {
    Title: 'Amadeus',
    Year: '1984',
    Rated: {
        rating: 'R',
        advisory: 'Rated R for brief nudity'
    },
    Released: '19 Sep 1984',
    Runtime: '160 min',
    Genres: ['Biography', 'Drama', 'History', 'Music'],
    Director: 'Milos Forman',
    Ratings: [
        {Sources: 'Internet Movie Database', Value: '8.3/10'},
        {Source: 'Rotten Tomatoes', Value: '93%'},
        {Source: 'Metacritic', Value: '88/100'}
    ],
    Versions: [
        {version: 'Original Release', runtime: 161},
        {version: "Director's Cut", runtime: 180}
    ]
}

// Can be multilayered destructuring

const {Rated: {rating, advisory}} = movie;
const {Ratings: [
    {Value: imdbRating},
    {Value:rtRating},
    {Value: metaRating}
],
Versions: [v1,v2]
} = movie

//Destructuring Swap

//We can swap values between multiple variables using destructuring 

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

//The old way:

// let temp = delicious;
// delicious = disgusting;
// disgusting = temp; 

//Long way to do it w/ destructuring

// let both = [delicious, disgusting];
// [disgusting, delicious] = both;

//The New way:

[disgusting, delicious] = [delicious, disgusting]