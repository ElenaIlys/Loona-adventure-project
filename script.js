/* Declare variables below to save the different sections (divs) of your story*/
let optionOnebutton=document.querySelector(".option-one");
let optionOnescreen=document.querySelector(".option-one-screen");

let optionTwobutton=document.querySelector(".option-two");
let optionTwoscreen=document.querySelector(".option-two-screen");

let optionThreebutton=document.querySelector(".option-three");
let optionThreescreen=document.querySelector(".option-three-screen");

let optionFourbutton=document.querySelector(".option-four");
let optionFourscreen=document.querySelector(".option-four-screen");

let optionFivebutton=document.querySelector(".option-five");
let optionFivescreen=document.querySelector(".option-five-screen");

let optionSixbutton=document.querySelector(".option-six");
let optionSixscreen=document.querySelector(".option-six-screen");

let paragraph=document.querySelector("p");



// /*When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

optionOnebutton.onclick=function(){
optionOnescreen.style.display="block";
};

optionTwobutton.onclick=function(){
optionTwoscreen.style.display="block";
};

optionThreebutton.onclick=function(){
optionThreescreen.style.display="block";
};

optionFourbutton.onclick=function(){
optionFourscreen.style.display="block";
};

optionFivebutton.onclick=function(){
optionFivescreen.style.display="block";
};

optionSixbutton.onclick=function(){
optionSixscreen.style.display="block";
};


setTimeout(() => {paragraph.innerHTML="Do not accept the fate of the moon.";}, 3000);



