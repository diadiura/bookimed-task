document.addEventListener("DOMContentLoaded", function () {
  //select country/disease
  const selectFields = document.querySelectorAll(".select__field");

  selectFields.forEach(function (sel) {
    const select = sel.querySelector(".select__text");
    const list = sel.nextElementSibling;
    const greenArrow = sel.querySelector(".green-arrow");

    sel.onclick = function () {
      list.classList.toggle("hide");
      greenArrow.classList.toggle("rotate");
    };

    const selectOptions = list.querySelectorAll(".select__options");
    selectOptions.forEach(function (option) {
      option.onclick = function () {
        select.innerHTML = this.innerHTML;
        select.style.fontSize = "14px";
        list.classList.toggle("hide");
        greenArrow.classList.toggle("rotate");
      };
    });
  });

  // оновлення інфо в спеціалізації лікаря
  const selectDisease = document.querySelector(".choose-disease");
  const diseasePlaceholder = document.querySelector("#disease-placeholder");
  const diseaseOptions = document.querySelectorAll(".disease__options p");

  diseaseOptions.forEach((option) => {
    option.addEventListener("click", function () {
      selectDisease.textContent = this.textContent;
      updateDisease();
    });
  });

  function updateDisease() {
    const disease = selectDisease.textContent;
    diseasePlaceholder.textContent = disease;
  }
  updateDisease();

  // функціонал кнопок view more
  const viewMoreBtns = document.querySelectorAll(".view-more__text");

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

  const readMore = document.querySelectorAll(".read-more");

  readMore.forEach((btn) => {
    btn.addEventListener("click", function () {
      const readMoreText = btn.previousElementSibling;
      const swiper = document.querySelector(".swiper");

      console.log("Button clicked:", btn);
      console.log("Previous sibling:", readMoreText);

      if (readMoreText.classList.contains("hidden-text")) {
        readMoreText.classList.remove("hidden-text");
        readMoreText.classList.add("visible-text");
        this.innerHTML = "Read less";
        swiper.style.height = "100%";
      } else {
        readMoreText.classList.remove("visible-text");
        readMoreText.classList.add("hidden-text");
        this.innerHTML = "Read more";
        swiper.style.height = "426px";
      }
    });
  });

  //Swiper
  const swiperReviews = new Swiper(".swiper", {
    // Optional parameters
    spaceBetween: 32,
    loop: true,
    grabCursor: true,
    centeredSlides: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
});
