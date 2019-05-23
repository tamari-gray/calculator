var temp = '';
var entries = [];
var total = 0;

var buttons = document.getElementsByClassName('box');
var input = document.getElementById('hi');

for (let i = 0; i < buttons.length; i++) {
  const val = buttons[i].innerHTML;
  buttons[i].addEventListener("click", function(){ calc(val)})
}

function calc(button){
  console.log(button);

  if (!isNaN(button) || button === ".") {
    console.log('is a number')
    temp += button;
    input.value = temp;
  }else if (button === "AC") {
    entries = [];
    temp = '';
    total = 0;
    input.value = '';
  }else if (button === "CE"){
    temp = "";
    input.value = "";
  }else if (button === "/"){
    //hmmmmm
  }
}




