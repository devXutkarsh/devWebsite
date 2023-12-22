const cont = document.querySelector('.container');
const ball= document.querySelector('.ball')
window.addEventListener('mousemove', function(e){
  ball.style.transform= `translate(${e.clientX}px, ${e.clientY}px)`
 
})