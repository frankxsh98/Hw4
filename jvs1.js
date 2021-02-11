const me = document.getElementById("myimg");
const imgbutton = document.getElementById("imgswitch");
const cards = document.querySelectorAll(".flip-box-front");
const colorbutton = document.getElementById("colorswitch");
const morebutton=document.getElementById("Morebutton");
const more=document.getElementById("more")


function changeimg(){
  if (me.src.endsWith("me.png") == true) {
    me.src = "me2.png";
  } else {
    me.src = "me.png";
  }
}


me.addEventListener("mouseenter",changeimg)
me.addEventListener("mouseleave",changeimg)
imgbutton.addEventListener("click", changeimg)

colorbutton.addEventListener("click",()=>{
  if ((cards[0].style.backgroundColor=="rgb(243, 222, 35)")||(cards[0].style.backgroundColor=="")){
    for (i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "#3fa3eb";
    }
  }else{
    for (i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "rgb(243, 222, 35)";
    }
  }

})

morebutton.addEventListener(("click"),()=>{
  if (more.innerHTML==""){
    more.innerHTML="Venmo me to know more."
    morebutton.innerHTML="No thanks"
  }else{
    more.innerHTML=""
    morebutton.innerHTML="More about me"
  }

})