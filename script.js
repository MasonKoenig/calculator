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
  if (currentValue.includes('.') === false) currentValue += '.';
}

function setNegative() {
  if (currentValue !== '') {
    if (currentValue.includes('-') === false)
      currentValue = -1 * Number(currentValue);
  }
  if (currentValue === '') {
    previousValue = -1 * Number(previousValue);
  }
  updateDisplay();
}

function add(a, b) {
  currentValue = Number(a) + Number(b);
}

function subtract(a, b) {
  currentValue = Number(a) - Number(b);
}

function multiply(a, b) {
  currentValue = Number(a) * Number(b);
}

function divide(a, b) {
  if (b === '0') {
    currentValue = 'Not funny';
    operator = '';
    previousValue = '';
  } else {
    currentValue = Number(a) / Number(b);
  }
}

function operate(op, a, b) {
  if (op === '+') add(a, b);
  if (op === '-') subtract(a, b);
  if (op === '*') multiply(a, b);
  if (op === '/') divide(a, b);
  updateDisplay();
}

function storeNum() {
  previousValue = String(currentValue);
  currentValue = '';
  updateDisplay();
}

function storeOperator(op) {
  if (previousValue === '' && operator === '' && currentValue !== '') {
    operator = op;
    storeNum();
  } else if (previousValue !== '' && operator !== '' && currentValue !== '') {
    operate(operator, previousValue, currentValue);
    operator = op;
    storeNum();
  } else if (previousValue !== '' && operator === '' && currentValue !== '') {
    storeNum();
    operator = op;
  } else if (previousValue !== '' && operator === '' && currentValue === '') {
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
    if (button.id === 'negative') {
      setNegative();
    }
    console.log(previousValue, operator, currentValue);
  });
});
