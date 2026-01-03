let score = 10+11;
let num1 = 10;

num1 /= 5;

console.log(num1);

let name = "vaishu";
// const name = "vaishu";
// var name = "vaishu";

// here the terminal crashes cux constant variable cannot be re assigned
// var is function-scoped
// Can cause bugs
// Not recommended today

// let allows value change
// Block-scoped
// Best for changing values

// Great question 👍
// This code is **about different ways of printing output in Node.js**.
// I’ll explain **each line**, then give a **clear comparison** (very viva-friendly).

// ---

// ## 1️⃣ `console.log("Hello");`

// ```js
// console.log("Hello");
// ```

// * Prints output **with a new line**
// * Automatically adds a line break at the end

// 📤 Output:

// ```
// Hello
// ```

// ---

// ## 2️⃣ `console.log("chai");`

// ```js
// console.log("chai");
// ```

// * Same as above
// * Printed on **next line**

// 📤 Output:

// ```
// chai
// ```

// ---

// ## 3️⃣ `process.stdout.write("chai");`

// ```js
// process.stdout.write("chai");
// ```

// * Writes directly to **standard output stream**
// * ❗ **Does NOT add a new line automatically**
// * Used in **low-level output control**

// ---

// ## 4️⃣ `process.stdout.write("chai");` (again)

// ```js
// process.stdout.write("chai");
// ```

// * Prints immediately **after previous output**

// 📤 Output (combined):

// ```
// chaichai
// ```

// 👉 Notice: **no space, no new line**

// ---

// ## 🔑 Difference: `console.log()` vs `process.stdout.write()`

// | Feature           | `console.log()` | `process.stdout.write()` |
// | ----------------- | --------------- | ------------------------ |
// | New line          | ✅ Yes           | ❌ No                     |
// | Easy debugging    | ✅ Yes           | ❌ No                     |
// | Low-level control | ❌               | ✅                        |
// | Browser support   | ✅               | ❌ (Node only)            |

// ---

// ## 5️⃣ `console.table({ city: "Jaipur" });`

// ```js
// console.table({ city: "Jaipur" });
// ```

// * Displays data in **table format**
// * Useful for objects & arrays
// * Improves readability while debugging

// 📤 Output:

// ```
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │ city    │ Jaipur  │
// └─────────┴─────────┘
// ```

// ---

// ## 6️⃣ `console.warn({ city: "Jaipur" });`

// ```js
// console.warn({ city: "Jaipur" });
// ```

// * Prints a **warning message**
// * Shown in **yellow** in many terminals
// * Used to highlight **non-critical issues**

// 📤 Output:

// ```
// { city: 'Jaipur' }
// ⚠ Warning
// ```

// (In browser dev tools, it shows warning styling)

// ---

// ## 🧠 Why use different console methods?

// | Method                   | Purpose           |
// | ------------------------ | ----------------- |
// | `console.log()`          | Normal messages   |
// | `console.warn()`         | Warnings          |
// | `console.error()`        | Errors            |
// | `console.table()`        | Structured data   |
// | `process.stdout.write()` | Custom formatting |

// ---

// ## 🔥 Viva-ready explanation (one line)

// > This program demonstrates different Node.js output methods including `console.log()` for standard output, `process.stdout.write()` for stream-based output without new lines, `console.table()` for structured display, and `console.warn()` for warning messages.

// ---

// If you want next, I can:

// * show **how input works using `process.stdin`**
// * explain **stdout / stdin streams**
// * or give **interview questions from this snippet**


let greeting = `hello ${name} !`;

// == this is a lose equality befroe comparisoion it automatically converts to a compatible datatype 
// and then === is strict equality it does not perform type conversion and strictly directly compares two things


let teaFlavours = ["green tea","black tea","oolong tea"];
let firstTea = teaFlavours[0];
let cities = ["london","tokyo","paris"];
let favcity = cities[2];


let teaTypes = ["herbel tea", "white tea", "masala chai"];
teaTypes[1] = "chamomile tea";

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("berlin");

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastele = teaOrders.pop();

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;

let topCities = ["Berlin", "Singapore", "New York"];
// const hardCopyCities = topCities;  this is wrong
const hardCopyCities = [...topCities];

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let combinedCitie = europeanCities.concat(asianCities);

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
let lenofcitie = teaMenu.length;

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
 

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let citynewpop = {};
for(let city in citiesPopulation) {
    if(city === "Berlin" ) {
        break;
    }
    citynewpop[city] = citiesPopulation[city];
}

let newarr = {}
for(let city in citiesarrr) {
    if(newarr[city] < 3000000) {
        continue;
    }
    newarr[city] = citiesarrr[city]
}

let availableTeas = [];
teaCollection.forEach(function (tea) {
    if(tea === "chai") {
        return;
    }
    availableTeas.push(tea);
});

// functions 

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let varoftea = makeTea("green tea");

// 2
function orderTea(teaType) {
    function order() {
        return "Order confirmed for" + teaType;
    }
    return order();
}
console.log(orderTea("ped tea"));


const calculateTea = (price , quantity) => price*quantity;

// 4
// function outer(fn) {
//   return fn(argument);
// }

function processTeaOrder(makeTea) {
    return makeTea("chai");
}

function makeTea(typeOdtea) {
    return `making ${typeOdtea}`;
}


function createTeaMaker() {
    return function (teatype) {
        return `making ${teatype}`;
    }
}

let teamaker = createTeaMaker();
let result = teamaker("green tea");