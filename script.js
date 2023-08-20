const inputNum = document.querySelectorAll('#inp_num');
const buttons = document.querySelectorAll('#button');
const output = document.querySelector('.output');

inputNum.forEach((input) => {
  input.addEventListener('keydown', (e) => {
    if (isNaN(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  });
});

buttons.forEach((button) => {
  if (button.value === 'Сложить') {
    button.addEventListener(
      'click',
      (e) => (output.textContent = +inputNum[0].value + +inputNum[1].value)
    );
  }

  if (button.value === 'Вычесть') {
    button.addEventListener(
      'click',
      (e) => (output.textContent = +inputNum[0].value - +inputNum[1].value)
    );
  }

  if (button.value === 'Умножить') {
    button.addEventListener(
      'click',
      (e) => (output.textContent = +inputNum[0].value * +inputNum[1].value)
    );
  }

  if (button.value === 'Разделить') {
    button.addEventListener(
      'click',
      (e) => (output.textContent = +inputNum[0].value / +inputNum[1].value)
    );
  }

  if (button.value === 'Сбросить') {
    button.addEventListener('click', (e) => (output.textContent = 0));
  }
});
