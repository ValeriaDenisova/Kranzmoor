document.addEventListener("DOMContentLoaded", function () {
  var Victoria = document.getElementById("Victoria");
  var Car = document.getElementById("Car");

  function ActiveAdress(num) {
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
  }

  function ActiveStep(numAdress, numStep) {
    for (let i = 0; i < contactSliderArray.length; i++) {
      None(contactSliderStepArray[i]);
      ClassRemove(contactNumberElips[numAdress], "certificates_number__active");
    }

    contactSliderStepArray[numAdress][numStep].style.display = "flex";
    contactSliderStepArray[numAdress][
      contactSliderStepArray[numAdress].length - 1
    ].style.display = "flex";
    contactNumberElips[numAdress][numStep].classList.add(
      "certificates_number__active"
    );
    numStep = numStep;
  }

  var contactButton = document.getElementById("contactButton");
  var contactSlider = document.getElementById("contactSlider");
  var contactButtonArray = contactButton.children;
  var contactSliderArray = contactSlider.children;
  var contactSliderStepArray = [];
  var numAdress,
    numStep = 0;
  var contactNumberElips = [];
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
    contactNumberElips[i] = contactSliderStepArray[i][num].children;
    arrayLeft[i] = contactSliderArray[i].children[0];
    arrayRight[i] =
      contactSliderArray[i].children[contactSliderArray[i].children.length - 1];
  }

  ActiveAdress(0);

  for (let i = 0; i < arrayLeft.length; i++) {
    arrayLeft[i].addEventListener("click", () => {
      if (numStep > 0) {
        numStep--;
        ActiveStep(numAdress, numStep);
      } else if(numStep == 0){
        numStep = contactNumberElips[i].length - 1;
        ActiveStep(numAdress, numStep);
      }
    });

    arrayRight[i].addEventListener("click", () => {
      if (numStep < contactNumberElips[i].length - 1) {
        numStep++;
        ActiveStep(numAdress, numStep);
      } else if(numStep == contactNumberElips[i].length - 1){
        numStep = 0;
        ActiveStep(numAdress, numStep);
      }
    });
    for (let j = 0; j < contactNumberElips[i].length; j++) {
      contactNumberElips[i][j].addEventListener("click", () => {
        ActiveStep(numAdress, j);
        numStep = j;
      });
    }

    None(contactNumberElips[i]);
  }
  const width = document.documentElement.clientWidth;

  if (width <= 780) {

  const stepArray = [...document.querySelectorAll('.step_img')];

  stepArray.forEach(step => {
  const img = step.querySelector('img');
  if (img) {
    img.addEventListener('click', () => {
      // Например, открыть изображение в модальном окне
      openImageInModal(img.src);
    });
  }
});

// Функция для открытия изображения в модальном окне
function openImageInModal(src) {
  // Создаем элемент модального окна
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

  // Создаем изображение для отображения
  const largeImg = document.createElement('img');
  largeImg.src = src;
  largeImg.style.maxWidth = '70%';
  largeImg.style.maxHeight = '70%';
  largeImg.style.borderRadius = '20px';

  // Добавляем изображение в модальное окно
  modal.appendChild(largeImg);

  // Добавляем обработчик закрытия по клику
  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Вставляем модальное окно в документ
  document.body.appendChild(modal);
}
  }
});
