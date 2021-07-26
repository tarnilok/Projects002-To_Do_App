// provides to enter the day which is today

const day = new Date();
const today = day.getDay();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.querySelector("span").innerHTML = days[today];

const addtodo = document.getElementById("plus");

addtodo.addEventListener("click", () => {
  const todo = document.getElementById("additem").value; // we gets the value inside the input after clicked the plus item.

  if (todo != "") {
    //firstly we create the elements we will need
    const newinput2 = document.createElement("input");
    var newinput1 = document.createElement("input");
    
    const newinput3 = document.createElement("i");
    const newinput4 = document.createElement("div");

    //secondly we set Attributes according to names in css we designed before
    newinput2.setAttribute("type", "checkbox");
    newinput2.setAttribute("name", "checkbox");
    newinput2.setAttribute("id", `checkbox`);
    newinput1.setAttribute("type", "text");
    newinput1.setAttribute("id", "task");
    newinput1.setAttribute("value", todo); // we added the task written by the user in input to the new input
    newinput3.setAttribute("class", "fas fa-trash");
    newinput3.setAttribute("id", `trash`);
    newinput4.setAttribute("id", "container3");

    //thirdly we append the elements to the container3
    const taskstack = document.getElementById("container2");
    newinput4.appendChild(newinput1);
    newinput4.appendChild(newinput2);
    newinput4.appendChild(newinput3);
    taskstack.appendChild(newinput4);
  }

  document.getElementById("additem").value = ""; // cleans add-task screen after every attempt

  //when a checkbox is clicked, its opacity, text-decoration and transform changes. It will be also read-only.
  const checked = document.querySelectorAll("#checkbox");
  const taskstacklist = document.querySelectorAll("#task");
  for (let i = 0; i < checked.length; i++) {
    checked[i].addEventListener("click", () => {
      checked[i].parentElement.classList.toggle("done");
      newinput1.setAttribute("readonly", "readonly");
    });
  }

  //when a trash is clicked, it is removed from the screen...
  const trashclick = document.querySelectorAll("#trash");
  for (i = 0; i < trashclick.length; i++) {
    trashclick[i].onclick = function () {
      var div = this.parentElement;
      div.style.transform = "rotateX(90deg)";
      div.style.transition = "transform 0.5s";
      div.addEventListener("transitionend", function () {
        div.remove();
      });
    };
  }
});
