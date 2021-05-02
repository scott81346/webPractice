let thisH1 = document.getElementsByTagName("h1")[0];
thisH1.addEventListener("click",showAlert);
//p.22
function showAlert(){
    // alert(thisH1.innerHTML.length);
    // alert(thisH1.innerHTML.indexOf("World"));
    alert(thisH1.innerHTML.split(" ")[1]);
}