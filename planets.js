
$(document).ready(function () {
    $("div").prepend("<button>Change table style<button>");
    $("button").attr("onclick","color()");
})
function color() {
    $("table").css("background-color", "#00f47a");
    $("tbody").css("background-color", "#e4ecac");
    $("thead").css("background-color", "#66ffb3");
    $("button").attr("onclick", "uncolor()");
}
function uncolor() {
    $("table").css("background-color", "initial");
    $("table").children().css("background-color", "initial");
    $("button").attr("onclick", "color()");
}