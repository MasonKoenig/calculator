let operator = '';
let previousValue = '';
let currentValue = '';

const buttons = document.querySelectorAll('Button');
const equation = document.querySelector('.equation');
const output = document.querySelector('.output');

function clear() {
  operator = '';
  previousValue = '';
  currentValue = '';
  updateDisplay();
}

function del() {
  operator = '';
  currentValue = '';
  updateDisplay();
}

function updateDisplay() {
  // equation.textContent = currentValue;
  // output.textContent = previousValue;
  let upper = `${previousValue} ${operator} ${currentValue}`;
  if (upper.length <= 30) return (equation.textContent = upper);
  if (upper.length > 30) return (equation.textContent = upper.substring(0, 30));
  let lower = previousValue;
  if (lower.length <= 14) return (output.textContent = lower);
  if (lower.length > 14) return (output.textContent = lower.toExponential(10));
}

function logNum(value) {
  currentValue += value;
  updateDisplay();
}

function logDecimal() {
  if (currentValue.includes('.') == false) return (currentValue += '.');
}

function add() {
  if (operator == '') {
    previousValue = currentValue;
    currentValue = '';
    operator = '+';
    updateDisplay();
  } else {
    previousValue = previousValue + currentValue;
    updateDisplay();
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.className == 'clear') return clear();
    if (button.className == 'delete') return del();
    if (button.className == 'num') return logNum(button.textContent);
    if (button.id == 'decimal') return logDecimal();
    if (button.id == 'plus') return add();
  });
});
