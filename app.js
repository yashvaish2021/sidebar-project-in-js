const sidebarToggleBtn = window.document.querySelector(".sidebar-toggle");

const closeButton = window.document.querySelector(".close-btn");

const sidebar = window.document.querySelector(".sidebar");

closeButton.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

sidebarToggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
