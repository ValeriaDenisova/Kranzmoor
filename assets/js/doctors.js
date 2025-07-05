document.addEventListener("DOMContentLoaded", function () {
  function certificatesActive(numCertificatesContent, numCertificatesImg) {
    for (
      let i = 0;
      i < certificatesContentArrayImg[numCertificatesContent].length - 1;
      i++
    ) {
      certificatesContentArrayImg[numCertificatesContent][i].style.display =
        "none";
      certificatesContentArrayImg[numCertificatesContent][i].classList.remove(
        "certificates_foto__active"
      );
      certificatesContentArrayImg[numCertificatesContent][
        i
      ].children[1].style.display = "block";
      certificatesNumbersElement[numCertificatesContent][i].classList.remove(
        "certificates_number__active"
      );
    }
    certificatesContentArrayImg[numCertificatesContent][
      numCertificatesImg
    ].style.display = "block";
    if (screenWidth > 1200) {
      if (numCertificatesImg == 0) {
        certificatesContentArrayImg[numCertificatesContent][
          numCertificatesImg + 1
        ].style.display = "block";
      } else if (
        numCertificatesImg ==
        certificatesContentArrayImg[numCertificatesContent].length - 2
      ) {
        certificatesContentArrayImg[numCertificatesContent][
          numCertificatesImg - 1
        ].style.display = "block";
      } else {
        certificatesContentArrayImg[numCertificatesContent][
          numCertificatesImg - 1
        ].style.display = "block";
        certificatesContentArrayImg[numCertificatesContent][
          numCertificatesImg + 1
        ].style.display = "block";
      }
    } else {
      //            certificatesContentArrayImg[numCertificatesContent][numCertificatesImg + 1].style.display = "block";
    }

    certificatesContentArrayImg[numCertificatesContent][
      numCertificatesImg
    ].classList.add("certificates_foto__active");
    certificatesContentArrayImg[numCertificatesContent][
      numCertificatesImg
    ].children[1].style.display = "none";
    certificatesNumbersElement[numCertificatesContent][
      numCertificatesImg
    ].classList.add("certificates_number__active");
    certificatesActiveNum = numCertificatesImg;

    var certificatesFotoActive = document.getElementsByClassName(
      "certificates_foto__active"
    );
    const width = document.documentElement.clientWidth;

    if (width <= 330) {
      for (let i = 0; i < certificatesFotoActive.length; i++) {
        certificatesFotoActive[i].style.width = `${width - 40}px`;
        certificatesFotoActive[i].style.height = `${width - 40}px`;
        certificatesFotoActive[i].parentElement.style.width = `${width - 40}px`;
      }
    }
  }

  var doctorsLeft = document.getElementById("doctorsLeft");
  var doctorsRight = document.getElementById("doctorsRight");
  var doctorsLeftMobile = document.getElementById("doctorsLeftMobile");
  var doctorsRightMobile = document.getElementById("doctorsRightMobile");
  var doctors = document.getElementById("doctors");
  var doctorsArray = doctors.children;
  var numDoctors = 0;
  var doctorsCertificatesOpen = [];
  var certificatesContent = document.getElementById("certificatesContent");
  var certificatesCkrol = document.getElementById("certificatesCkrol");
  var doctorsMobile = document.getElementById("doctorsMobile");
  var doctorsMobileArray = doctorsMobile.children;
  var certificatesContentArray = certificatesContent.children;
  var doctorsCertificatesClose = [];
  var certificatesCounter = false;
  var certificatesContentArrayImg = [];
  var certificatesContentArrayNumbers = [];
  var certificatesNumbersElement = [];
  var certificatesActiveNum;
  const screenWidth = window.innerWidth;

  for (let i = 0; i < certificatesContentArray.length; i++) {
    let j = certificatesContentArray[i].children[0].children.length - 1;
    doctorsCertificatesClose[i] =
      certificatesContentArray[i].children[0].children[j];
  }

  for (let i = 0; i < doctorsArray.length; i++) {
    doctorsCertificatesOpen[i] =
      doctorsArray[i].children[1].children[2].children[0];
  }

  SliderContent(numDoctors, doctorsArray, "flex");
  SliderContent(numDoctors, doctorsMobileArray, "flex");

  if (doctorsArray.length == 1) {
    None([doctorsLeft, doctorsRight, doctorsLeftMobile, doctorsRightMobile]);
  }

  doctorsLeft.addEventListener("click", (e) => {
    numDoctors = SliderArray(
      e,
      "doctorsLeft",
      "doctorsRight",
      SliderContent,
      numDoctors,
      doctorsArray,
      "flex"
    );
    if (certificatesCounter) {
      SliderContent(numDoctors, certificatesContentArray, "block");
    }
  });

  doctorsRight.addEventListener("click", (e) => {
    numDoctors = SliderArray(
      e,
      "doctorsLeft",
      "doctorsRight",
      SliderContent,
      numDoctors,
      doctorsArray,
      "flex"
    );
    if (certificatesCounter) {
      SliderContent(numDoctors, certificatesContentArray, "block");
    }
   
  });

  doctorsLeftMobile.addEventListener("click", (e) => {
    numDoctors = SliderArray(
      e,
      "doctorsLeftMobile",
      "doctorsRightMobile",
      SliderContent,
      numDoctors,
      doctorsMobileArray,
      "flex"
    );
    if (certificatesCounter) {
      SliderContent(numDoctors, certificatesContentArray, "block");
    }
    None(certificatesContentArray);
     doctorsMobileArray[numDoctors].children[0].style.transform = "rotateY(0deg)"
  
  });

  doctorsRightMobile.addEventListener("click", (e) => {
    numDoctors = SliderArray(
      e,
      "doctorsLeftMobile",
      "doctorsRightMobile",
      SliderContent,
      numDoctors,
      doctorsMobileArray,
      "flex"
    );
    if (certificatesCounter) {
      SliderContent(numDoctors, certificatesContentArray, "block");
    }
    None(certificatesContentArray);
     doctorsMobileArray[numDoctors].children[0].style.transform = "rotateY(0deg)"
  });

  ArrayClickDisplay(doctorsCertificatesOpen, certificatesContentArray, "block");
  ArrayClickDisplay(doctorsCertificatesClose, certificatesContentArray, "none");

  ArrayClick(doctorsCertificatesOpen, () => {
    certificatesCkrol.scrollIntoView(false);
    certificatesCounter = true;
  });

  ArrayClick(doctorsCertificatesClose, () => {
    doctors.scrollIntoView();
    certificatesCounter = false;
  });

  for (let i = 0; i < certificatesContentArray.length; i++) {
    certificatesContentArrayImg[i] =
      certificatesContentArray[i].children[0].children;
    certificatesContentArrayNumbers[i] =
      certificatesContentArray[i].children[1];
    for (let j = 1; j <= certificatesContentArrayImg[i].length - 1; j++) {
      let element = document.createElement("p");
      element.classList.add("certificates_number");
      element.classList.add("cursor");
      element.innerHTML = `<span>${j}</span>`;
      certificatesContentArrayNumbers[i].insertBefore(
        element,
        certificatesContentArrayNumbers[i].children[j - 1]
      );
      certificatesNumbersElement[i] =
        certificatesContentArrayNumbers[i].children;
    }

    certificatesActive(i, 1);

    for (let j = 0; j < certificatesNumbersElement[i].length - 1; j++) {
      certificatesNumbersElement[i][j].addEventListener("click", () => {
        certificatesActive(i, j);
      });
    }
  }

  for (let i = 0; i < doctorsMobileArray.length; i++) {
    doctorsMobileArray[i].addEventListener("click", (e) => {
      if (e.target.getAttribute("data-card") == "true") {
        if (
          doctorsMobileArray[i].children[0].style.transform == "rotateY(180deg)"
        ) {
          doctorsMobileArray[i].children[0].style.transform = "rotateY(0deg)";
        } else {
          doctorsMobileArray[i].children[0].style.transform = "rotateY(180deg)";
        }
      } else if(e.target.getAttribute("data-card") == "false"){
        if(certificatesContentArray[i].style.display == "none"){
          None(certificatesContentArray);
          certificatesContentArray[i].style.display = `block`;
        } else{
          certificatesContentArray[i].style.display = `none`;
        }
        
      }
    });
  }

  for (i = 0; i < certificatesContentArrayImg.length; i++) {
    for (j = 0; j < certificatesContentArrayImg[i].length; j++) {
      certificatesContentArrayImg[i][j].onwheel = function (e) {
        let counter = certificatesContentArrayImg[numDoctors].length - 2;
        if (e.deltaY > 0 && certificatesActiveNum < counter) {
          certificatesActiveNum++;
          certificatesActive(numDoctors, certificatesActiveNum);
        } else if (e.deltaY < 0 && certificatesActiveNum > 0) {
          certificatesActiveNum--;
          certificatesActive(numDoctors, certificatesActiveNum);
        }

        return false;
      };
    }
  }
});
