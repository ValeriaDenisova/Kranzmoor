document.addEventListener("DOMContentLoaded", function () {
  function CabinetDisplay(num, officeArray, screenWidth) {
    if (screenWidth <= 1240) {
      if (num < 4) {
        officeArray[0].style.display = "inline-block";
        officeArray[6].style.display = "none";
      } else {
        officeArray[0].style.display = "none";
        officeArray[6].style.display = "inline-block";
      }
    }
    if (screenWidth <= 1010) {
      if (num < 2) {
        officeArray[0].style.display = "inline-block";
        officeArray[1].style.display = "inline-block";
        officeArray[6].style.display = "none";
        officeArray[5].style.display = "none";
      } else if (num < 5) {
        officeArray[0].style.display = "none";
        officeArray[1].style.display = "inline-block";
        officeArray[6].style.display = "none";
        officeArray[5].style.display = "inline-block";
      } else {
        officeArray[0].style.display = "none";
        officeArray[1].style.display = "none";
        officeArray[6].style.display = "inline-block";
        officeArray[5].style.display = "inline-block";
      }
    }

    if (screenWidth <= 780) {
      if (num == 0) {
        None(officeArray);
        officeArray[0].style.display = "inline-block";
        officeArray[1].style.display = "inline-block";
        officeArray[2].style.display = "inline-block";
      } else if (num == 6) {
        None(officeArray);
        officeArray[6].style.display = "inline-block";
        officeArray[5].style.display = "inline-block";
        officeArray[4].style.display = "inline-block";
      } else {
        None(officeArray);
        officeArray[num - 1].style.display = "inline-block";
        officeArray[num].style.display = "inline-block";
        officeArray[num + 1].style.display = "inline-block";
      }
    }

    if (screenWidth <= 540) {
      if (num == 6) {
        None(officeArray);
        officeArray[6].style.display = "inline-block";
        officeArray[5].style.display = "inline-block";
      } else {
        None(officeArray);
        officeArray[num].style.display = "inline-block";
        officeArray[num + 1].style.display = "inline-block";
      }
    }
  }

  const screenWidth = window.innerWidth;

  var office = document.getElementById("officePrice").children;
  var info = document.getElementById("info").children;

  var pricePageRight = document.getElementById("pricePageRight");
  var pricePageLeft = document.getElementById("pricePageLeft");
  var officeNum = 0;

  choosingСabinet(0);

  function choosingСabinet(officeNum) {
    None(info);
    info[officeNum].style.display = "block";
    PositionActive(office, "office_active", officeNum);
    CabinetDisplay(officeNum, office, screenWidth);
  }

  for (let i = 0; i < office.length; i++) {
    office[i].addEventListener("click", () => {
      officeNum = i;
      choosingСabinet(officeNum);
    });
  }

  pricePageLeft.addEventListener("click", (e) => {
    if (officeNum > 0) {
      officeNum--;
      choosingСabinet(officeNum);
    } else if(officeNum == 0){
      officeNum=6;
      choosingСabinet(officeNum);
    }
  });

  pricePageRight.addEventListener("click", (e) => {
    if (officeNum < 6) {
      officeNum++;
      choosingСabinet(officeNum);
    }else if(officeNum == 6){
      officeNum=0;
      choosingСabinet(officeNum);
    }
  });

  const screenHeight = window.screen.height;
  const width = document.documentElement.clientWidth;
  for (let i = 0; i < info.length; i++) {
    if (width <= 1640 && width >= 540 && screenHeight >= 750) {
      info[i].style.minHeight = "750px";
    }

    if (width <= 1240 && width >= 540 && screenHeight >= 1000) {
      info[i].style.minHeight = "870px";
    }
    if (width <= 1240 && width >= 540 && screenHeight >= 1200) {
      info[i].style.minHeight = "1050px";
    }
  }
});
