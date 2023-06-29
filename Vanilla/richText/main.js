import './style.css'



let optionsButtons = document.querySelectorAll(".option-button");
let moreOptionsButton = document.getElementById("moreOptions");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let linkButton = document.getElementById("createLink");
let foreColorLabel = document.getElementById("foreColorLabel");
let backColorLabel = document.getElementById("backColorLabel");

console.log("hello", moreOptionsButton)
//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];
//Initial Settings
const initializer = () => {
  //function calls for highlighting buttons
  //create options for font names
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  //default size
  fontSizeRef.value = 3;
};
//main logic

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.execCommand(button.id, false, null);
    console.log(button.className, button.id, document.queryCommandState(button.id))
    if (button.className === 'option-button perm format' && document.queryCommandState(button.id)) {
      button.style.backgroundColor = "#f3e0b0";
    } else {
      button.style.backgroundColor = ""; // Reset background color if command state is false
    }
  });
});
//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    document.execCommand(button.id, false, button.value);
  });
});
//link
const regex = new RegExp('^(https?|ftp)://[^\s/$.?#].[^\s]*$')
const regBack = new RegExp('^[^\s/$.?#].[^\s]*$')

linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  //if link has http then pass directly else add https
  if (regex.test(userLink)) {
    document.execCommand(linkButton.id, false, userLink);
  } else {
    if (regBack.test(userLink)) {
      userLink = "http://" + userLink;
      document.execCommand(linkButton.id, false, userLink);
    } else {
      alert("Invalid URL");
    }
  }
});

moreOptionsButton.addEventListener("click", () => {
  advancedOptionButton.forEach((button) => {
    if (button.style.display === "none") {
      button.style.display = "block";
      foreColorLabel.style.display = "block";
      backColorLabel.style.display = "block";

    }
    else { button.style.display = "none";
    foreColorLabel.style.display = "none";
    backColorLabel.style.display = "none"; }
  })
})

window.onload = initializer();
