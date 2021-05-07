$(function(){
    $("input").on("click",function(){
        // alert("Hi");
        // $("h1").text("Hello");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem)
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        //找到img元件
        //找到img元件的src屬性 -> 對應元件的title值
        // $("img").attr("src","https://foodpicks.tw/wp-content/uploads/2019-11-03_114250-696x406.jpg");
        $("img").attr("src",$("li").eq(randomChildNumber+2).attr("title"));
    });
});