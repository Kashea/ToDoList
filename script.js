const form = document.querySelector("form");
const input = document.querySelector("input");
const memo = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const liNumber = document.querySelectorAll("ul li").length;

  if (liNumber < 11) {
    ToDo();
    input.value = "";
  } else {
    alert("Maximum number reached");
  }
});

function ToDo() {
  if (input.value == "") {
    alert("please write");
  } else {
    const value = input.value;
    const newList = document.createElement("li");
    newList.textContent = value;
    memo.append(newList);
    const deleteBtn = document.createElement("button");
    newList.append(" ", " ", deleteBtn);
    deleteBtn.textContent = "DELETE";
  }
}

memo.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    e.target.closest("LI").remove();
  }
});
