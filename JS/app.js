"use strict";
let Person = prompt("Hello there! Who am I talking to?");
alert("Greetings dear " + Person + "\n" + "I hope you're enjoying your time" + "\n" + "My family name is Al-Kiswani")

let city = prompt("Based on my family name, Can you guess where am I from? yes or no").toLowerCase()

switch (city)
{
    case "yes": 
        alert("Wonderful");
        break;
    case "no":
        alert("No worries. We are from Jerusalem");
        break;
        default:
            alert("Really! it was a yes or no question 😏 ")

}

let webPage = prompt("Do you think that I built this web page on my own? yes or no").toUpperCase()
switch (webPage)
{
    case "YES": 
        alert("Ooh! then you know I am a developer! Amazing 😉");
        break;
    case "NO":
        alert("Ooch! that hurts! don't you think I can do it!!? 😔");
        break;
        default:
            alert("Agaain! it was a YES or NO question 😔😏 ")
}            

let myBackGround = prompt("So, do you think that I studied coding at the university? yes or no").toUpperCase()
switch (myBackGround)
{
    case "YES": 
        alert("I wish I did! I studied Mechatronics Engineering 😅");
        break;
    case "NO":
        alert("Correct! I studied Mechtronics Engineering 😔");
        break;
        default:
            alert("Ooh Com'on! couldn't you just answer with YES, or NO 😔😏 ")
}       

let age = prompt("well, do you believe that I started learning coding at the age of 34? yes or no").toLowerCase()
switch (age)
{
    case "yes": 
        alert(" Yes, you right! 😁");
        break;
    case "no":
        alert("Really! am I that good not to believe 😜	");
        break;
        default:
            alert("Seriously! why do you avoid a simple YES, or NO answer!😨😏 ")
}       

let final = prompt("Have we ever met in person? yes or no").toLowerCase()
switch (final)
{
    case "yes": 
        alert(" Greetings once again Dear " + Person +  "😊" + "\n" + "I know it's been a while 😔");
        break;
    case "no":
        alert("Greetings once again Dear " + Person +  "😊" + "\n" + "Hopefully we'll meet soon 😃");
        break;
        default:
            alert("Greetings once again Dear " + Person +  "😊" + "\n" + " You couldn't say YES, or NO! Could you!? 😂 ")
}       


let tries;

for (tries = 3; tries >= 0; tries--) {
    let born = prompt("Guess which year I was born in?");
    if (born < 1986){
        alert ("That's too old for my age. " + "you have " + tries + "attempt(s) left")
    }
    else if (born > 1986){
        alert("That's too young for my age. " + "you have " + tries + "attempt(s) left")
    }
    else if(tries == 0  || born == 1986){
        alert("Okay that's it. I was born in 1986")
    }

}    


console.log ("who this is " + Person)
console.log ("Did you guess my hometown " + city)
console.log ("Did I build this web " + webPage)
console.log ("Guessed my education " + myBackGround)
console.log ("believe I started at 34 " + age)
console.log ("is this my friend "  + final);