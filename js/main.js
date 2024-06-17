document.addEventListener("DOMContentLoaded", function () {

  const viewMoreBtns = document.querySelectorAll(".view-more__text");
  const selectDisease = document.querySelector(".select-disease");
  const diseasePlaceholder = document.querySelector("#disease-placeholder");
  const readMore = document.querySelector(".read-more");


  // оновлення інфо в спеціалізації лікаря
  function updateDisease() {
    const disease = selectDisease.value;
    diseasePlaceholder.textContent = disease;
  }
  updateDisease();

  // функціонал кнопок view more
  viewMoreBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const hiddenContent = this.closest(".view-more").previousElementSibling;
      if (
        hiddenContent.style.display === "none" ||
        hiddenContent.style.display === ""
      ) {
        hiddenContent.style.display = "block";
        this.innerHTML =
          'View Less <img src="images/arrow_down_grey.svg" alt="" />';
      } else {
        hiddenContent.style.display = "none";
        this.innerHTML =
          'View More <img src="images/arrow_down_grey.svg" alt="" />';
      }
    });
  });
  // функціонал кнопки read more
  readMore.addEventListener("click", function () {
    const hiddenText = document.querySelector(".hidden-text");
    if (
      hiddenText.style.display === "none" ||
      hiddenText.style.display === ""
    ) {
      hiddenText.style.display = "block";
      this.innerHTML = "Read less";
    } else {
      hiddenText.style.display = "none";
      this.innerHTML = "Read more";
    }
  });
});

