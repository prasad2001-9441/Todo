var bList = [];
var position = "None";
window.onload = function () {
  if (localStorage.getItem("jList") != null) {
    bList = JSON.parse(localStorage.getItem("jList"));
    display();
  }
};
function addtolist(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    var inp = document.getElementById("input");
    if (!inp.value) {
      alert("Enter a valid task");
    } else if (position != "None") {
      bList[position] = inp.value;
      inp.value = "";
      position = "None"
      display();
    } else if (position === "None") {
      bList.push(inp.value);
      if (localStorage.getItem("jList") == null) {
        localStorage.setItem("jList", JSON.stringify(bList));
      } else {
        localStorage.setItem("jList", JSON.stringify(bList));
      }
      inp.value = "";
      display();
    }
  }
}
function display() {
  document.querySelector("#newtasklist").innerHTML = "";
  for (var i = 0; i < bList.length; i++) {
    document.querySelector("#newtasklist").innerHTML += `<li class="actions">
    <span>${bList[i]}</span>
    <i>
    <i class="fa-solid fa-pencil fa-sm" onClick="edit(${i})" width="18" height="8"></i>
    <i class="fa-solid fa-xmark" onClick="remove(${i})"  width="18" height="12"> </i>
    <input class="checkbox" type="checkbox" onClick="tick(${i})"  width="18" height="12"/>
    </i>
  </li>`;
  }
}
function tick(index) {
  if (bList[index].includes("<del>")) {
    bList[index] = bList[index].replace("<del>", "");
    bList[index] = bList[index].replace("</del>", "");
  } else {
    bList[index] = "<del>" + bList[index] + "</del>";
  }
  if (localStorage.getItem("jList") == null) {
    localStorage.setItem("jList", JSON.stringify(bList));
  } else {
    localStorage.setItem("jList", JSON.stringify(bList));
  }
  display();
}
function remove(index) {
  bList.splice(index, 1);
  if (localStorage.getItem("jList") == null) {
    localStorage.setItem("jList", JSON.stringify(bList));
  } else {
    localStorage.setItem("jList", JSON.stringify(bList));
  }
  display();
}
function edit(index) {
  position = index;
  var sanji = document.getElementById("input");
  if (bList[index].includes("<del>")) {
    bList[index] = bList[index].replace("<del>", "");
    bList[index] = bList[index].replace("</del>", "");
  }
  sanji.value = bList[index];
}
display();
