"use strict";

const isChecked = false,
      isClosed = false;

console.log(isChecked || !isClosed);



// home page
const sayAboutTruck = () => {
  return alert("This is my LEGO Super-Truck!!Wow!");
}

function sayHello() {
  alert("Hello Gringo");
}

//about page
function showUser() {
  let gretUser = document.getElementById("gUname");
  let gretEmail = document.getElementById("gEmail");
  let username = document.getElementById("uname");
  let email = document.getElementById("em");
  if(username.value === "") {
    gretUser.textContent = "Please fill all the fields";
    gretEmail.textContent = "";
    username.className="wrong-input";
    setTimeout(() => username.classList.remove("wrong-input"), 500);
  }
  if(email.value === "") {
    gretUser.textContent = "Please fill all the fields";
    gretEmail.textContent = "";
    email.className="wrong-input";
    setTimeout(() => email.classList.remove("wrong-input"), 500);
  }
  if (username.value !== "" && email.value !== "") {
    let conf = confirm("Want to login?");
    if (conf) {
      gretUser.textContent = `Wellcome ${username.value}!`;
      gretEmail.textContent = `Please check your ${email.value}`;
    } else {
      gretUser.textContent = "";
      gretEmail.textContent = "";
    }
    document.getElementById("uname").value = "";
    document.getElementById("em").value = "";
  } 
}

// gallery page
function showItem(a, b) {
  const output = document.getElementById('out');
  const title = document.getElementById('galH');
  output.src = a;
  title.textContent = b;
}


// stories page
function changePageStoriesTitle() {
  let newTitle = prompt("Please Enter New Title");
  document.getElementById("tit").textContent = newTitle;
}