'use strict'

//Task 1
let x = 20
let y = 58
let z = 42

let sum = x + y + z;
console.log ('Сумма чисел равна' + sum);
//Task 2
let sec = 60
let min = 60
let hour = 24
let days = 365
let age = 23
let myAgeInSeconds = sec * min * hour * days * age
console.log('Мой возраста в секундах = ' + myAgeInSeconds);
//Task 3
let count = 42
let userName = '42'
String(count) 
"" + count
Number(userName)
parseInt(userName)
//Task 4
let a = 1
let b = 2
let c = " белых медведей"
let result = (a + (b + c))
console.log(result)
//Task 5
let word1 = 'морпех'
let word2 = 'наледь'
let word3 = 'попрек'
let word4 = 'рубило'
let lengthWords = word1.length + word2.length + word3.length + word4.length
//Task 6 как делать это задание я вообще не знаю, мне просто написали этот код

console.log('Длинна всех слов равна ' + lengthWords + ' символа');

const varToString = varObj => Object.keys(varObj)[0]

let number = 10
console.log('Variable: ' + varToString({ number }) + ' have type: ' + typeof(number));

let string = "i am string"
console.log('Variable: ' + varToString({ string }) + ' have type: ' + typeof(string));

let object = {name : "Petya",
age : 15}
console.log('Variable: ' + varToString({ object }) + ' have type: ' + typeof(object));
//Task 7
let age2 = prompt('Сколько Вам лет?');
let name2 = prompt('Как вас зовут?');
console.log(age2 + ' ' + name2);


//Task 2 advanced   
    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
    let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] +codeWord5[1]
console.log(cipher)

//Task 1 advanced
let num1 = 14
let num2 = 32
console.log(num1,num2)

    num1 = num1+num2;
    num2 = num1-num2;
    num1 = num1-num2;
    

console.log(num1,num2)
