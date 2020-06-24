const container=document.querySelector('.container')

document.querySelector('#button-menu').addEventListener('click',()=>{
  container.classList.toggle('active');
})

window.addEventListener('resize',()=>{
  if(window.innerWidth<=720){
    if(container.classList.contains('active')){
      container.classList.remove('active');
    }
  }
})