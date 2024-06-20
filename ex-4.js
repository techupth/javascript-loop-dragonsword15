// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let key = 0;
while ( key < restaurants.length) {
    newRestaurants.push(`Restaurant Name: ${restaurants[key]}`);
    key++
};

console.log(newRestaurants);
