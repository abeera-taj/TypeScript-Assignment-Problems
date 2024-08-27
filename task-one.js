////// TASK TWO ////////
var customer = "developer";
console.log("Hello", customer, "would you like to learn some Python today?   ");
/////////// TASK THREE///////////////
var n = "bia mirza";
console.log(n.toUpperCase());
console.log(n.toLowerCase());
var titleCase = n
    .split(" ")
    .map(function (n) { return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase(); })
    .join(" ");
console.log(titleCase);
/////////// TASK FOUR AND FIVE///////////////
var author = " Paulo Coelho ";
var quote = " When you really want something, all the universe conspires in helping you to achieve it! ";
console.log(author, ' once said " ', quote, ' " ');
/////////// TASK SIX///////////////
var strip_name = " \n \t Abeera\t";
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
var fav_num = 15;
console.log("my fav number:", fav_num);
/////////// TASK ELEVEN///////////////
var arr = ["jersey", "jack", "bruno", "uno", "rose"];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var name_arr = arr_1[_i];
    console.log(name_arr);
}
/////////// TASK TWELVE//////////////
var arr2 = ["jersey", "jack", "bruno", "uno", "rose"];
for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
    var name_arr2 = arr2_1[_a];
    console.log("Hey", name_arr2, "how are you ?");
}
/////////// TASK THIRTEEN//////////////
var cars = ["cressida", "houndai", "tesla", "honda", "royce royelle"];
for (var _b = 0, cars_1 = cars; _b < cars_1.length; _b++) {
    var cars_arr = cars_1[_b];
    console.log("The new", cars_arr, "is my fav!!!");
}
/////////// TASK FOURTEEN//////////////
var guest = ["hasan", "malaika", "summaiya"];
for (var _c = 0, guest_1 = guest; _c < guest_1.length; _c++) {
    var invite = guest_1[_c];
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
var guest_list = ["hasan", "malaika", "summaiya"];
console.log("The table is not arriing on time, so the table would be short");
guest_list.pop();
var l = guest_list.length;
console.log(guest_list[l - 1], "I am sorry you ain't invited  ");
console.log("new guest list is :", guest_list);
console.log(guest_list, "you guys come over!!");
/////////// TASK EIGHTEEN //////////////
var placesToVisit = ["Kyoto", "Reykjavik", "Cape Town", "Barcelona", "Sydney"];
console.log("original list:", placesToVisit);
console.log("original list:", placesToVisit.sort());
console.log("original list:", placesToVisit.reverse());
console.log("original list:", placesToVisit.sort().reverse());
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
/////////// TASK NINETEEN //////////////
console.log("the total number of guest coming are:", guest_list);
/////////// TASK TWENTY //////////////
var locations = [
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
console.log("current list containing countries, cities, and places is:", locations);
console.log(' adding a city: "Paris"  ', locations.push("Paris"));
console.log(' adding a place: "Hunza Valley"  ', locations.push("Hunza Valley"));
console.log(' adding a country: "United Kingdom"  ', locations.push("United Kingdom"));
/////////// TASK TWENTY ONE //////////////
var obj_car = {
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
var food = "burger";
if (food === "burger pizza") {
    console.log("the food is burger pizza ");
}
else if (food === "burger") {
    console.log("the food is burger. ");
}
else {
    console.log("the food is not a burger. ");
}
/////////// TASK TWENTY FOUR //////////////
var ab = "biryani";
var array_list = ["cressida", "hyundai", "tesla", "honda", "suzuki"];
var num1 = 21;
var num2 = 18;
if (ab === "qorma") {
    console.log("the food is qorma");
}
else if (ab !== "qorma") {
    console.log("the food isn't qorma");
}
else if (array_list.includes("cressida")) {
    console.log("true");
}
else if (array_list.includes("hyundai")) {
    console.log("such kaha true");
}
else if (num1 > 18 && num1 < 30) {
    console.log("numerical condition");
}
/////////// TASK TWENTY FOUR //////////////
var alien_color = "yellow";
var alien_color2 = "green";
if (alien_color === "yellow") {
    console.log("The player just earned 5 points.");
}
if (alien_color2 === "green") {
    console.log("The player just earned 5 points.");
}
/////////// TASK TWENTY FIVE //////////////
var alien_color_y = "yellow";
var alien_color_g = "green";
if (alien_color_y === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alien_color_g === "green") {
    console.log("The player just earned 5 points.");
}
/////////// TASK TWENTY SIX //////////////
var alien_1 = "green";
var alien_2 = "yellow";
if (alien_1 === "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else if (alien_2 === "yellow") {
    console.log("the player just earned 10 points.");
}
else {
    console.log("the player just failed.");
}
/////////// TASK TWENTY SEVEN //////////////
var alien_3 = "red";
if (alien_1 === "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else if (alien_2 === "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alien_3 === "red") {
    console.log("the player earned 15 points.");
}
/////////// TASK TWENTY EIGHT //////////////
var age = 27;
if (age < 2) {
    console.log("baby");
}
else if (age >= 2 && age < 4) {
    console.log("toddler");
}
else if (age >= 4 && age < 13) {
    console.log("kid");
}
else if (age >= 13 && age < 20) {
    console.log("teenager");
}
else if (age >= 20 && age < 65) {
    console.log("adult");
}
else if (age >= 65) {
    console.log("elder");
}
else {
    console.log("the person is dead");
}
/////////// TASK TWENTY NINE //////////////
// let fruits = ["apple", "apricot", "mango", "banana", "peach", 'kiwi'];
var fav_fruits = ["banana", "orange", " apricot"];
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
var user_names = ["admin", "amna", "farah", "sara", "aisha"];
for (var _d = 0, user_names_1 = user_names; _d < user_names_1.length; _d++) {
    var names = user_names_1[_d];
    if (names === "admin") {
        console.log("hello ".concat(names, " you want the details?"));
    }
    else {
        console.log("hello ".concat(names, ", thanks for logging again."));
    }
}
/////////// TASK THIRTY-ONE //////////////
if (user_names.length === 0) {
    console.log("we need to find more users");
}
/////////// TASK THIRTY-TWO//////////////
var current_users = ["mala", "sum", "jack", "fifi", "developer"];
var new_users = ["a", "b", "c", "d", "e", "developer"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _e = 0, new_users_1 = new_users; _e < new_users_1.length; _e++) {
    var a = new_users_1[_e];
    var new_users_lower = a.toLowerCase();
    if (current_users_lower.includes(new_users_lower)) {
        console.log("Sorry, the username \"".concat(a, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(a, "\" is available."));
    }
}
/////////// TASK THIRTY-THREE//////////////
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _f = 0, numbers_1 = numbers; _f < numbers_1.length; _f++) {
    var ordinal = numbers_1[_f];
    if (ordinal === 1) {
        console.log("1st \n");
    }
    else if (ordinal === 2) {
        console.log("2nd \n");
    }
    else if (ordinal === 3) {
        console.log("3rd \n");
    }
    else if (ordinal === 4 || 5 || 6 || 7 || 8 || 9) {
        console.log(ordinal + "th \n");
    }
}
/////////// TASK THIRTY-FOUR//////////////
var fav_pizza = ["italian", "mexican", "fajita"];
for (var _g = 0, fav_pizza_1 = fav_pizza; _g < fav_pizza_1.length; _g++) {
    var p = fav_pizza_1[_g];
    console.log(" i like ".concat(p, " pizza  "));
}
console.log("pizza is my fav dish i can have it all the time \n i'd love to have pizza in my life! ");
/////////// TASK THIRTY-FIVE//////////////
var animals = ["lion", "cat", "dog"];
for (var _h = 0, animals_1 = animals; _h < animals_1.length; _h++) {
    var animal = animals_1[_h];
    console.log("the ".concat(animal, " is really a suitable animal!\n").concat(animal.toLowerCase(), " is so much dear to me really! "));
}
console.log("Any of these animals would make a great pet!");
/////////// TASK THIRTY-SIX //////////////
function make_shirt(size, text) {
    console.log(" ".concat(size, " and ").concat(text, " "));
}
make_shirt("the size is 32", ' the text would be" Good Luck "  ');
/////////// TASK THIRTY-SEVEN //////////////
function long_shirt(long_size, long_text) {
    console.log("".concat(long_size, " has size of ").concat(long_text));
}
long_shirt("the size is LONG and 40", ' the text would be" Loonnngg Shirtt "  ');
function med_shirt(med_size, med_text) {
    console.log("".concat(med_size, " has size of ").concat(med_text));
}
med_shirt("the size is LONG and 40", ' the text would be" Loonnngg Shirtt "  ');
/////////// TASK THIRTY-EIGHT /////////////
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in the ").concat(country, " country  "));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Islamabad");
/////////// TASK THIRTY-NINE //////////////
function city_country(city1, country1) {
    console.log(" \"".concat(city1, "\", \"").concat(country1, "\"  "));
}
city_country("lahore", "pakistan");
/////////// TASK FORTY //////////////
function make_album(artist_name, album_title, tracks) {
    var album = {
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
var magician_name = ["name1", "name2", "name3"];
function show_magicians(m) {
    var each_name = m.map(function (one) { return console.log(one); });
    return each_name;
}
show_magicians(magician_name);
/////////// TASK FORTY-TWO //////////////
function make_great(show_magicians) {
    return show_magicians.map(function (magician_name) { return magician_name + " \"Great\""; });
}
var abc = make_great(magician_name);
show_magicians(abc);
/////////// TASK FORTY-THREE //////////////
//by combining task-41 and task-42 we can get the requirements of this code.
/////////// TASK FORTY-FOUR //////////////
// let sandwich_filling = ["salad", "tomato", "cucumber", "pickles", "beef patty"];
function sandwich() {
    var sandwich_filling = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich_filling[_i] = arguments[_i];
    }
    sandwich_filling.forEach(function (item) {
        return console.log("the items adding in sandwich is:".concat(item, " "));
    });
    console.log("Your sandwich is ready!\n");
}
sandwich("salad", "tomato", "cucumber", "pickles");
/////////// TASK FORTY-FOUR //////////////
function car(manufacturer, model, color, feature) {
    var car_info = {
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
