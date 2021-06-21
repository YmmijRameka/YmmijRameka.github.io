console.log("hi ur awesome lol") //this keeps a log of your stuff you do 
//this is an inline comment
/* this is a multi
line comment */

var mName = "ymmij";  //variables cant have spaces or start with a number

var lastName = myName; //assigned a variable to be the same as the other for some reason.

var someVariable; /*its best practise to use camelCase (the first word is 
lowercase and the rest have capitals at begginning)*/

var hi = 10;
hi++; //this means hi=hi+1

var sandwich = ["peanut butter", "jelly", "bread"] //arays (incomplete lol)


function showDistance() {               //this will show an alert
    var speed = 5;
    var time = 10;
    alert(speed * time);

}

//to show an alert multiple times just do:
    showDistance
    showDistance
    showDistance

//USING JAVA YOU CAN CHANGE ELEMENTS:
document.title = 123; //will change the title to 123.

console.log (document.all); //you can see everything in the DOM

//good way to select things:

document.querySelectorAll(.class) //insert the .class u wanna select 
document.querySelectorAll(#id) //insert the #id you wanna select 



//dont use the index number to select things!

/* for loops explaination in own words:

We use for loops when selecting things. to select 1 element you would use the index number to select it.
but since we cant select multiple elements at a time, we must use a 'for' loop. 
by using the 'for' loop you are basically telling the program to go through each element 1 by 1 and add the changes you want to make.
if you want to change the colour of multiple "p" elements, you would have to use */ document.getElementsByClassName('random-class')
//to make it easier for ourselves we will add a variable to the selected elements:
var items = document.getElementsByClassName('random-class')
//here we are using "getElementsByClassName" but you can substitute this for the following selectors:
document.getElementById
document.getElementsByClassName
document.getElementsByTagName
// to select the class then you have to add it all to a for loop like this:
for var i = 0; i < items.length; i++){
    items[i].style.color = '#FFFF00';

}

//BUT the program needs somewhere to start off so it needs an index number to start off the counting with.




