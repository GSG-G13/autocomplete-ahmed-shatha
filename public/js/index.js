const searchInput = document.querySelector("input");
const submit = document.querySelector("form button");
const results = document.querySelector(".results");
const btnClose = document.querySelector(".upmodal button");


btnClose.addEventListener("click", () => {
  document.querySelector(".upmodal").removeAttribute("show");
});

