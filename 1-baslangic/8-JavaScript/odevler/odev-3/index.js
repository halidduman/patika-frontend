let allCategory = menu.map((item) => item.category);
let categories = [...new Set(allCategory)];
categories.unshift("All");

let btnDOM = document.querySelector(".btn-container");
for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  btnDOM.innerHTML += `<button onclick="btnClick('${category}')" class = 'btn btn-container btn-item btn-outline-dark'>
    ${category} </button>`;
}

showMenu(menu);

function showMenu(menu) {
  let sectionDOM = document.querySelector(".section-center");
  sectionDOM.innerHTML = "";
  for (let i = 0; i < menu.length; i++) {
    const item = menu[i];
    sectionDOM.innerHTML += `
    <div class="menu-items col-sm-6">
    <img
      src="${item.img}"
      alt="${item.title}"
      title="${item.title}"
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4>${item.price}</h4>
      </div>
      <div class="menu-text">${item.desc}</div>
    </div>
  </div>
    `;
  }
}

function btnClick(category) {
  let result = menu;
  if (category !== "All") {
    result = menu.filter((item) => {
      return item.category == category;
    });
  }
  showMenu(result);
}