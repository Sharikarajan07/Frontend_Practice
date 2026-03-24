//DOM manipulation
//changing HTML
function changename(){
    document.getElementById("dom").innerText="DOM"
}
//getelementbyid
let a= document.getElementById("d").innerHTML="Hello";
console.log(a);
//getelementbyclassname
let b=document.getElementsByClassName("riya");
b[0].innerText="Intelligent";
console.log(b);
//getelementbytagname
let c=document.getElementsByTagName("p");
c[0].textContent="this is frontend class";
console.log(c);
//queryselector
let d= document.querySelector("#hiii");
d.innerText="this is a simple paragraph";
//queryselectorall
let e= document.querySelectorAll(".box");
e[1].innerText="IPL2026 is coming";
//changing attributes
let value= document.getElementById("link");
value.getAttribute("href");
value.setAttribute("href", "https://www.youtube.com/");
//value.removeAttribute("href");

//addeventlistener
let image= document.getElementById("image");
let button= document.getElementById("button");
button.addEventListener("click", function(){
    image.setAttribute("src", "./assets/Dog-Photos.jpg");
});
//createelement and appendchild
// let newele= document.createElement("h3");
// newele.innerText="Hi!! Iam sharika rajan";
// document.body.appendChild(newele);
//newele.remove();

//methods to change css
//style

document.getElementById("afff").style.color="white";

//multiple styles
let element= document.getElementById("afff");
element.style.background="black";
element.style.fontsize="100px";
element.style.width="300px";
element.style.padding="70px";

//classlist
let el = document.getElementById("title");
el.classList.add("active");
//el.classList.remove("active");
el.classList.toggle("active");
el.classList.contains("active");

let butt= document.getElementById("btn");
let ele= document.getElementById("title");

butt.addEventListener("click",function(){
    ele.classList.toggle("active");
});

//html events
//1.mouse event- triggered using mouse actions
//click-user clicks once
//dblclick-triggered when user clicks double time

let bttn= document.getElementById("cli");
let elem=document.getElementById("elee")
bttn.addEventListener("dblclick", function(){
    elem.style.color="red";
});
//mouseover-when mouse enters a element
//mouseout-when mouse leaves a element
//mousedown-when mouse button is pressed
//mouseup-when mouse button is released
//mousemove-when mouse moves inside the element

let box= document.getElementById("box");
box.addEventListener("mouseover",function(){
    box.style.background="blue";
});
box.addEventListener("mouseout",function(){
    box.style.background="pink";
});
box.addEventListener("mousedown",function(){
    box.style.background="yellow";
});
box.addEventListener("mouseup",function(){
    box.style.background="black";
});
box.addEventListener("mousemove",function(){
    box.style.background="orange";
});

//2.window event- events happen on browser window
//load-when entire page is loaded
//DOMContentloaded-triggered when html loaded
//resize-when window size changes
//scroll-triggered when page is scrolled
//unload-when page is closed
//beforeunload- before leaving page triggered
//focus-when window becomes active
//blur-when window loses focus

let window = document.getElementById("scroll");
window.addEventListener("scroll",function(){
    window.textContent="scrolling the page.....";
});

//3.form event-event happens when user interact with forms













