document.addEventListener("DOMContentLoaded", function () {
  var Victoria = document.getElementById("Victoria");
  var Car = document.getElementById("Car");

  const leftHandlers = [];
const rightHandlers = [];

  function ActiveAdress(num) {
    if (leftHandlers[num]) {
    arrayLeft[num].removeEventListener("click", leftHandlers[num]);
  }
  if (rightHandlers[num]) {
    arrayRight[num].removeEventListener("click", rightHandlers[num]);
  }
    ClassRemove(contactButtonArray, "place_active");
    contactButtonArray[num].classList.add("place_active");
    None(contactSliderArray);
    contactSliderArray[num].style.display = "flex";

    ClassRemove(contactButtonArray, "before_active");
    if (num != 0) {
      contactButtonArray[num - 1].classList.add("before_active");
    }

    if (window.innerWidth <= 1010) {
      if (num === 0) {
        Victoria.style.marginTop = "0px";
      } else {
        Victoria.style.marginTop = "10px";
      }
    }

    numAdress = num;
    ActiveStep(numAdress, 0);

    leftHandlers[num] = () => {
    if (numStep > 0) {
      numStep--;
      ActiveStep(numAdress, numStep);
    } else if (numStep == 0) {
      numStep = contactSlider.children[num].children[1].children.length -2;
      ActiveStep(numAdress, numStep);
    }
  };
  
  rightHandlers[num] = () => {
    const maxSteps = contactSlider.children[num].children[1].children.length -2;
    if (numStep < maxSteps) {
      numStep++;
      ActiveStep(numAdress, numStep);
    } else if (numStep == maxSteps) {
      numStep = 0;
      ActiveStep(numAdress, numStep);
    }
  };

  arrayLeft[num].addEventListener("click", leftHandlers[num]);
  
  arrayRight[num].addEventListener("click", rightHandlers[num]);
 

  }

  function ActiveStep(numAdress, numStep) {
    for (let i = 0; i < contactSliderArray.length; i++) {
      None(contactSliderStepArray[i]);
    }

    contactSliderStepArray[numAdress][numStep].style.display = "flex";
    numStep = numStep;

    const img = contactSlider.children[numAdress].children[1].children[numStep].children[0].children[0];
      if (img) {

      if(img.dataset.click != 'true'){
          imgClickHandler = () => {
            openImageInModal(img.src);
          };
          img.addEventListener('click', imgClickHandler);
          img.setAttribute('data-click', 'true');
      }
        
    }
  }

  var contactButton = document.getElementById("contactButton");
  var contactSlider = document.getElementById("contactSlider");
  var contactButtonArray = contactButton.children;
  var contactSliderArray = contactSlider.children;
  var contactSliderStepArray = [];
  var numAdress,
    numStep = 0;
  var arrayLeft = [],
    arrayRight = [];

  for (let i = 0; i < contactButtonArray.length; i++) {
    contactButtonArray[i].addEventListener("click", () => {
      numStep = 0;
      ActiveAdress(i);
    });
    contactSliderStepArray[i] = contactSliderArray[i].children[1].children;
    let num = contactSliderStepArray[i].length - 1;
    CkrollNumber(num, contactSliderStepArray[i][num]);
    arrayLeft[i] = contactSliderArray[i].children[0];
    arrayRight[i] =
    contactSliderArray[i].children[contactSliderArray[i].children.length - 1];
  }

  ActiveAdress(0);

  const width = document.documentElement.clientWidth;

  if (width <= 780) {

function openImageInModal(src) {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.cursor = 'pointer';

  const largeImg = document.createElement('img');
  largeImg.src = src;
  largeImg.style.maxWidth = '70%';
  largeImg.style.maxHeight = '70%';
  largeImg.style.borderRadius = '20px';


  modal.appendChild(largeImg);


  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  document.body.appendChild(modal);
}
  }
});
