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

if(webPage.toUpperCase() == 'YES'){ 
    alert("Ooh! then you know I am a developer! Amazing 😉");
}
else if (webPage.toUpperCase() == 'NO'){
    alert("Ooch! that hurts! don't you think I can do it!!? 😔");
}
else{
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
    if (born < 1986 && tries != 0){
        alert ("That's too old for my age. " + "you have " + tries + "attempt(s) left");
        continue;
    }
    else if (born > 1986 && tries != 0){
        alert("That's too young for my age. " + "you have " + tries + "attempt(s) left");
        continue;
    }
    else if (tries == 0){
        alert ("You have lost all attempts\nthat's it, I was born in 1986 \nGood luck in other time.");
        break;
    }
    else{
        alert("Spectacular! how did you know that!")
        break;
    }    

}

let arr = ['A' , 'E' , 'M' , 'O' , 'T' , 'K'];
alert("yOu are plAying with me ! \n" +
"I'll AsK you about my favourit English leTter \n"+
"PleasE Enter a captial letter and you have 8 atteMpts");
let counter = 0;
for (var i = 0 ; i < 8 ; i++){
    let test = prompt("Enter a Capital letter : ");
    for (var j = 0 ; j < 6 ; j++){
        if (test == arr[i]){
            counter += 1;
            break;
        }
        else{
            continue;
        }
    }
}
alert("Before seeing your marks, I'll talk about my favourit letter.\n"+
"you ask himself about where ? i using my favourit letter in my first alert when i ask you about play or not."+
"\nyour marks is " + counter + " of 6");

function Talk_to_me(){
    location.href = "https://www.instagram.com/alkiswani_moe/" ;
}

console.log ("who this is " + Person)
console.log ("Did you guess my hometown " + city)
console.log ("Did I build this web " + webPage)
console.log ("Guessed my education " + myBackGround)
console.log ("believe I started at 34 " + age)
console.log ("is this my friend "  + final);

