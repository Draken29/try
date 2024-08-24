var arabic=document.getElementById("arabic");
var english=document.getElementById("english");
var tilte=document.getElementById("title");
var nme=document.getElementById("ko");

arabic.onclick=()=>{
    setlanguage("arabic");
localStorage.setItem("lang","arabic");
}
english.onclick=()=>{
    setlanguage("english");
localStorage.setItem("lang","english");
}
onload=()=>{
    setlanguage(localStorage.getItem("lang"));
}

function setlanguage(getlanguage){
if(getlanguage==="arabic"){
    tilte.innerHTML="طوكيو";
    nme.style=`postion: absolute;
    left:1000px;`;
    nme.innerHTML=":الاسم";


}
else if(getlanguage==="english"){
    tilte.innerHTML="tokyo"
    nme.innerHTML="name"
    nme.style=`postion: absolute;
    right:1000px;`;
    nme.innerHTML="name:";
}
}