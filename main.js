import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

function getData(url, usernamex) {
  console.log(usernamex);

  url = "http://localhost:3000/account";
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      const filteredData = data.filter((item) => item.username === usernamex);
      console.log("match", filteredData);
      if (filteredData) {
        window.location.href = "/mainpage";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function postData(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function validations(match) {
  var form = document.getElementById("form");
  var error = [];
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == "") {
      error.push("Please check if your username and password are filled");
    } else if (username !== "" && password == "") {
      error.push("Please enter a password");
    } else {
      error = [];
      let url = "http://localhost:3000/account";
      let usernamex = username;
      getData(url, usernamex);
      if (match === usernamex) {
        route === "/mainpage";
      }
    }
    var message = (document.getElementById("message").innerHTML = error);
  });
}
function validationsregis() {
  var form = document.getElementById("formregis");
  var error = [];
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == "") {
      error.push("Please check if your username and password are filled");
    } else if (username !== "" && password == "") {
      error.push("Please enter a password");
    } else {
      error = [];
      const data = {
        username: username,
        password: password,
      };

      const url = "http://localhost:3000/account";
      postData(url, data);
    }
    var message = (document.getElementById("message").innerHTML = error);
  });
}
let route = window.location.pathname;
if (route === "/") {
  let landingpage = `      <div class="container" id="containerController">
  <div class="UpperContainer">Hello, Welcome to my Pokemon App</div>
  <div class="BellowContainer">
    <!-- <form action="" method="post" id="form" class="loginForm">
      <div class="message" id="message"></div>
      <label for="">User:</label>
        <input type="text" placeholder="" id="username">
        <label for="">Password: </label>
        <input type="password" placeholder=" " id="password">
        <button type="submit" class="submitbtn">submit </button>
    </form> -->
    <div class="loginButton">
      <a href="/login" onclick="route()"> Login </a>
    </div>

    <div class="RegisterButton">
      <a href="/register" onclick="route()"> Register </a>
    </div>
  </div>
</div>
  `;
  document.getElementById("containerController").innerHTML = landingpage;
} else if (route === "/login") {
  let formsubmit = ` <form action="" method="post" id="form" class="loginForm">
  <div class="message" id="message"></div>
  <label for="">User:</label>
    <input type="text" placeholder="" id="username">
    <label for="">Password: </label>
    <input type="password" placeholder=" " id="password">
    <div style="display: flex, gap: 20px">
       <button type="submit" class="submitbtn">Submit </button>
    <button type="submit" class="submitbtn"> <a href="/register" onclick="route()"> Register </a></button>
    </div>
 
</form>`;

  let checkvar = (document.getElementById("containerController").innerHTML =
    formsubmit);
  if (checkvar) {
    validations();
  }
} else if (route === "/register") {
  let formregis = ` <form  method="post" id="formregis"  class="loginForm">
  <div class="message" id="message"></div>
  <label for="">User:</label>
    <input type="text" placeholder="" id="username">
    <label for="">Password: </label>
    <input type="password" placeholder=" " id="password">

    <div style="display: flex, gap: 20px">
       <button type="submit" class="submitbtn">Register </button>
   
    </div>
 
</form>`;

  let checkregis = (document.getElementById("containerController").innerHTML =
    formregis);
  if (checkregis) {
    validationsregis();
  }
} else if (route === "/mainpage") {
  console.log("youre in the main page");
  window.location.href = "/mainPage.html";
}
