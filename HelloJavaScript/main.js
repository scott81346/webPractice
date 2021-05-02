//way1
// function countLetters() {
//     document.onclick = function (e) {
//         alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元");
//     }

// }

// window.onload = function () {
//     document.onclick = function (e) {
//         countLetters();    
//     }
// };

// way2
// window.onload = function () {
//     document.onclick = function (e) {
//         console.log(e);
//         alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元");
//     }
// };

//p.11
// let confirmAnswer = confirm("你真的確定你想要取消這個服務嗎?");
// console.log(confirmAnswer);
// let thisH1 = document.getElementsByTagName("h1")[1];
// if(confirmAnswer){
//     thisH1.innerHTML = "服務已取消";
// }else{
//     thisH1.innerHTML = "繼續使用本服務";
// }

// let promptAnswer = prompt("小名家裡有三個小孩，他兩個哥哥叫張一、張二，請問第三個小孩叫什麼?", "張三");
// let thisH1 = document.getElementById("Response");

// p.13
// switch (promptAnswer) {
//     case "張三":
//         thisH1.innerHTML = "那小明是誰?";
//         break;
//     case "小明":
//         thisH1.innerHTML = "聰明";
//         break;
//     default:
//         thisH1.innerHTML = "你想多了";
// }

let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];

// p.14
function showAlert(){
    thisH1.innerHTML = "Hello!";
}

//p.18
thisButton.addEventListener("click",showAlert);

//way1
// thisButton.onclick = function(){
        //1
        // thisH1.innerHTML = "Hello!";
        //2
//      showAlert();
        //p.15
        // for(let i=0;i<10;i++){
        //     if(i==3){
        //         // break;
        //         continue;
        //     }
        //     console.log(i);    
        // }

        // let person = {
        //     firstName:"Ryan",
        //     lastName:"Chung",
        //     height:178
        // };

        // for(x in person){
        //     console.log(x + ":" + person[x]);
        // }

        // for(x in window){
        //     console.log(x + ":" + window[x]);
        // }

        // for(x in document){
        //     console.log(x + ":" + document[x]);
        // }

        
// };

//way2
// thisButton.onclick = showAlert;