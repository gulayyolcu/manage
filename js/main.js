

const menu=document.querySelector('.hamburger');
const menuList=document.querySelector('.menuList');

menu.addEventListener('click',()=>{
        menuList.classList.toggle('show');

});

function replaceIcon(x) {
    x.classList.toggle("fa-times");
    
}

const emailAlert=document.querySelector('.emailAlert');

function emailValidate(){
    const eMail=document.querySelector('.emailCorrection').value;
    const result= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(eMail);
    if(result==false){
            emailAlert.classList.toggle('show');
    }
}

const track = document.querySelector('.carouselContent');

let initialPosition = null;
let moving = false;
let transform = 0;

const gestureStart = (e) => {
  initialPosition = e.pageX;
  moving = true;
  const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
  if (transformMatrix !== 'none') {
    transform = parseInt(transformMatrix.split(',')[4].trim());
  }
};

const gestureMove = (e) => {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    track.style.transform = `translateX(${transform + diff}px)`;  
  }
};

const gestureEnd = (e) => {
  moving = false;
};

if (window.PointerEvent) {
  window.addEventListener('pointerdown', gestureStart);
  window.addEventListener('pointermove', gestureMove);
  window.addEventListener('pointerup', gestureEnd);  
} else {
  window.addEventListener('touchdown', gestureStart);
  window.addEventListener('touchmove', gestureMove);
  window.addEventListener('touchup', gestureEnd);  

  window.addEventListener('mousedown', gestureStart);
  window.addEventListener('mousemove', gestureMove);
  window.addEventListener('mouseup', gestureEnd);  
}