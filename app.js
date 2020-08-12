//  !!!
//  Доделать, не выполняет операции с полученныит ответами.
// Complete! Does not perform operations on the received responses.

const screen = document.querySelector(".screen"),
  container = document.querySelector(".container"),
  clear = document.querySelector(".clearValue"),
  buttons = document.querySelector(".buttons"),
  plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  division = document.getElementById("division"),
  multiply = document.getElementById("multiply"),
  dot = document.querySelector(".dot"),
  equal = document.getElementById("equal");

// dot plus equal minus multiply division
screen.textContent = "0";
const state = {
  operator: "",
  result: 0,
  currentNumber: [],
  operandsArray: [],
  clearState(){
    this.operator = '',
    this.currentNumber = [],
    this.operandsArray = []
  }
};

const restartCalculator = ()=> {
  state.clearState();
  state.result = 0
  screen.textContent = state.result;
}

const setState = (operator) => {
  state.operandsArray.push(Number(state.currentNumber.join("")));
  screen.textContent = "";
  state.currentNumber = [];
  state.operator = operator;
};

const printSetCurrentNumber = (e)=> {
  (e.target.id === "1" || e.target.id === "2" ||
  e.target.id === "3" || e.target.id === "4" ||
  e.target.id === "5" || e.target.id === "6" ||
  e.target.id === "7" || e.target.id === "8" ||
  e.target.id === "9" || e.target.id === "0")
   ? state.currentNumber.push(e.target.id) 
   + (screen.textContent = state.currentNumber.join("")) : null;
}

const printResult = () => {
  state.operandsArray.push(Number(state.currentNumber.join("")));
  screen.textContent = "";
  const [a, ...rest] = state.operandsArray
  switch (state.operator) {
    case "plus":
      state.result = rest.reduce((acc, operand)=> acc+= operand, a)
      break;
    case "minus":
      state.result = rest.reduce((acc, operand)=> acc-= operand, a)
      break;
    case "multiply":
      state.result = rest.reduce((acc, operand)=> acc*= operand, a)
      break;
    case "division":
      state.result = rest.reduce((acc, operand)=> acc/= operand, a)
      break;
  }
  screen.textContent = state.result;
  state.clearState()
  state.operandsArray.push(state.result)
};

const afterEqual = (e)=> {
  printSetCurrentNumber(e)
  state.operandsArray.push(Number(state.currentNumber.join("")));
  console.log(state.operandsArray);
  
}

buttons.addEventListener("click", (e) => {
  state.result === 0 ? printSetCurrentNumber(e): null;

  e.target.id === "plus" || e.target.id === "minus" ||
  e.target.id === "multiply" || e.target.id === "division"
    ? setState(e.target.id) : null;

  (e.target.id === "plus" || e.target.id === "minus" ||
   e.target.id === "multiply" || e.target.id === "division")
  && state.result !== 0
  ? afterEqual(e)
  : null;

  e.target.id === "equal" && state.operandsArray.length >= 1
    ? printResult() : null;
});

clear.addEventListener('click', restartCalculator)

// ////////////////////////////////////////////////////////////////
// (function () {
//   screen.textContent = "0";
//   let operands = [];
//   let currentNumber = [];
//   let operator = "";
//   let result = false;

//   // clear functions. HOC-Function:
//   clear.addEventListener("click", (e) => {
//     operator = "";
//     operands = [];
//     screen.textContent = "0";
//     currentNumber = [];
//     result = 0;
//   });
//   const clearDataHandler = () => {
//     screen.textContent = result;
//     operands = [];
//     currentNumber = [];
//     result = result;
//     operator = "";
//   };

//   // Operations event/function:
//   const numbersOperationHandler = (e, currentOperator) => {
//     if (e.target.id === `${currentOperator}` && currentNumber.length >= 1) {
//       operands.push(Number([...currentNumber].join("")));
//       currentNumber = [];
//       operator = `${currentOperator}`;
//     }

//     e.target.id === "equal" ? printResultHandler() : null;
//   };

//   // Print result to screen:
//   const printResultHandler = () => {
//     operands.push(Number([...currentNumber].join("")));
//     const [a, ...rest] = operands;

//     switch (operator) {
//       case "plus":
//         result = rest.reduce((acc, number) => (acc += number), a).toFixed(1);
//         break;
//       case "minus":
//         result = rest.reduce((acc, number) => (acc -= number), a).toFixed(1);
//         break;
//       case "multiply":
//         result = rest.reduce((acc, number) => (acc *= number), a).toFixed(1);
//         break;
//       case "division":
//         result = rest.reduce((acc, number) => (acc /= number), a).toFixed(1);
//         break;
//     }
//     clearDataHandler();
//   };

//   // Calculate events/function:
//   buttons.addEventListener("click", (e) => {
//     const btnId = e.target.id;
//     btnId === "1" ||
//     btnId === "2" ||
//     btnId === "3" ||
//     btnId === "4" ||
//     btnId === "5" ||
//     btnId === "6" ||
//     btnId === "7" ||
//     btnId === "8" ||
//     btnId === "9" ||
//     btnId === "0"
//       ? currentNumber.push(btnId)
//       : false;

//     e.target.classList.contains("dot") &&
//     currentNumber.length >= 1 &&
//     !currentNumber.includes(".")
//       ? currentNumber.push(btnId)
//       : null;

//     screen.textContent = [...currentNumber].join("");
//     numbersOperationHandler(e, "plus");
//     numbersOperationHandler(e, "minus");
//     numbersOperationHandler(e, "multiply");
//     numbersOperationHandler(e, "division");
//   });
// })();
