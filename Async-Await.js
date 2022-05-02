console.log("Cooool");

async function laksh() {
    console.log('1');
    const response = await fetch('https://api.github.com/users');
    console.log('2');
    const users = await response.json();
    console.log('3');
    return users;
}


console.log('4');
console.log("5");
let a = laksh();
console.log(a);
a.then(data=> console.log(data),
console.log("7"))

console.log("6");
