var nameEle = document.body.querySelector(".name");
var sumEle = document.body.querySelector(".sum");

var name = prompt("What is your name?");
var age = Number(prompt("What is your age?"));
var number = Number(prompt("What is your favorite number?"));
var sum = number + age;

nameEle.innerHTML= name + " is my name."

sumEle.innerHTML= "The sum of my age and favorite number is " + sum;