const createCalculator = () => {
  initializeApp();
  const screen = setupDisplayScreen();
  const buttons = setupButtonsContainer();

  const keys = [
    "d%",
    "dx",
    "del",
    "AC",
    "d4",
    "d6",
    "d8",
    "÷",
    "d10",
    "d12",
    "d20",
    "x",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "Enter",
    "0",
    "(",
    ")",
  ];
  addCalculatorKeys(keys, buttons);

  const app = document.querySelector(".app");
  app.append(screen, buttons);
};

const state = {
  equation: null,
  currentState: "0",
  prevState: "0",
  lastKey: null,
};

const operationKeys = ["÷", "x", "-", "+", "Enter"];
const diceKeys = ["d%", "dx", "d4", "d6", "d8", "d10", "d12", "d20"];

const initializeApp = () => {
  const body = document.querySelector(".h-full");
  body.style.backgroundColor = "grey"

  const header = document.createElement("h1");
  header.id = "site-name";
  header.innerText = "The App Counter!!";
  body.append(header);

  const main = document.createElement("div");
  main.className = "main";
  body.append(main);

  const app = document.createElement("div");
  app.className = "app";
  app.id = "app-calculator";
  main.append(app);
};

const setupDisplayScreen = () => {
  const screen = document.createElement("div");
  screen.setAttribute("id", "display-screen");

  const numberDisplay = document.createElement("p");
  numberDisplay.setAttribute("id", "number-display");
  numberDisplay.innerText = state.currentState;

  screen.append(numberDisplay);
  return screen;
};

const setupButtonsContainer = () => {
  const buttons = document.createElement("div");
  buttons.setAttribute("id", "keys-container");
  return buttons;
};

const addCalculatorKeys = (keys, buttonsContainer) => {
  keys.forEach((key) => {
    const button = createKey(key);
    buttonsContainer.append(button);
  });
};

const createKey = (key) => {
  const button = document.createElement("button");
  button.classList.add("calculator-keys", `key-${key}`);
  button.setAttribute("value", key);

  if (diceKeys.includes(key)) {
    button.classList.add("dice-keys");
  } else if (key === "del" || key === "AC") {
    button.classList.add("red-keys");
  } else if (["÷", "x", "-", "+"].includes(key)) {
    button.classList.add("function-keys");
  } else if (["(", ")"].includes(key)) {
    button.classList.add("parenthesis-keys");
  } else if (!isNaN(key)) {
    button.classList.add("number-keys");
  } else if (key === "Enter") {
    button.classList.add("enter-key");
    button.style.gridRow = "span 2";

    const img = document.createElement("img");
    img.setAttribute("alt", "d20");
    img.setAttribute("id", "dice");
    img.setAttribute("src", "./images/apps/dice.png");
    button.append(img);
  }

  if (key === "Enter") {
    button.addEventListener("click", (event) => {
      handleLogic();
    });
  } else {
    button.innerText = key;
    button.addEventListener("click", (event) => {
      handleDisplay(event.target.value);
    });
  }

  return button;
};

const isValid = (key) => {
  if (diceKeys.includes(key)) {
    if (diceKeys.includes(state.lastKey)) {
      return false;
    }
  }

  if (operationKeys.includes(key)) {
    if (state.currentState === "0" || operationKeys.includes(state.lastKey)) {
      return false;
    }
  }

  if (!isNaN(key)) {
    if (diceKeys.includes(state.lastKey)) {
      return false;
    }
  }
  return true;
};

const resetCalc = () => {
  state.prevState = "0";
  state.currentState = "0";
  state.lastKey = null;
};

const deletePrev = () => {
  state.currentState = state.prevState;
  if (state.currentState === "0") {
    state.lastKey = null;
  }
};

const rollDice = (diceNotation) => {
  let total = 0;
  const [multiplierStr, diceSizeStr] = diceNotation.split("d");
  const multiplier = Number(multiplierStr);
  const diceSize = Number(diceSizeStr);

  for (let i = 0; i < multiplier; i++) {
    total += Math.floor(Math.random() * diceSize) + 1;
  }

  return total;
};

const handleDisplay = (key) => {
  if (!isValid(key)) return;

  if (key === "AC") {
    resetCalc();
  } else if (key === "del") {
    deletePrev();
  } else {
    // want to set last key here, but doing so will effect the key in the if else below

    if (isNaN(state.lastKey) || state.currentState === "0") {
      state.lastKey = key;
      if (diceKeys.includes(key)) {
        key = `1${key}`;
      }
    } else {
      state.lastKey = key;
    }

    state.prevState = state.currentState;
    if (state.currentState === "0") {
      state.currentState = key;
    } else {
      state.currentState += key;
    }
  }

  let displayNumber = document.querySelector("#number-display");
  displayNumber.innerText = state.currentState;
};

const handleLogic = () => {
  let equation = state.currentState;
  equation = equation.replace(/x/g, "*");
  equation = equation.replace(/÷/g, "/");
  equation = equation.replace(/(\d*)d(\d+)/g, (match) => rollDice(match));

  let displayNumber = document.querySelector("#number-display");
  displayNumber.innerText = Math.floor(eval(equation));
  resetCalc();
};

export default createCalculator;