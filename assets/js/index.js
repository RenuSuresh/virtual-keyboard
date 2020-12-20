console.log("welcome to the js file");
var input = document.getElementById("inputText");
let bool = false;

const keyboardHandler = (event) => {
  const caretPositon = getCaretPositon();
  const targetValue = event.target.innerText;
  let array = input.value.split("");
  let a;

  switch (targetValue) {
    case "Back":
      array.splice(caretPositon - 1, 1);
      a = array.join("");
      input.value = a;
      break;
    case "CapsLock":
      toggleCaps();
      break;
    case "Shift":
      toggleShift();
      break;
    case "Space":
      array.splice(caretPositon, 0, " ");
      a = array.join("");
      input.value = a;
      break;
    default:
      array.splice(caretPositon, 0, event.target.innerText);
      a = array.join("");
      input.value = a;
      if (bool) {
        bool = false;
        toggleCaps();
      }
  }
};

function getCaretPositon() {
  return input.selectionStart;
}

const isUpperCase = (string) => /^[A-Z]*$/.test(string);

const toggleCaps = () => {
  let keyboardKeys = document.getElementsByTagName("div");
  for (let i = 13; i < keyboardKeys.length; i++) {
    const innerElText = keyboardKeys[i].innerText;
    const innerTextLength = innerElText.length;

    if (innerTextLength == 1 && isUpperCase(innerElText)) {
      keyboardKeys[i].innerText = innerElText.toLowerCase();
    } else if (innerTextLength == 1) {
      keyboardKeys[i].innerText = keyboardKeys[i].innerText.toUpperCase();
    }
  }
};

const toggleShift = () => {
  toggleCaps();
  bool = true;
};
