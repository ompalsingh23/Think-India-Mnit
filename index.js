
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


