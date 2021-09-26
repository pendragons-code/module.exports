const obj = require("./add.js")
function greet(name) {
    console.log(`Hello ${name}, I am ${obj.add(5, 4)} years old! I ate ${obj.number()} vegetables today!`)
}

greet("Potato")