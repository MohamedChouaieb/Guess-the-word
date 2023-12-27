var category={
    countries:["England","Kuwait","China","Nicaragua","Tunisia","Mali","South Africa","Iran","Spain","United Kingdom","Macau","Botswana","Argentina","Brazil","Canada","Denmark","Egypt","France","Germany","India","Japan","Mexico","Peru","Russia"],
    programming_Lang:["JavaScript","Python","Java","C++","C#","Ruby","Swift","PHP","Rust","HTML","CSS","SQL"],
    fruits:["Apple","Banana","Orange","Strawberry","Grapes","Watermelon","Pineapple","Mango","Kiwi","Peach","Pear","Cherry","Blueberry","Raspberry","Avocado"],
}
var main=document.getElementById("main")
var game=document.getElementById("game")
//Displaying the div
function display(){
    main.innerHTML+=`<h1 id="sel">Select a category to start ! </h1>`;
    let button=document.createElement("div");
    for (let i  in category) {
        button.innerHTML+=`<button class="category" onclick="generateWord('${i}'); toggle('game')" id="${i}">${i}</button>`
    }
    button.classList.add("button-container");
    main.append(button);
}
window.onload=display()
//Random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//Variable to conserve the generated word
let random;
//Random word selection
function generateWord(object){
    let len=(Object.values(category[object])).length
    let array=Object.values(category[object])
    random=(array[getRandomInt(len)])
    console.log(random)
    let buttons = document.getElementsByTagName('category');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    hints(random)
}
//Hints about the random word
var hint=document.createElement("p")
function hints(random){
    hint.innerHTML="<h3>● The word start with the letter : "+random[0]+"</h3><h3>● The word's length ="+random.length+"</h3>"
    game.append(hint)
}
//Counter of trials
var tryCount=0
function start(){
    if ((tryCount<6) && (check())) {
        win()
        return 
    }
    if(tryCount===6){
        lost()
    }
    else{
        tryAgin(tryCount)
        tryCount++
    }
}
//Check the user choice and the generated word
function check(){
    var choice=document.getElementById("choice").value
    return(choice.toUpperCase()===random.toUpperCase())
}
//Switch between hide and visible
function toggle(id){
    var any = document.getElementById(id);
    if (any.style.display === "none") {
        any.style.display = "block";
    } else {
        any.style.display = "none";
    }
}
//In case of wrong answer
var alert_warning=document.getElementById("alert_warning")
var ttry=document.createElement("p")
function tryAgin(i){
    if (i<5) {
        ttry.innerHTML=" You still got "+(5-i)+" trial remaining !"
    } 
    else {
        ttry.innerHTML=" Your last chance !"
    }
    alert_warning.append(ttry)
    if(!(toggle("alert_warning"))){
        toggle("alert_warning")   
    }
}
//In case of winnig 
function win(){
    toggle("alert_success")
}
//In case of losing the game or withdrawing
function lost(){
    toggle("alert")
}