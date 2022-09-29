// Task 1 


let example1 = "javascript"
console.log(example1);
typeof (example1)
console.log(75 > 5)
typeof (75 > 5);
console.log("10" === 10)
typeof ("10" === 10);
let example2 = 17
console.log(example2)
typeof (example2);
"a".match("b")
typeof ("a".match("b"));

// Task 2 💻

let height = 15
let width = 20
if (20 > 15) {
    console.log(20)
}
if (20 < 15) {
    console.log(15)
}

// Task 3 💻
for (let i = 0; i < 21; i++) {
    if (i % 3 == 0)
        console.log(i)
}

// Task 4 💻

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = (key && documents && pen && (apple || orange))

console.log(shouldGoToWork)


//Task 5 💻 

let v = prompt("введите число")
if
    (v % 15 == 0) {
    console.log("FizBuz")
}
else if (v % 5 == 0) {
    console.log("Fiz")
}
else if (v % 3 == 0) {
    console.log("Buz")
}

// Task 6 💻 


let age = prompt("введите ваш возраст")
if (age > 18) {
    console.log("Попей пивка")
}
else if (age >= 16 && age <= 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори")
}
else if (age < 18) {
    console.log("Пей колу")
}

// Task 7 💻


let l = prompt(" в какую сторону света вы хотите отправиться?")
switch (l) {
    case "юг":
        console.log('на юг пойдешь счастье найдешь');
        break;
    case "север":
        alert('на север пойдешь много денег найдешь');
        break;
    case "запад":
        alert('на запад пойдешь верного друга найдешь');
        break;
    case "восток":
        alert('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert("попробуйте еще");
}

### ADVANCED level

// Task 1 👨‍🏫 
let f = (s) => {
    alert('Привет, ' + s.toLowerCase().split(/\s+/).map(x => x[0] = x[0].toUpperCase() + x.slice(1)).join(' ') + '!')
}
f('пОлИнА нАбЕрЕжНаЯ');
    //Привет, Полина Набережная!

