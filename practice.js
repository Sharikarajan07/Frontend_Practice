
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

let s = fetch("https://fakestoreapi.com/products/1")
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


