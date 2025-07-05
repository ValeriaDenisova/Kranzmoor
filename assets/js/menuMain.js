document.addEventListener("DOMContentLoaded", function () {

    var nav = document.getElementById('nav');
    var navClose = document.getElementById('navClose');
    var menuBurger = document.getElementById('menuBurger');

    function menuClose() {
        nav.style.display = "none";
    }

    function menuOpen() {
        nav.style.display = "block";
    }

    navClose.addEventListener('click', menuClose);
    menuBurger.addEventListener('click', menuOpen);

    document.addEventListener('keydown', function(event) {
        if (event.key == 'Escape' || event.key == 'Esc') {
        menuClose();
        NavMobileClose()
    }
});

    var navMobile = document.getElementById('navMobile');
    var navMobileClose = document.getElementById('navMobileClose');
    var navMobileOpen = document.getElementById('navMobileOpen');

    function NavMobileClose() {
        navMobile.style.display = "none";
    }

    function NavMobileOpen() {
        navMobile.style.display = "block";
    }



    navMobileClose.addEventListener('click', NavMobileClose);
    navMobileOpen.addEventListener('click', NavMobileOpen);

});
