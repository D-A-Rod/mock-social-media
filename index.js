let dataBase = [
  {
    username: "Andrei",
    password: "password",
  },

  {
    username: "Dan",
    password: "777",
  },

  {
    username: "Ingrid",
    password: "secrete",
  },
];

let newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from learning",
  },

  {
    username: "sally",
    timeline: "JavaScript is super cool",
  },

  {
    username: "Mitch",
    timeline: "JavaScript is pretty cool",
  },
];

let userNamePromt = prompt("whats your username?");
let passwordPrompt = prompt("whats your password?");

function isUserValid(username, password) {
  for (let i = 0; i < dataBase.length; i++) {
    if (
      dataBase[i].username === username &&
      dataBase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(userName, password) {
  console.log(isUserValid(userName, password));
  if (isUserValid(userName, password)) {
    console.log(newsFeed);
  } else {
    alert("sorry wrong username");
  }
}

signIn(userNamePromt, passwordPrompt);
