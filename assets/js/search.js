    var adress = document.getElementById('adress');
    var tel = document.getElementById('tel');

    var navSearch = document.getElementById('navSearch');
    var searchNavWhite = document.getElementById('searchNavWhite');
    var searchNavBlack = document.getElementById('searchNavBlack');
    var searchNavForm = document.getElementById('searchNavForm');
    var searchNavClose = document.getElementById('searchNavClose');

    var mobileSearch = document.getElementById('mobileSearch');
    var searchMobileWhite = document.getElementById('searchMobileWhite');
    var searchMobileBlack = document.getElementById('searchMobileBlack');
    var searchMobileForm = document.getElementById('searchMobileForm');
    var searchMobileClose = document.getElementById('searchMobileClose');

    var search = document.getElementById('search');
    var searchWhite = document.getElementById('searchWhite');
    var searchBlack = document.getElementById('searchBlack');
    var searchForm = document.getElementById('searchForm');
    var searchClose = document.getElementById('searchClose');

    function ZIndex() {
        adress.style.zIndex = "51";
        tel.style.zIndex = "51";
    }

    function Search(search, searchWhite, searchBlack, searchForm, searchClose) {
        search.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-close') != 'true') {
                SearchClick(search, searchWhite, searchBlack);
                setTimeout(SearchForm, 2000, searchForm, searchClose);
                search.classList.remove("search_animation_color");
                ColorHoverEnd(search);

            } else {
                searchFormClose(searchForm, searchClose);
                search.classList.remove("search_animation");
                search.classList.add("search_animation_close");
                setTimeout(SearchClose, 2000, search, searchWhite, searchBlack);
                setTimeout(ColorHover, 2000, search);

            }


        }, {
            once: true
        });

        setTimeout(Search, 2000, search, searchWhite, searchBlack, searchForm, searchClose);
    }

//    search.style.position = "absolute";
//    search.style.left = "82px";
    Search(navSearch, searchNavWhite, searchNavBlack, searchNavForm, searchNavClose);
//    if(typeof search !== 'undefined'){Search(search, searchWhite, searchBlack, searchForm, searchClose)};
    Search(mobileSearch, searchMobileWhite, searchMobileBlack, searchMobileForm, searchMobileClose);

    navSearch.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-close') != 'true') {
            adress.style.zIndex = "0";
            tel.style.zIndex = "0";

        } else {
            setTimeout(ZIndex, 2000);



        }
    });
