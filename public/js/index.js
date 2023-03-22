const apiUrl = "https://www.googleapis.com/books/v1/volumes/";
const searchInput = document.querySelector("input");
const submit = document.querySelector("form button");
const results = document.querySelector(".results");

const getSearchResults = (data) => {
  results.textContent = "";
  data.forEach((e) => {
    const card = document.createElement("div");
    const title = document.createElement("p");
    const btn = document.createElement("button");
    const icon = document.createElement("i");

    btn.addEventListener("click", () =>
      fetch(`${apiUrl}${e.id}`, renderDetails)
    );

    results.classList = "results";
    card.classList = "card";
    card.id = e.id;
    icon.classList = "fa-solid fa-thumbs-up";

    title.textContent = e.title;

    results.appendChild(card);
    card.appendChild(title);
    card.appendChild(btn);
    btn.appendChild(icon);
  });
};

const renderDetails = ({ volumeInfo }) => {
  const {
    title,
    authors,
    imageLinks: { medium: img },
    description,
    publishedDate,
    publisher,
  } = volumeInfo;

  document.querySelector(".modal img").src = img;
  document.querySelector(".modal-title").innerText = title;
  document.querySelector(".modal-author").innerText = authors.join(" & ");
  document.querySelector(".modal-description span").innerHTML = description;
  document.querySelector(
    ".modal-date span"
  ).innerText = `${publishedDate}, ${publisher}`;

  document.querySelector(".upmodal").setAttribute("show", "");
};

const addEventListeners = () => {
  btnClose.addEventListener("click", () => {
    document.querySelector(".upmodal").removeAttribute("show");
  });

  searchInput.addEventListener("input", () => {
    fetch(`/search/${searchInput.value}`, getSearchResults);
  });
};

addEventListeners();
