const me = document.getElementById("myimg");
const imgbutton = document.getElementById("imgswitch");
const cards = document.querySelectorAll(".flip-box-front");
const colorbutton = document.getElementById("colorswitch");
const morebutton=document.getElementById("Morebutton");
const aboutme=document.getElementById("aboutme")


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
    if (morebutton.innerHTML=="More about me"){
      const more = document.createElement("p"); 
      more.innerHTML = "There's nothing more."; 
      more.id="toremove"
      morebutton.innerHTML="That's enough"
      aboutme.appendChild(more);
    }else{
      const toremove = document.getElementById("toremove")
      toremove.remove()
      morebutton.innerHTML="More about me"
    }
  })