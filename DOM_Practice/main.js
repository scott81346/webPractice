// let thisH1 = document.getElementsByTagName("h1")[0];
// thisH1.style.color = "blue";
// thisH1.style.background = "#a1f1d5";

let thisH1 = document.getElementById("topic");
let thisOptions = document.getElementsByName("options");
let thisP = document.getElementsByTagName("p")[0];

let thisUl = document.getElementById("option_ul");

//1
console.log(thisOptions[1].innerHTML);
//2
console.log(thisOptions[1].firstChild.nodeValue);


