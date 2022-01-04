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
  if (previousValue === '') {
    output.textContent = currentValue;
  } else if (currentValue === '') {
    output.textContent = previousValue;
  } else output.textContent = currentValue;
}

function logNum(value) {
  currentValue += value;
  updateDisplay();
}

function logDecimal() {
  if (currentValue.includes('.') == false) return (currentValue += '.');
}

function add(a, b) {
  return (currentValue = Number(a) + Number(b));
}

function subtract(a, b) {
  return (currentValue = Number(a) - Number(b));
}

function multiply(a, b) {
  return (currentValue = Number(a) * Number(b));
}

function divide(a, b) {
  return (currentValue = Number(a) / Number(b));
}

function operate(op, a, b) {
  if (op === '+') add(a, b);
  if (op === '-') subtract(a, b);
  if (op === '*') multiply(a, b);
  if (op === '/') divide(a, b);
}

function storeNum() {
  previousValue = String(currentValue);
  currentValue = '';
}

function storeOperator(op) {
  if (operator === '' && previousValue === '') {
    operator = op;
    storeNum();
    updateDisplay();
  } else if (currentValue !== '' && operator !== '' && currentValue !== '') {
    operate(op, previousValue, currentValue);
    storeNum();
    operator = op;
    updateDisplay();
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.className === 'clear') clear();
    if (button.className === 'delete') del();
    if (button.className === 'num') logNum(button.textContent);
    if (button.id === 'decimal') logDecimal();
    if (button.id === 'equals') {
      operate(operator, previousValue, currentValue);
      operator = '';
      previousValue = currentValue;
      currentValue = '';
      updateDisplay();
    }
    if (button.id === 'plus') {
      storeOperator('+');
    }
    if (button.id === 'minus') {
      storeOperator('-');
    }
    if (button.id === 'times') {
      storeOperator('*');
    }
    if (button.id === 'divide') {
      storeOperator('/');
    }
    console.log(previousValue, operator, currentValue);
  });
});
