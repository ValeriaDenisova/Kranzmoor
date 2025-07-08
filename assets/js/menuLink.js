document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById('nav');
    var navMobile = document.getElementById('navMobile');
    var closeMenuMobile = document.getElementById('CloseMenuMobile').children;
    var closeMenu = document.getElementById('CloseMenu').children;
    
   for(let i = 0; i <= 5; i++){
       closeMenuMobile[i].addEventListener('click', ()=>{
           navMobile.style.display = 'none';
       });
       
        closeMenu[i].addEventListener('click', ()=>{
           nav.style.display = 'none';
       });
   }
    
});