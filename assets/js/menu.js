document.addEventListener("DOMContentLoaded", function () {
   var navInfoMobile = document.getElementById('navInfoMobile');
   var navInfoMobileClose = document.getElementById('navInfoMobileClose');
   var mobileInfoOpen = document.getElementById('mobileInfoOpen');
    
     function navInfoClose() {
        navInfoMobile.style.display = "none";
    }

    function navInfoOpen() {
        navInfoMobile.style.display = "block";
    }
    
     navInfoMobileClose.addEventListener('click', navInfoClose);
     mobileInfoOpen.addEventListener('click', navInfoOpen);

      document.addEventListener('keydown', function(event) {
        if (event.key == 'Escape' || event.key == 'Esc') {
       navInfoClose()
    }
});

});
