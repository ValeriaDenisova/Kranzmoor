document.addEventListener("DOMContentLoaded", function () {
  const screenHeight = window.screen.height;
  var h1 = document.getElementById("h1");
  var H1 = document.getElementById("H1");
  var mainInfo = document.getElementById("mainInfo");
  var mainButton = document.getElementById("mainButton");
  var doctorsCardFront = document.getElementsByClassName("doctors_card_front");
  var doctorsCard = document.getElementsByClassName("doctors_card");
  var doctorsCardBack = document.getElementsByClassName("doctors_card_back");

  const width = document.documentElement.clientWidth;

  console.log(`Высота ${screenHeight}`)
  console.log(`Ширина ${width}`)

  if (screenHeight > 700 && screenHeight <= 1050 &&width <= 1010 && width > 780) {
    h1.style.marginBottom = "10vh";
    mainInfo.style.marginBottom = "10vh";
    mainButton.style.marginBottom = "10vh";
  }

  if (screenHeight > 1050 && width <= 1010 && width > 780) {
    console.log('Yes')
    h1.style.paddingTop = "35vh";
    H1.style.paddingTop = "35vh";
    H1.style.marginBottom = "8vh";
    mainButton.style.marginBottom = "30vh";
   } else if (screenHeight > 1000 && width <= 1240 && width > 780) {
    
     H1.style.paddingTop = "25vh";
     mainButton.style.marginBottom = "30vh";
   }


   if (screenHeight > 1050 && width <= 540 && width > 330) {
    h1.style.marginBottom = "7vh";
    mainInfo.style.marginBottom = "7vh";
    mainButton.style.marginBottom = "9vh";
   }

  if (screenHeight > 1050 && width > 1240) {
    H1.style.paddingTop= "8vh";
  
   }
  if (width <= 330) {
    for (let i = 0; i < doctorsCardFront.length; i++) {
      doctorsCardFront[i].style.width = `${width - 20}px`;
    }

    for (let i = 0; i < doctorsCard.length; i++) {
      doctorsCard[i].style.width = `${width - 20}px`;

      doctorsCardBack[i].children[0].children[0].style.position = "releteve";
      doctorsCardBack[i].children[0].children[0].style.left = "0px";
    }
  }
});
