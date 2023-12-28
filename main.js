//object of categories
var category={
    countries:["England","China","Spain","Argentina","Brazil","Canada","Germany","Japan","Mexico","Russia"],
    programming_Lang:["JavaScript","Python","Java","C++","C#","Ruby","Swift","PHP","Rust","HTML","CSS","SQL"],
    fruits:["Apple","Banana","Orange","Strawberry","Grapes","Watermelon","Pineapple","Mango","Kiwi","Peach","Pear","Cherry","Blueberry","Raspberry","Avocado"],
}
//object of hints 
var helper={
    countries:["england.png","china.png","spain.png","argentina.png","brazil.png","canada.png"]
}
var main=document.getElementById("main")
var game=document.getElementById("game")
//Displaying the div
function display(){
    main.innerHTML+=`<h1 id="sel">Select a category to start ! </h1>`;
    let button=document.createElement("div");
    for (let i  in category) {
        button.innerHTML+=`<button class="category" onclick="generateWord('${i}')" id="${i}">${i}</button>`
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
    //in case of losing we store the word in alert
    let losing=document.createElement("p")
    losing.innerHTML=" The word was : "+random;
    alertt.append(losing)
    //launching the hint function after picking the word
    hints(random)
    for (let j in category){
        button=document.getElementById(j)
        button.disabled=true
    }
    let sel=document.getElementById("sel")
    sel.innerHTML=`The game started , the selected category is `+object;
    hintPlus(object)
}
//Hints about the random word
var hint=document.createElement("p")
function hints(random){
    hint.innerHTML="<h3>● The word start with the letter : "+random[0]+"</h3><h3>● The word contain "+random.length+" carcteres</h3>"
    game.append(hint)
}
//Counter of trials
var tryCount=0
function start(){
    if (document.getElementById("choice").value==="") {
        alert("Invalid input !")
    }
    if ((tryCount<6) && (check())) {
        win()
        disableAll()
        return 
    }
    if(tryCount===6){
        lost()
        disableAll()
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
        return
    } 
    any.style.display = "none";
}
//The alert vars
var alertt=document.getElementById("alert")
var alert_success=document.getElementById("alert_success")
var alert_warning=document.getElementById("alert_warning")
//In case of wrong answer
var ttry=document.createElement("p")
function tryAgin(i){
    if (i===3) {
        x=document.getElementById("hinter")
        x.disabled=false
        ttry.innerHTML="<strong>Try again !</strong> Hint is available ; "+(5-i)+" trial remaining !"
        return
    }
    if (i<5) {
        ttry.innerHTML="<strong>Try again !</strong> You still got "+(5-i)+" trial remaining !"
    } 
    else {
        ttry.innerHTML="<strong>Try again !</strong> Your last chance !"
    }
    alert_warning.append(ttry)
    if(!(toggle("alert_warning"))){
        toggle("alert_warning")   
    }
}
//In case of winnig 
function win(){
    alertt.style.display = "none"
    alert_warning.style.display = "none"
    toggle("alert_success")
    toggle("alert_success")
    reload()
}
//In case of losing the game or withdrawing
function lost(){
    alert_success.style.display = "none"
    alert_warning.style.display = "none"
    toggle("alert")
    toggle("alert")
    reload()
}
//Reloading the page
function reload() {
    setTimeout(function() {
        window.location.reload();
    }, 6000); 
}
function disableAll(){
    var withdraw=document.getElementById("withdraw")
    var checker=document.getElementById("checker")
    for (let j in category){
        button=document.getElementById(j)
        button.disabled=true
    }
    checker.disabled=true
    withdraw.disabled=true
}
//hint++
function hintPlus(id){
    var image=document.createElement("p")
    image.innerHTML=`<img src="`+id/random.toLowerCase()+`.png">`
    game.append(image)
    document.getElementById("hinter").disabled=true
}