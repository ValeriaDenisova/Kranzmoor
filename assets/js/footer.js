document.addEventListener("DOMContentLoaded", function () {
  var footerInfoContent = document.getElementById("footerInfoContent");
  const width = document.documentElement.clientWidth;

  if (width > 1240 && width <= 1640) {
    footerInfoContent.style.width = `${
      (width / 80) * 49 - (width - 1160) / 2
    }px`;
  }

  if (width > 1010 && width <= 1240) {
    footerInfoContent.style.width = `${(width / 5) * 3 - (width - 950) / 2}px`;
  }
});
