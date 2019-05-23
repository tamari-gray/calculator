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
  // console.log(button);


  if (!isNaN(button) || button === ".") {
    // console.log('is a number')
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
    entries.push(temp);
    entries.push('/');
    PrevBtn = '/';
    temp = '';
  }else if (button === "x"){
    entries.push(temp);
    entries.push('x');
    temp = '';
  }else if (button === "+"){
    entries.push(temp);
    entries.push('+');
    temp = '';
  }else if (button === "-"){
    entries.push(temp);
    entries.push('-');
    temp = '';
  }else if (button === "="){
    console.log('hi')
    entries.push(temp);
    input.value = entries

    let firstNumber = entries[0];
    let symbol = entries[1];
    let secondNumber = entries[2];

    if (symbol === '-') {
      total = firstNumber - secondNumber;
    }else if (symbol === '+') {
      total = firstNumber + secondNumber;
    }else if (symbol === '/') {
      total = firstNumber / secondNumber;
    }else if (symbol === 'x') {
      total = firstNumber * secondNumber;
    }

    input.value = total;

    entries = [];
    temp = '';
    
  }
}




