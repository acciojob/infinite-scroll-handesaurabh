//your code here!
const list = document.getElementById("infi-list");
let itemCount = 10;

for (let i = 1; i <= itemCount; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);
}

function addMoreItems() {
  for (let i = 1; i <= 2; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    list.appendChild(li);
  }
}

list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addMoreItems();
  }
});
