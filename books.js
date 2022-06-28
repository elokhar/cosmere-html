window.onload = function () {
    var showpl = document.createElement("button");
    var text = document.createTextNode("Show another diagram (in Polish)");
    showpl.appendChild(text);
    document.getElementById("diagrams").appendChild(showpl);
    showpl.setAttribute("onclick", "add()");
    showpl.setAttribute("id", "showpl");
    var formcolor = document.createElement("button");
    var text2 = document.createTextNode("Change form style");
    formcolor.appendChild(text2);
    document.getElementById("form").appendChild(formcolor);
    formcolor.setAttribute("onclick", "color()");
    formcolor.setAttribute("id", "formcolor");
    $(function () {
        $("#datepicker").datepicker();
        
    });
    
}
function add() {

        var diagrampl = document.createElement("img");
        diagrampl.setAttribute("src", "img/reading_order_pl.jpg");
        diagrampl.setAttribute("class", "diagrams");
        diagrampl.setAttribute("id", "a");
        document.getElementById("diagrams").appendChild(diagrampl);
        document.getElementById("showpl").setAttribute("onclick", "del()");
}

function del(){
    var a = document.getElementById("a");
    a.parentNode.removeChild(a);
    document.getElementById("showpl").setAttribute("onclick", "add()");

}

function color() {
    var formvar = document.getElementById("form").style.backgroundColor = "#ffc14d";    
    document.getElementById("formcolor").setAttribute("onclick", "uncolor()");
}

function uncolor() {
    var formvar = document.getElementById("form").style.backgroundColor = "initial";
    document.getElementById("formcolor").setAttribute("onclick", "color()");
}

function validate() {
    $(".dialog").remove();
    var age = document.forms["form"]["age"].value;
    var date = $("#datepicker").val();
    if ((age==""||isNaN(age))&&(date=="")){
        $("#form").prepend("<div class='dialog' title='Wrong input'>You must enter age or choose date</div>");
    } else if (age<0||age>150){ 
        $("#form").prepend("<div class='dialog' title='Wrong input'>Age must be between 0 and 150</div>");
    }
    $(".dialog").dialog();
}

function save() {
    localStorage.setItem("note", document.forms.notes.note.value);
}

function show() {
    document.forms.notes.note.value = localStorage.getItem("note");
}

function saveprivate() {
    sessionStorage.setItem("note", document.forms.private.note.value);
}

function showprivate() {
    document.forms.private.note.value = sessionStorage.getItem("note");
}

