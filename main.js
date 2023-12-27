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
//Random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//Random variable to conserve the generated word
let random;
//Random word selection
function generateWord(object){
    let len=(Object.values(category[object])).length
    var array=Object.values(category[object])
    random=(array[getRandomInt(len)])
}
//to check the user choice and the generated word
function check(){
    var choice=document.getElementById("choice").value
    if (choice.toUpperCase()===random.toUpperCase()) {
        alert("Congratulation !")
        return
        }
    alert("Try again !")   
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
window.onload=display()