//reverse a string 
function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse("hello"));

//palindrome
function ispalindrome(str){
    return str === str.split("").reverse().join("");
}
console.log(ispalindrome("sharika"));

