$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;

    var millisecsPerDay = 24 * 60 * 60 * 1000;


    for (var x = 0; x < topicCount; x++) {
        if (x % 2 == 1) {
            $("#courseTable").append("<tr>");
            // $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append(`<td>${x + 1}</td>`);
            // $("#courseTable").append(`<td>${typeof(Date()+x)}</td>`);
            // $("#courseTable").append(`<td>${typeof(x)}</td>`);
            $("#courseTable").append(`<td>${new Date(startDate.getTime() + 7 * x * millisecsPerDay).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        } else {
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td bgcolor="#FFBB77">${x + 1}</td>`);
            $("#courseTable").append(`<td bgcolor="#FFBB77">${new Date(startDate.getTime() + 7 * x * millisecsPerDay).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td bgcolor="#FFBB77">${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }



    }
});