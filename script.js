function numberate(a, operator, b) {
  if (operator == 'add') return a + b;
  if (operator == 'multiply') return a * b;
  if (operator == 'minus') return a - b;
  if (operator == 'divide') return a / b;
}


let buttons = document.querySelectorAll('button');
buttons.forEach((e) => {
  e.addEventListener('click', () => {
    console.log(e.textContent);
  })
})



