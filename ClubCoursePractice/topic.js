var millisecsPerDay = 24 * 60 * 60 * 1000;

var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //把社長說的那個日期變成JavaScript需要的日期時間格式
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

// setMonthAndDay(2,1);  // change new Date() !!!!

$(function(){
    $("input").on("change",function(){
        
         for (var x = 1; x < document.getElementsByTagName("td").length; x=x+3) {
            $("td").eq(x).text(new Date(new Date(document.getElementById("date1").value).getTime() + 7 * (x-1)/3 * millisecsPerDay).toLocaleDateString().slice(5));
            console.log(new Date(document.getElementById("date1").value).getTime());
         }
    });
});