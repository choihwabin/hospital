document.querySelectorAll(".sub_menu > a").forEach(menu => {
  menu.addEventListener("click", function (event) {
      event.preventDefault(); // 링크 기본 동작 방지

      let submenu = this.nextElementSibling;
      let icon = this.querySelector("i");

      // 현재 클릭한 서브메뉴 토글
      if (submenu.style.display === "block") {
          submenu.style.display = "none";
          icon.classList.remove("rotate");
      } else {
          // 모든 서브메뉴 닫기 (하나만 열리도록 설정)
          document.querySelectorAll(".sub").forEach(sub => sub.style.display = "none");
          document.querySelectorAll(".sub_menu i").forEach(i => i.classList.remove("rotate"));

          submenu.style.display = "block";
          icon.classList.add("rotate");
      }
  });
});