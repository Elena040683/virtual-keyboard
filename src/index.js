const keyboardRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift', 'Control', 'Meta', 'Alt', '&nbsp', 'Alt', 'Control', '←', '↓', '→'];

const keyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', '&nbsp', 'Alt', 'Control', '←', '↓', '→'];

const keyboardCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const keyboard = [];

function objCreation() {
  keyboardCode.forEach((item, index) => {
    keyboard[index] = {
      code: item,
      keyRu: keyboardRu[index],
      keyEn: keyboardEn[index],
    };
  });
}

objCreation();

const elements = keyboardCode.map((el, index) => {
  const button = document.createElement('button');
  button.classList.add('keyboard-key');
  button.setAttribute('data-action', keyboard[index].code);
  button.type = 'button';
  button.textContent = keyboard[index].keyRu;
  return button;
});

function init() {
  const mainContainer = document.createElement('div');
  const keysContainer = document.createElement('section');
  const textarea = document.createElement('textarea');
  const info = document.createElement('p');

  mainContainer.classList.add('container');
  keysContainer.classList.add('keyboard-container');
  textarea.classList.add('textarea');
  info.classList.add('info');
  info.textContent = 'Shift - переключение между языками';

  keysContainer.append(...elements);

  mainContainer.append(textarea, keysContainer, info);
  document.body.prepend(mainContainer);
}

init();

const shift = document.querySelector('[data-action="ShiftRight"]');
// const ctrl = document.querySelector('[data-action="ControlLeft"]');
shift.addEventListener('click', (event) => {
  if (event.target.dataset.action === 'ShiftLeft' && event.target.dataset.action === 'ControlLeft') {
    for (let i = 0; i < keyboard.length; i += 1) {
      const arr = document.querySelectorAll('.keyboard-key');
      arr[i].innerHTML = keyboard[i].keyRu;
    }
  } else {
    for (let j = 0; j < keyboard.length; j += 1) {
      const arr1 = document.querySelectorAll('.keyboard-key');
      arr1[j].innerHTML = keyboard[j].keyEn;
    }
  }
});

function onButtonClick(event) {
  event.preventDefault();
  const textView = document.querySelector('.textarea');
  event.target.classList.add('active');

  if (event.target.dataset.action === 'Backspace' || event.target.dataset.action === 'Delete' || event.target.dataset.action === 'ShiftRight') {
    textView.focus();
    textView.value = textView.value.substring(0, textView.value.length - 1);
  } else if (event.target.dataset.action === 'Enter') {
    textView.focus();
    textView.value += '\n';
  } else if (event.target.dataset.action) {
    const letter = event.target.textContent;
    textView.insertAdjacentHTML('beforeend', letter);
  }

  if (event.target.dataset.action === 'ShiftLeft' && event.target.dataset.action === 'ControlLeft') {
    for (let i = 0; i < keyboard.length; i += 1) {
      const arr = document.querySelectorAll('.keyboard-key');
      arr[i].innerHTML = keyboard[i].keyRu;
    }
  } else {
    for (let j = 0; j < keyboard.length; j += 1) {
      const arr1 = document.querySelectorAll('.keyboard-key');
      arr1[j].innerHTML = keyboard[j].keyEn;
    }
  }
}
window.addEventListener('click', onButtonClick);

function onButtonPress(event) {
  event.preventDefault();
  const textView = document.querySelector('.textarea');
  textView.focus();

  document.querySelector(`.keyboard-key[data-action="${event.code}"]`).classList.add('active');

  if (event.code === 'Backspace' || event.code === 'Delete' || event.code === 'ShiftRight') {
    textView.focus();
    textView.value = textView.value.substring(0, textView.value.length - 1);
  } else if (event.code === 'Enter') {
    textView.focus();
    textView.value += '\n';
  } else if (event.code) {
    const letter = event.key;
    textView.insertAdjacentHTML('beforeend', letter);
  }
}

window.addEventListener('keydown', onButtonPress);
