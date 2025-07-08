document.addEventListener("DOMContentLoaded", function () {

  var doctorsLeft = document.getElementById("doctorsLeft");
  var doctorsRight = document.getElementById("doctorsRight");
  var doctors = document.getElementById("doctors");
  var doctorsArray = doctors.children;
  var certificatesContent = document.getElementById("certificatesContent");
  var certificatesActiveNum;
  const screenWidth = window.innerWidth;
  var numDoctors = 0;
  let isHovered = false; 
  let isCertificatesContent = false;
  var doctorsLeftMobile = document.getElementById("doctorsLeftMobile");
  var doctorsRightMobile = document.getElementById("doctorsRightMobile");
  var doctorsMobile = document.getElementById("doctorsMobile");
  var doctorsMobileArray = doctorsMobile.children;
  var certificatesContentArray = certificatesContent.children;
  var certificatesCounter = false;
  let isOpenMobile = []

  function Open(){
    if(!isCertificatesContent){
        certificatesContent.style.display = "block"
        certificatesContent.children[numDoctors].style.display ="block"
        certificatesActive(numDoctors, 1)
        AddNumber(numDoctors)
        
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.add(
          "certificates_number__active"
        );
        isCertificatesContent =true
      }else{
        Close()
      }
  }
  function Close(){
      certificatesContent.style.display ="none";
      certificatesNone(certificatesActiveNum)
      NoneNumber(numDoctors)
      isCertificatesContent =false
  }

  function OpenCertificates(){
    doctorsArray[numDoctors].children[1].children[2].children[0].addEventListener("click", Open)
    certificatesContent.children[numDoctors].children[0].children[certificatesContent.children[numDoctors].children[0].children.length-1].addEventListener("click", Close)
  }

  
  function certificatesActive(numDoctors, numCertificates){
      let activeArray = []
      certificatesActiveNum = numCertificates
  if(numCertificates > 0 && screenWidth > 780){
        certificatesContentArray[numDoctors].children[0].children[numCertificates - 1].style.display ="block"
        activeArray.push(certificatesContentArray[numDoctors].children[0].children[numCertificates - 1])
  }
    certificatesContentArray[numDoctors].children[0].children[numCertificates].style.display ="block";
    activeArray.push(certificatesContentArray[numDoctors].children[0].children[numCertificates])

    if(numCertificates < certificatesContentArray[numDoctors].children[0].children.length - 2 && screenWidth > 780){
      certificatesContentArray[numDoctors].children[0].children[numCertificates+1].style.display ="block"
      activeArray.push(certificatesContentArray[numDoctors].children[0].children[numCertificates+1])
    }

    certificatesContentArray[numDoctors].children[0].children[numCertificates].classList.add(
          "certificates_foto__active"
        );
        
      
      activeArray.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
        isHovered = true;
      });
    
      elem.addEventListener('mouseleave', () => {
        isHovered = false;
      });
    });

  }


function onWheel(e) {
  if (isHovered) {
    e.preventDefault(); 

    if (e.deltaY > 0) {
      if(certificatesActiveNum < certificatesContentArray[numDoctors].children[0].children.length - 2){
        certificatesNone(certificatesActiveNum)
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.remove(
        "certificates_number__active"
      );
        certificatesActiveNum++;   
      }else{
        certificatesNone(certificatesActiveNum)
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.remove(
        "certificates_number__active"
      );
        certificatesActiveNum = 0
      }
      
    } else {
       if(certificatesActiveNum > 0){
        certificatesNone(certificatesActiveNum)
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.remove(
        "certificates_number__active"
      );
        certificatesActiveNum--;
       }else{
        certificatesNone(certificatesActiveNum)
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.remove(
        "certificates_number__active"
      );
        certificatesActiveNum = certificatesContentArray[numDoctors].children[0].children.length - 2
       }
      
    }
    certificatesActive(numDoctors, certificatesActiveNum)
    certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.add(
        "certificates_number__active"
      );
  }
}



  function certificatesNone(numCertificates){

   
    if(numCertificates > 0){
      certificatesContentArray[numDoctors].children[0].children[numCertificates - 1].style.display ="none"
    }
   
    if(numCertificates < certificatesContentArray[numDoctors].children[0].children.length - 2){
      certificatesContentArray[numDoctors].children[0].children[numCertificates+1].style.display ="none"
    }

    if(certificatesContentArray[numDoctors].children[0].children[numCertificates]){
      certificatesContentArray[numDoctors].children[0].children[numCertificates].classList.remove(
            "certificates_foto__active"
          );
    }

    if(certificatesContentArray[numDoctors].children[0].children[numCertificates]){
    certificatesContentArray[numDoctors].children[0].children[numCertificates].style.display ="none"
    }
    
  
  }

  function AddNumber(numDoctors){
    for(let i = certificatesContent.children[numDoctors].children[0].children.length - 1; i > 0; i--){
      let element = document.createElement("p");
      element.classList.add("certificates_number");
      element.classList.add("cursor");
      element.innerHTML = `<span>${i}</span>`;
      certificatesContent.children[numDoctors].children[1].prepend(element);
      element.addEventListener("click", () => {
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.remove(
        "certificates_number__active"
      );
        certificatesNone(certificatesActiveNum)
        certificatesActiveNum = i-1
        certificatesActive(numDoctors, certificatesActiveNum)
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.add(
        "certificates_number__active"
      );
      })
    }
  }

  function NoneNumber(numDoctors){
    const parentElement = certificatesContent.children[numDoctors].children[1];

    while (parentElement.children.length > 1) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }

  function OpenMobile(){

  if(!isOpenMobile[numDoctors]){
    doctorsMobile.children[numDoctors].addEventListener("click", (e) => {
      if (e.target.getAttribute("data-card") == "true") {
        if (
          doctorsMobile.children[numDoctors].children[0].style.transform == "rotateY(180deg)"
        ) {
          doctorsMobile.children[numDoctors].children[0].style.transform = "rotateY(0deg)";
        } else {
          doctorsMobile.children[numDoctors].children[0].style.transform = "rotateY(180deg)";
        }
      } else if(e.target.getAttribute("data-card") == "false"){
        Open() 
        certificatesContent.children[numDoctors].children[0].children[certificatesContent.children[numDoctors].children[0].children.length-1].addEventListener("click", Close)
      }
      
     })
     isOpenMobile[numDoctors] = true
  }
      
     

    
  }

  OpenCertificates();

  SliderContent(numDoctors, doctorsArray, "flex");
  SliderContent(numDoctors, doctorsMobileArray, "flex");

  if (doctorsArray.length == 1) {
    None([doctorsLeft, doctorsRight, doctorsLeftMobile, doctorsRightMobile]);
  }

  doctorsLeft.addEventListener("click", (e) => {
    certificatesContent.children[numDoctors].style.display ="none"
    certificatesNone(certificatesActiveNum);
    NoneNumber(numDoctors)
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

    if(isCertificatesContent){
      certificatesContent.children[numDoctors].style.display ="block"
      certificatesActive(numDoctors, 1)
      AddNumber(numDoctors)
      certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.add(
          "certificates_number__active"
        );
    }


    OpenCertificates()

  });

  doctorsRight.addEventListener("click", (e) => {
    certificatesContent.children[numDoctors].style.display ="none"
    certificatesNone(certificatesActiveNum);
    NoneNumber(numDoctors)
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

    if(isCertificatesContent){
       certificatesContent.children[numDoctors].style.display ="block"
     certificatesActive(numDoctors, 1)
     AddNumber(numDoctors)
     certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.add(
        "certificates_number__active"
      );

    }
    
    
      
    OpenCertificates()

  });

  doctorsLeftMobile.addEventListener("click", (e) => {
    certificatesContent.children[numDoctors].style.display ="none"
    certificatesNone(certificatesActiveNum);
    NoneNumber(numDoctors)
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
     doctorsMobileArray[numDoctors].children[0].style.transform = "rotateY(0deg)"
     
     
      if(isCertificatesContent){
       certificatesContent.children[numDoctors].style.display ="block"
        certificatesActive(numDoctors, 1)
        AddNumber(numDoctors)
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.add(
        "certificates_number__active"
      );

    }

    OpenMobile()
    certificatesContent.children[numDoctors].children[0].children[certificatesContent.children[numDoctors].children[0].children.length-1].addEventListener("click", Close)
    
  
  });

  doctorsRightMobile.addEventListener("click", (e) => {
    certificatesContent.children[numDoctors].style.display ="none"
    certificatesNone(certificatesActiveNum);
    NoneNumber(numDoctors)
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
     doctorsMobileArray[numDoctors].children[0].style.transform = "rotateY(0deg)"
    

      if(isCertificatesContent){
        certificatesContent.children[numDoctors].style.display ="block"
        certificatesActive(numDoctors, 1)
        AddNumber(numDoctors)
        certificatesContent.children[numDoctors].children[1].children[certificatesActiveNum].classList.add(
            "certificates_number__active"
      );

    }

     OpenMobile()
     certificatesContent.children[numDoctors].children[0].children[certificatesContent.children[numDoctors].children[0].children.length-1].addEventListener("click", Close)
    
  });


 
  

  OpenMobile()
  window.addEventListener('wheel', onWheel, { passive: false });

});
