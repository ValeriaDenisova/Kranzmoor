document.addEventListener("DOMContentLoaded", function () {
  const screenWidth = window.innerWidth;

  var servicesPageBreadCrumbs = document.getElementById(
    "servicesPageBreadCrumbs"
  );
  servicesPageBreadCrumbs = servicesPageBreadCrumbs.children;
  var catImg = document.getElementById("catImg");
  var dogImg = document.getElementById("dogImg");
  var catInfo = document.getElementById("catInfo");
  var dogInfo = document.getElementById("dogInfo");
  var catButton = document.getElementById("catButton");
  var dogButton = document.getElementById("dogButton");

  var catButtonTablet = document.getElementById("catButtonTablet");
  var dogButtonTablet = document.getElementById("dogButtonTablet");

  var dogImgContent = dogImg.children[0].children[0].children;
  var catImgContent = catImg.children[0].children[0].children;

  var animal = localStorage.getItem("animal");
  if (animal == null) {
    animal = "cat";
  }
  var numCabinet = 0;
  var numImgCat, numImgDog;

  function ChooseAnimal(animal) {
    if (animal == "cat") {
      dogImg.style.display = "none";
      dogInfo.style.display = "none";
      servicesPageBreadCrumbs[1].style.display = "none";
      dogButton.classList.remove(`servicesPage_animal__active`);
      catButton.classList.add("servicesPage_animal__active");
      dogButtonTablet.classList.remove(`servicesPage_animal__active`);
      catButtonTablet.classList.add("servicesPage_animal__active");

      catImg.style.display = "block";
      catInfo.style.display = "block";
      servicesPageBreadCrumbs[0].style.display = "block";
    } else {
      dogImg.style.display = "block";
      dogInfo.style.display = "block";
      servicesPageBreadCrumbs[1].style.display = "block";
      catButton.classList.remove(`servicesPage_animal__active`);
      dogButton.classList.add("servicesPage_animal__active");
      catButtonTablet.classList.remove(`servicesPage_animal__active`);
      dogButtonTablet.classList.add("servicesPage_animal__active");

      catImg.style.display = "none";
      catInfo.style.display = "none";
      servicesPageBreadCrumbs[0].style.display = "none";
    }
  }

  ChooseAnimal(animal);
  CabinetImgArray(0);
  catButton.addEventListener("click", (e) => {
    animal = "cat";
    ChooseAnimal(animal);
  });

  dogButton.addEventListener("click", (e) => {
    animal = "dog";
    ChooseAnimal(animal);
  });

  catButtonTablet.addEventListener("click", (e) => {
    animal = "cat";
    ChooseAnimal(animal);
  });

  dogButtonTablet.addEventListener("click", (e) => {
    animal = "dog";
    ChooseAnimal(animal);
  });

  function CabinetImgArray(num) {
    if (dogImgContent[num].children.length == 1) {
      dogImg.children[0].children[1].style.display = "none";
      dogImg.children[0].children[2].style.display = "none";
    } else {
      dogImg.children[0].children[1].style.display = "flex";
      dogImg.children[0].children[2].style.display = "flex";
    }

    if (catImgContent[num].children.length == 1) {
      catImg.children[0].children[1].style.display = "none";
      catImg.children[0].children[2].style.display = "none";
    } else {
      catImg.children[0].children[1].style.display = "flex";
      catImg.children[0].children[2].style.display = "flex";
    }

    dogImg.children[0].children[2].innerHTML = "";
    catImg.children[0].children[2].innerHTML = "";

    NewElement(
      dogImgContent[num].children.length,
      "div",
      "elips",
      dogImg.children[0].children[2]
    );
    NewElement(
      catImgContent[num].children.length,
      "div",
      "elips",
      catImg.children[0].children[2]
    );

    Slider(
      0,
      catImgContent[num].children,
      "block",
      catImg.children[0].children[2].children,
      "elips_active"
    );
    Slider(
      0,
      dogImgContent[num].children,
      "block",
      dogImg.children[0].children[2].children,
      "elips_active"
    );
  }

  function ChooseCabinet(num) {
    PositionActive(office, "office_active", num);
    PositionActive(officeTablet, "office_active", num);
    None(catInfoArray);
    None(dogInfoArray);
    catInfoArray[num].style.display = "block";
    dogInfoArray[num].style.display = "block";
    None(dogImgContent);
    None(catImgContent);
    dogImgContent[num].style.display = "block";
    catImgContent[num].style.display = "block";

    CabinetDisplayServices(num, officeTablet, screenWidth);

    CabinetImgArray(num);

    for (let i = 0; i < catImg.children[0].children[2].children.length; i++) {
      catImg.children[0].children[2].children[i].addEventListener(
        "click",
        () => {
          numImgCat = i;
          Slider(
            numImgCat,
            catImg.children[0].children[0].children[numCabinet].children,
            "block",
            catImg.children[0].children[2].children,
            "elips_active"
          );
        }
      );
    }

    for (let i = 0; i < dogImg.children[0].children[2].children.length; i++) {
      dogImg.children[0].children[2].children[i].addEventListener(
        "click",
        () => {
          numImgDog = i;
          Slider(
            numImgDog,
            dogImg.children[0].children[0].children[numCabinet].children,
            "block",
            dogImg.children[0].children[2].children,
            "elips_active"
          );
        }
      );
    }
  }

  var office = document.getElementById("office");
  office = office.children;

  var officeTablet = document.getElementById("officeTablet");
  officeTablet = officeTablet.children;

  catInfoArray = catInfo.children;
  dogInfoArray = dogInfo.children;

  CabinetDisplayServices(0, officeTablet, screenWidth);

  for (let i = 0; i < office.length; i++) {
    office[i].addEventListener("click", () => {
      ChooseCabinet(i);
      numCabinet = i;
      Slider(
        0,
        catImg.children[0].children[0].children[i].children,
        "block",
        catImg.children[0].children[2].children,
        "elips_active"
      );
      numImgCat = 0;
      Slider(
        0,
        dogImg.children[0].children[0].children[i].children,
        "block",
        dogImg.children[0].children[2].children,
        "elips_active"
      );
      numImgDog = 0;
    });

    officeTablet[i].addEventListener("click", () => {
      ChooseCabinet(i);
      numCabinet = i;
      Slider(
        0,
        catImg.children[0].children[0].children[i].children,
        "block",
        catImg.children[0].children[2].children,
        "elips_active"
      );
      numImgCat = 0;
      Slider(
        0,
        dogImg.children[0].children[0].children[i].children,
        "block",
        dogImg.children[0].children[2].children,
        "elips_active"
      );
      numImgDog = 0;
    });
  }

  var catImgLeft = document.getElementById("catImgLeft");
  var catImgRight = document.getElementById("catImgRight");
  var dogImgLeft = document.getElementById("dogImgLeft");
  var dogImgRight = document.getElementById("dogImgRight");

  catImgLeft.addEventListener("click", (e) => {

    if (numImgCat > 0) {
      numImgCat--;
    } else if(numImgCat == 0){
      numImgCat = catImg.children[0].children[0].children[numCabinet].children.length - 1;
    }

    Slider(
      numImgCat,
      catImg.children[0].children[0].children[numCabinet].children,
      "block",
      catImg.children[0].children[2].children,
      "elips_active"
    );
  });

  dogImgLeft.addEventListener("click", (e) => {
    if (numImgDog > 0) {
      numImgDog--;
    } else if(numImgDog == 0){
      numImgDog = cdogImg.children[0].children[0].children[numCabinet].children.length - 1;
    }
    Slider(
      numImgDog,
      dogImg.children[0].children[0].children[numCabinet].children,
      "block",
      dogImg.children[0].children[2].children,
      "elips_active"
    );
  });

  catImgRight.addEventListener("click", (e) => {
    if (
      numImgCat <
      catImg.children[0].children[0].children[numCabinet].children.length - 1
    ) {
      numImgCat++;
    } else if(numImgCat ==
      catImg.children[0].children[0].children[numCabinet].children.length - 1){
        numImgCat=0;
      }

    Slider(
      numImgCat,
      catImg.children[0].children[0].children[numCabinet].children,
      "block",
      catImg.children[0].children[2].children,
      "elips_active"
    );
  });

  dogImgRight.addEventListener("click", (e) => {
    if (
      numImgDog <
      dogImg.children[0].children[0].children[numCabinet].children.length - 1
    ) {
      numImgDog++;
    }else if(numImgDog ==
      dogImg.children[0].children[0].children[numCabinet].children.length - 1){
        numImgDog =0
      }
    Slider(
      numImgDog,
      dogImg.children[0].children[0].children[numCabinet].children,
      "block",
      dogImg.children[0].children[2].children,
      "elips_active"
    );
  });

  var servicesPageLeftTablet = document.getElementById(
    "servicesPageLeftTablet"
  );
  var servicesPageRightTablet = document.getElementById(
    "servicesPageRightTablet"
  );

  servicesPageLeftTablet.addEventListener("click", (e) => {
    if (numCabinet > 0) {
      numCabinet--;
      ChooseCabinet(numCabinet);
    }else if(numCabinet == 0){
      numCabinet = 6
      ChooseCabinet(numCabinet);
    }
  });

  servicesPageRightTablet.addEventListener("click", (e) => {
    if (numCabinet < 6) {
      numCabinet++;
      ChooseCabinet(numCabinet);
    } else if(numCabinet == 6){
      numCabinet=0;
      ChooseCabinet(numCabinet);
    }
  });

  //    localStorage.removeItem("animal");
});
