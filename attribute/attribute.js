var heading = document.querySelector("h1");
console.log(heading); //lấy ra element

var headingClass = document.querySelector(".head");
console.log(headingClass);
headingClass.className = "head-class";
var headingNode = document.getElementsByClassName("head");
console.log(headingNode); // Lấy ra HTML collection
console.log(headingNode[0]); //lấy ra element
