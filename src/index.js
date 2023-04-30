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
  const textarea = document.createElement('section');
  const info = document.createElement('p');

  mainContainer.classList.add('container');
  keysContainer.classList.add('keyboard-container');
  textarea.classList.add('textarea');
  info.classList.add('info');
  info.textContent = 'Shift + Ctrl - переключение между языками';

  keysContainer.append(...elements);

  mainContainer.append(textarea, keysContainer, info);
  document.body.prepend(mainContainer);
}

init();

const createEl = (el) => `<span class="letter">${el}</span>`;

function onButtonPress(event) {
  event.preventDefault();
  const textView = document.querySelector('.textarea');

  if (event.target.dataset.action) {
    const letter = createEl(event.target.textContent);
    textView.insertAdjacentHTML('beforeend', letter);
  }
}
window.addEventListener('click', onButtonPress);
