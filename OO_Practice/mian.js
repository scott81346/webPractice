let personObj = new Object();
personObj.firstName = "John";
personObj.lastName = "Doe";
personObj.age = 50;
personObj.eyeColor = "blue";
personObj.smile = function(){
    document.write("^___^");
};

let personObj2 = {
    firstName :"David",
    lastName : "Kuo",
    age: 30 ,
    eyeColor : "yellow",
    smile:function(){
        document.write("-_-|||");
    }
};

function personProto(firstName, lastName,age,eyeColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.smile = function(){
        document.write("🤣😋😎😋😊🙄😶😑😐😐"); //window + "."
    };
}

let newMan = new personProto("Ryan","Chung","99","red");

window.onload = function(){
    newMan.smile();  // need add : window.onload
}