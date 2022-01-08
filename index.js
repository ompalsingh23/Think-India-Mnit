

/// for Events Section of Heritage Start 
// for image 2
function myfan2(){
    var a = document.getElementById("slidep1")
    var c = document.getElementById("slidep3")
    var d = document.getElementById("slidep4")
    var y = document.getElementById("slidep2")
    if (a.style.display === "" || c.style.display === "" || d.style.display === "") {
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    y.style.display = "";
    }
    // else {
//     x.style.display = "none";
//   }
}
// for image 3
function myfan3(){
    var a = document.getElementById("slidep1")
    var b = document.getElementById("slidep2")
    var d = document.getElementById("slidep4")
    var y = document.getElementById("slidep3")
    if (a.style.display === "" || b.style.display === "" || d.style.display === "") {
    a.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
    y.style.display = "";
    }
    // else {
//     x.style.display = "none";
//   }
}
// for image 4
function myfan4(){
    var a = document.getElementById("slidep1")
    var b = document.getElementById("slidep2")
    var c = document.getElementById("slidep3")
    var y = document.getElementById("slidep4")
    if (a.style.display === "" || b.style.display === "" || c.style.display === "") {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    y.style.display = "";
    }
    // else {
//     x.style.display = "none";
//   }
}
// for image 1
function myfan1(){
    var d = document.getElementById("slidep4")
    var b = document.getElementById("slidep2")
    var c = document.getElementById("slidep3")
    var y = document.getElementById("slidep1")
    if (d.style.display === "" || b.style.display === "" || c.style.display === "") {
    d.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    y.style.display = "";
    }
    // else {
//     x.style.display = "none";
//   }
}
/// for Events Section of Heritage End


// for menu btn
var btn= document.getElementById("menubtn");
var menu=document.getElementById("menu");
var stts=1;

function tgl(){
    if(stts==1){
        menu.style.right="0px";
        menu.style.transition= "width 1s ease";
        stts=0;
    }
    else{
        menu.style.right="-320px";
        menu.style.transition= "width 1s ease";
        stts=1;
    }
}


