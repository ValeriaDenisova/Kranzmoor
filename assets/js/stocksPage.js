document.addEventListener("DOMContentLoaded", function () {
  var stockPageContent = document.getElementById("stockPageContent");
  var stockPageContentArray = stockPageContent.children;
  var stoksSliderElipsPage = document.getElementById("stoksSliderElipsPage");
  var stocksPageBreadCrumbs = document.getElementById("stocksPageBreadCrumbs");
  var stocksPageBreadCrumbsArray = stocksPageBreadCrumbs.children;
  var stockPageImg = document.getElementById("stockPageImg");

  NewElement(
    stockPageContentArray.length,
    "div",
    "elips",
    stoksSliderElipsPage
  );

  var stoksSliderElipsPageArray = stoksSliderElipsPage.children;
  var stoksPageLeft = document.getElementById("stoksPageLeft");
  var stoksPageRight = document.getElementById("stoksPageRight");

  numStocksPage = localStorage.getItem("stocksKey");

  if (numStocksPage == null) {
    numStocksPage = 0;
  }

  Slider(
    numStocksPage,
    stockPageContentArray,
    "block",
    stoksSliderElipsPageArray,
    "elips_active"
  );
  stocksPageBreadCrumbsArray[numStocksPage].style.display = "block";

  stoksPageLeft.addEventListener("click", (e) => {
    numStocksPage = SliderArray(
      e,
      "stoksPageLeft",
      "stoksPageRight",
      Slider,
      numStocksPage,
      stockPageContentArray,
      "block",
      stoksSliderElipsPageArray,
      "elips_active"
    );
    None(stocksPageBreadCrumbsArray);
    stocksPageBreadCrumbsArray[numStocksPage].style.display = "block";
    None(stockPageImg.children);
    stockPageImg.children[numStocksPage].style.display = "flex";
  });

  stoksPageRight.addEventListener("click", (e) => {
    numStocksPage = SliderArray(
      e,
      "stoksPageLeft",
      "stoksPageRight",
      Slider,
      numStocksPage,
      stockPageContentArray,
      "block",
      stoksSliderElipsPageArray,
      "elips_active"
    );
    None(stocksPageBreadCrumbsArray);
    stocksPageBreadCrumbsArray[numStocksPage].style.display = "block";

    None(stockPageImg.children);
    stockPageImg.children[numStocksPage].style.display = "flex";
  });

  for (let i = 0; i < stoksSliderElipsPageArray.length; i++) {
    stoksSliderElipsPageArray[i].addEventListener("click", () => {
      numStocksPage = i;
      Slider(
        numStocksPage,
        stockPageContentArray,
        "block",
        stoksSliderElipsPageArray,
        "elips_active"
      );
      None(stocksPageBreadCrumbsArray);
      stocksPageBreadCrumbsArray[numStocksPage].style.display = "block";
    });
  }

  const screenHeight = window.screen.height;
  const width = document.documentElement.clientWidth;
  var stockPage = document.getElementById("stockPage");
  var stockPageText = document.getElementsByClassName("stockPage_text");
  console.log(width);
  if (screenHeight > 1030 && width <= 1100) {
    stockPage.style.gap = "10vh";
    // for (let i = 0; i < stockPage.length; i++) {
    //   stockPageText[i].style.marginBottom = "10vh";
    // }
  }
});
