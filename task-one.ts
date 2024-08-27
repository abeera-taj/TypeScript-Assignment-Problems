////// TASK TWO ////////
var customer = "developer";
console.log("Hello", customer, "would you like to learn some Python today?   ");

/////////// TASK THREE///////////////
let n = "bia mirza";
console.log(n.toUpperCase());
console.log(n.toLowerCase());
let titleCase = n
  .split(" ")
  .map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
  .join(" ");
console.log(titleCase);

/////////// TASK FOUR AND FIVE///////////////
let author = " Paulo Coelho ";
let quote =
  " When you really want something, all the universe conspires in helping you to achieve it! ";
console.log(author, ' once said " ', quote, ' " ');

/////////// TASK SIX///////////////
let strip_name = " \n \t Abeera\t";
console.log("without whitespaces: ", strip_name.trim());
console.log("with whitespaces:", strip_name);

/////////// TASK SEVEN///////////////

console.log("subtraction 10-2 :", 10 - 2);
console.log("multiplication  2x4 :", 2 * 4);
console.log("division 16/2 :", 16 / 2);
console.log("addition +62 :", 6 + 2);

/////////// TASK EIGHT///////////////

console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
console.log(6 + 2);

/////////// TASK NINE///////////////
let fav_num = 15;
console.log("my fav number:", fav_num);

/////////// TASK ELEVEN///////////////
let arr = ["jersey", "jack", "bruno", "uno", "rose"];
for (const name_arr of arr) {
  console.log(name_arr);
}

/////////// TASK TWELVE//////////////
let arr2 = ["jersey", "jack", "bruno", "uno", "rose"];
for (const name_arr2 of arr2) {
  console.log("Hey", name_arr2, "how are you ?");
}

/////////// TASK THIRTEEN//////////////
let cars = ["cressida", "houndai", "tesla", "honda", "royce royelle"];
for (const cars_arr of cars) {
  console.log("The new", cars_arr, "is my fav!!!");
}

/////////// TASK FOURTEEN//////////////

let guest = ["hasan", "malaika", "summaiya"];
for (const invite of guest) {
  console.log("Dear", invite, "I'd love to call you for dinner!!");
}

/////////// TASK FIFTEEN //////////////

// let guest_list = ["hasan", "malaika", "summaiya"];
// for (const invitation of guest_list) {
//   console.log("Dear", invitation, "I'd love to call you for dinner!!");
// }
// console.log(guest_list[0], "I am so sad you want be able to make it!");
// guest_list[0] = "Panda";
// console.log(" new guest list: ", guest_list);

/////////// TASK SIXTEEN //////////////

// let guest_list = ["hasan", "malaika", "summaiya"];
// for (const invitation of guest_list) {
//   console.log("Dear", invitation, "I'd love to call you for dinner!!");
// }
// console.log("there are more guests coming. ");
// guest_list.push("maiza");
// guest_list.splice(0, 1, "pappa");
// guest_list.splice(2, 0, "abdullah");
// console.log("new guest list is :", guest_list);

/////////// TASK SEVENTEEN //////////////

let guest_list = ["hasan", "malaika", "summaiya"];
console.log("The table is not arriing on time, so the table would be short");
guest_list.pop();
let l = guest_list.length;
console.log(guest_list[l - 1], "I am sorry you ain't invited  ");
console.log("new guest list is :", guest_list);
console.log(guest_list, "you guys come over!!");

/////////// TASK EIGHTEEN //////////////

let placesToVisit = ["Kyoto", "Reykjavik", "Cape Town", "Barcelona", "Sydney"];
console.log("original list:", placesToVisit);
console.log("original list:", placesToVisit.sort());
console.log("original list:", placesToVisit.reverse());
console.log("original list:", placesToVisit.sort().reverse());
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

/////////// TASK NINETEEN //////////////

console.log("the total number of guest coming are:", guest_list);

/////////// TASK TWENTY //////////////
let locations = [
  "karachi",
  "istanbul",
  "lahore",
  "antalya",
  "turkey",
  "dubai",
  "kashmir",
  "naran",
  "kaghan",
];
console.log(
  "current list containing countries, cities, and places is:",
  locations
);
console.log(' adding a city: "Paris"  ', locations.push("Paris"));
console.log(
  ' adding a place: "Hunza Valley"  ',
  locations.push("Hunza Valley")
);
console.log(
  ' adding a country: "United Kingdom"  ',
  locations.push("United Kingdom")
);

/////////// TASK TWENTY ONE //////////////
let obj_car = {
  model: "Cressida",
  number: "S-2951",
  tyre: "four wheel",
  place: "Kuwait",
};
console.log(" the car object is:", obj_car);
console.log(" the model of the car is:", obj_car.model);

/////////// TASK TWENTY TWO //////////////
// let locations_list = ["karachi", "istanbul", "lahore"];
// console.log("the length of locations array is:", locations_list[3]);

/////////// TASK TWENTY THREE //////////////
let food = "burger";
if (food === "burger pizza") {
  console.log("the food is burger pizza ");
} else if (food === "burger") {
  console.log("the food is burger. ");
} else {
  console.log("the food is not a burger. ");
}

/////////// TASK TWENTY FOUR //////////////
let ab = "biryani";
let array_list = ["cressida", "hyundai", "tesla", "honda", "suzuki"];
let num1 = 21;
let num2 = 18;
if (ab === "qorma") {
  console.log("the food is qorma");
} else if (ab !== "qorma") {
  console.log("the food isn't qorma");
} else if (array_list.includes("cressida")) {
  console.log("true");
} else if (array_list.includes("hyundai")) {
  console.log("such kaha true");
} else if (num1 > 18 && num1 < 30) {
  console.log("numerical condition");
}

/////////// TASK TWENTY FOUR //////////////
let alien_color = "yellow";
let alien_color2 = "green";
if (alien_color === "yellow") {
  console.log("The player just earned 5 points.");
}
if (alien_color2 === "green") {
  console.log("The player just earned 5 points.");
}

/////////// TASK TWENTY FIVE //////////////
let alien_color_y = "yellow";
let alien_color_g = "green";
if (alien_color_y === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alien_color_g === "green") {
  console.log("The player just earned 5 points.");
}

/////////// TASK TWENTY SIX //////////////
let alien_1 = "green";
let alien_2 = "yellow";
if (alien_1 === "green") {
  console.log("the player just earned 5 points for shooting the alien.");
} else if (alien_2 === "yellow") {
  console.log("the player just earned 10 points.");
} else {
  console.log("the player just failed.");
}

/////////// TASK TWENTY SEVEN //////////////
let alien_3 = "red";
if (alien_1 === "green") {
  console.log("the player just earned 5 points for shooting the alien.");
} else if (alien_2 === "yellow") {
  console.log("the player just earned 10 points.");
} else if (alien_3 === "red") {
  console.log("the player earned 15 points.");
}

/////////// TASK TWENTY EIGHT //////////////
let age = 27;
if (age < 2) {
  console.log("baby");
} else if (age >= 2 && age < 4) {
  console.log("toddler");
} else if (age >= 4 && age < 13) {
  console.log("kid");
} else if (age >= 13 && age < 20) {
  console.log("teenager");
} else if (age >= 20 && age < 65) {
  console.log("adult");
} else if (age >= 65) {
  console.log("elder");
} else {
  console.log("the person is dead");
}

/////////// TASK TWENTY NINE //////////////
// let fruits = ["apple", "apricot", "mango", "banana", "peach", 'kiwi'];
let fav_fruits = ["banana", "orange", " apricot"];
if (fav_fruits.includes("banana")) {
  console.log("i like banana");
}
if (fav_fruits.includes("mango")) {
  console.log("i like mango");
}
if (fav_fruits.includes("apricot")) {
  console.log("i like apricot");
}
if (fav_fruits.includes("orange")) {
  console.log("i like orange");
}
if (fav_fruits.includes("kiwi")) {
  console.log("i like kiwi");
}

/////////// TASK THIRTY //////////////
let user_names = ["admin", "amna", "farah", "sara", "aisha"];
for (let names of user_names) {
  if (names === "admin") {
    console.log(`hello ${names} you want the details?`);
  } else {
    console.log(`hello ${names}, thanks for logging again.`);
  }
}

/////////// TASK THIRTY-ONE //////////////
if (user_names.length === 0) {
  console.log("we need to find more users");
}

/////////// TASK THIRTY-TWO//////////////
let current_users = ["mala", "sum", "jack", "fifi", "developer"];
let new_users = ["a", "b", "c", "d", "e", "developer"];
let current_users_lower = current_users.map((user) => user.toLowerCase());

for (let a of new_users) {
  let new_users_lower = a.toLowerCase();

  if (current_users_lower.includes(new_users_lower)) {
    console.log(
      `Sorry, the username "${a}" is already taken. Please enter a new username.`
    );
  } else {
    console.log(`The username "${a}" is available.`);
  }
}

/////////// TASK THIRTY-THREE//////////////
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let ordinal of numbers) {
  if (ordinal === 1) {
    console.log("1st \n");
  } else if (ordinal === 2) {
    console.log("2nd \n");
  } else if (ordinal === 3) {
    console.log("3rd \n");
  } else if (ordinal === 4 || 5 || 6 || 7 || 8 || 9) {
    console.log(ordinal + "th \n");
  }
}

/////////// TASK THIRTY-FOUR//////////////
let fav_pizza = ["italian", "mexican", "fajita"];
for (let p of fav_pizza) {
  console.log(` i like ${p} pizza  `);
}
console.log(
  "pizza is my fav dish i can have it all the time \n i'd love to have pizza in my life! "
);

/////////// TASK THIRTY-FIVE//////////////
let animals = ["lion", "cat", "dog"];
for (let animal of animals) {
  console.log(
    `the ${animal} is really a suitable animal!\n${animal.toLowerCase()} is so much dear to me really! `
  );
}
console.log("Any of these animals would make a great pet!");

/////////// TASK THIRTY-SIX //////////////
function make_shirt(size: string, text: string): void {
  console.log(` ${size} and ${text} `);
}
make_shirt("the size is 32", ' the text would be" Good Luck "  ');

/////////// TASK THIRTY-SEVEN //////////////
function long_shirt(long_size: string, long_text: string): void {
  console.log(`${long_size} has size of ${long_text}`);
}
long_shirt(
  "the size is LONG and 40",
  ' the text would be" Loonnngg Shirtt "  '
);

function med_shirt(med_size: string, med_text: string): void {
  console.log(`${med_size} has size of ${med_text}`);
}
med_shirt("the size is LONG and 40", ' the text would be" Loonnngg Shirtt "  ');

/////////// TASK THIRTY-EIGHT /////////////
function describe_city(city: string, country = "Pakistan"): void {
  console.log(`${city} is in the ${country} country  `);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Islamabad");

/////////// TASK THIRTY-NINE //////////////

function city_country(city1: string, country1: string) {
  console.log(` "${city1}", "${country1}"  `);
}
city_country("lahore", "pakistan");

/////////// TASK FORTY //////////////
function make_album(
  artist_name: string,
  album_title: string,
  tracks?: number
): { artist_name: string; album_title: string; tracks?: number } {
  let album = {
    artist_name: artist_name,
    album_title: album_title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

console.log(make_album("jia", "jhalliya", 2));
console.log(make_album("sia", "sheesh"));
console.log(make_album("atif aslam", "bob the builder", 6));

/////////// TASK FORTY-ONE //////////////
let magician_name = ["name1", "name2", "name3"];
function show_magicians(m) {
  let each_name = m.map((one) => console.log(one));
  return each_name;
}
show_magicians(magician_name);

/////////// TASK FORTY-TWO //////////////
function make_great(show_magicians: string[]) {
  return show_magicians.map((magician_name) => magician_name + ` "Great"`);
}
let abc = make_great(magician_name);

show_magicians(abc);

/////////// TASK FORTY-THREE //////////////
//by combining task-41 and task-42 we can get the requirements of this code.

/////////// TASK FORTY-FOUR //////////////
// let sandwich_filling = ["salad", "tomato", "cucumber", "pickles", "beef patty"];
function sandwich(...sandwich_filling: string[]): void {
  sandwich_filling.forEach((item) =>
    console.log(`the items adding in sandwich is:${item} `)
  );
  console.log("Your sandwich is ready!\n");
}
sandwich("salad", "tomato", "cucumber", "pickles");

/////////// TASK FORTY-FOUR //////////////
function car(
  manufacturer: string,
  model: number,
  color?: string,
  feature?: string
): { manufacturer: string; model: number; color?: string; feature?: string } {
  let car_info = {
    manufacturer: manufacturer,
    model: model,
  };
  if (color !== undefined) {
    car_info.color = color;
  }
  if (feature !== undefined) {
    car_info.feature = feature;
  }
  return car_info;
}
console.log(car("suzuki", 1997, "black", "left hand handle"));
