'use strict';
let score = 0;

function questionOne () {
    
    let tall = prompt('do you think im tall');
switch(tall.toLowerCase()){
    case 'no':
    case 'n':
        //console.log('wrong');
        alert('wrong');
        break;
    case 'yes':
    case 'y':
        // console.log('correct');
        alert('correct');
        score++;
        break;
    default:
        console.log('you did not answer with a yes or a no');}
}


    



function questionTwo (){
let hairColor = prompt('do think my hair color is pink');
switch(hairColor.toLowerCase()){
    case 'no':
    case 'n':
        // console.log('correct');
        alert('correct');
        score++;
        break;
    case 'yes':
    case 'y':
        // console.log('wrong');
        alert('wrong');
        break;
    default:
        console.log('you did not answer with a yes or a no');
}
}

function questionThree (){
let weight = prompt('do you think im fat');
switch(weight.toLowerCase()){
    case 'no':
    case 'n':
        // console.log('correct');
        alert('correct');
        score++;
        break;
    case 'yes':
    case 'y':
        // console.log('wrong');
        alert('wrong');
        break;
    default:
        console.log('you did not answer with a yes or a no');
}
}

function questionFour (){
let teaLike = prompt('do you think i like tea');
switch(teaLike.toLowerCase()){
    case 'no':
    case 'n':
        // console.log('wrong');
        alert('wrong');
        break;
    case 'yes':
    case 'y':
        // console.log('correct');
        alert('correct');
        score++;
        break;
    default:
        console.log('you did not answer with a yes or a no');
}
}
let cofeeLike = prompt('do you think i like coffee');
switch(cofeeLike.toLowerCase()){
    case 'no':
    case 'n':
        // console.log('wrong');
        alert('wrong');
        break;
    case 'yes':
    case 'y':
        // console.log('correct');
        alert('correct');
        score++;
        break;
    default:
        console.log('you did not answer with a yes or a no');
}

let guessNumber;
for(let i=0;i<4;i++){
    guessNumber=prompt('guess a number between 1 and 20 inclusive');
    let attemptsRemaining= 3-i;
    if(guessNumber > 7){
        alert('wrong answer, too high. '+attemptsRemaining+' attempts remaing');
    }else if(guessNumber < 7){
        alert('wrong answer, too low. '+attemptsRemaining+' attempts remaing');
    }else{
        alert('good job you guessed the right number');
        score++;
        break;
    }
    if(i == 3){
        alert('failed to guess correctly, the correct number is 7');
    }
}

let colors = ['red','green','blue'];
let guessColor;
mainLoop1:for(let i=0;i<6;i++){

    let attemptsRemaining = 5-i;
    guessColor=prompt('what is my favourite color');
    guessColor.toLowerCase();

   for(let j=0; j<colors.length;j++){
    if(guessColor == colors[j]){
        score++;
        alert('good job you got the correct answer\n the correct answers are:\n'+ colors);
        break mainLoop1;
    }
   }
   alert('wrong answer, '+attemptsRemaining+' attempts remaing')
    if(i == 5){
        alert('faild to guess correctly, the correct colors are:\n'+colors);
    }
}

let userName = prompt('plz enter your name');
alert('welcome '+userName+' to my humble website');
alert('this website has a little info about me, hope you like it and enjoy your visit '+userName);
alert('your overall score is '+score+' out of 7');

 

