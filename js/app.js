'use strict';
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
        break;
    default:
        console.log('you did not answer with a yes or a no');
}

let hairColor = prompt('do think my hair color is pink');
switch(hairColor.toLowerCase()){
    case 'no':
    case 'n':
        // console.log('correct');
        alert('correct');
        break;
    case 'yes':
    case 'y':
        // console.log('wrong');
        alert('wrong');
        break;
    default:
        console.log('you did not answer with a yes or a no');
}

let weight = prompt('do you think im fat');
switch(weight.toLowerCase()){
    case 'no':
    case 'n':
        // console.log('correct');
        alert('correct');
        break;
    case 'yes':
    case 'y':
        // console.log('wrong');
        alert('wrong');
        break;
    default:
        console.log('you did not answer with a yes or a no');
}

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
        break;
    default:
        console.log('you did not answer with a yes or a no');
}

let userName = prompt('plz enter your name');

alert('welcome '+userName+' to my humble website');
alert('this website has a little info about me, hope you like it and enloy your visit mr '+userName);