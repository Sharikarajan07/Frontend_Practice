// //arraymethods

let a= ["sharika", "padhmapriya", "kavitha", "aishwariya", "lux", "swarna","nividhitha", "vibe"]

a.push("desika")
console.log(a)

a.pop()
console.log(a)

a.shift()
console.log(a)

a.unshift("amu")
console.log(a)

//es6-ecmascript

var b= 12 
b=7
var b=9
console.log(b)

let s=7 //let can only assign and reassign not redeclare
s=9
console.log(s)

const l=5 //const can only not reassign or redeclare as it is constant
console.log(l)

// arrow function


const add = (a, b) => a + b;

console.log(add(20,10));

function add(a,b){
    return a+b
}
console.log(add(20,40));

//loop

for(let i=0; i<=10; i++){
    console.log(i);
}

for (let i=0; i<a.length; i++){
    console.log(a[i]);
}
//for of 
for(let i of a){
    console.log(i);
}

//for each 
a.forEach((r) =>{
    console.log(r);
})

//map 
a.map((name) => {
    console.log(name);
})

let data= a.map((name) =>{
    return name+8
})
console.log(data);

//filter
let da = a.filter((name) =>{
    return name.length>8
})
console.log(da)

//find
let dat = a.find((name) =>{
    return name.length>8
})
console.log(dat)


//slice and splice

console.log(a.slice(0,4));

console.log(a.slice(2,3));

a.splice(2,1,"ashok")
console.log(a);

//convert to string
fruits =["banana","apple","mango","grapes","watermelon","orange"]
let mylist= fruits.toString()
console.log(mylist);

//at(negative indexing will work)
console.log(fruits.at(-2));

//concat()
let girls=["shari","kavi","aishu","padhu","lux","nive","swarna","vibe"]
let boys=["arjun","ashu","vamshik"]
let icecream=["vanilla","chocolate","butterscotch"]
let group = girls.concat(boys,icecream)
console.log(group);

//delete
delete fruits[0]
console.log(fruits);

//flat-merging two or more array
fruits =["banana","apple","mango","grapes","watermelon","orange",["dhanush","suriya","vijay"],["a","b","c"]]
console.log(fruits.flat(2));

//sync and async
//callback

function one(cb){
    cb()
    console.log(1);
}
function two(){
    console.log(2);
}
one(two)

//promise

let d = fetch("https://fakestoreapi.com/products/1")
.then((da) => {
    return da.json()
})
.then((list) =>{
    console.log(list,"luffy")
})
.catch((err) => {
    console.log(err,"error");
})
.finally(() =>{
    console.log("Im the end");
})



//async and await
const handlefetch = async () =>{
    let data =  await fetch("https://jsonplaceholder.typicode.com/todos/")
    let res =  await data.json()
    console.log(res);

}
handlefetch()

const han = async () =>{
    let data1 = await fetch("https://fakestoreapi.com/products/1")
    let res1 = await data1.json()
    console.log(res1);
}
han()

const handle = async() =>{
    let data2 = await fetch("https://fake.jsonmockapi.com/users/1")
    let res2 = await data2.json()
    console.log(res2);
}
handle()

//call by value and call by reference
let k=10
let b=k
b=14
console.log(k,b)

let f={name:"arun",age: 25}
let b=f
b.age=26
console.log(f,b)

//shallow copy
let b={...a}
b.age=26
console.log(a,b)

let c={name:"sharika",age:21,add:{state:"tn",location:"chennai"}}
let h={...c}
h.add.location="kpm"
console.log(c,h)

//deep copy
let h= structuredClone(c)
h.add.location="kpm"
console.log(c,h)

//setTimeout

console.log(1)
setTimeout(() =>{
    console.log(2);
},1000)
console.log(3)

//SCOPE
//Global scope
var g=12
function show(){
    console.log(g,"fun g");
}
show()
console.log(g,"normal g")

//function scope
function display(){
    let a=12
    console.log(a,"fun inside")
}
display()
console.log(a,"fun outside")

//hositing
console.log(j)

var j=12