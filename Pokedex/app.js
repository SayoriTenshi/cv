let countel = document.getElementById("counter");
console.log(countel);

let count = 0;

function increment(){
    count++;
    countel.innerText = count;
    console.log(countel);
}

function save() {
    console.log(count);
    
}

let name1 = "Pin";
let greeting = "Welcome back ";

let welcome_l = document.getElementById("welcome");
welcome_l.innerText = greeting + name1;

welcome_l.innerText += " :))"