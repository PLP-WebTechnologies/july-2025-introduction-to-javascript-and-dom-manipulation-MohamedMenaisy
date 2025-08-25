document.getElementById("checkNumberBtn").addEventListener("click", function () {
  let number = parseInt(document.getElementById("numberInput").value);
  let output = document.getElementById("output");

  if (isNaN(number)) {
    output.innerHTML = "Please enter a valid number.";
  } else if (number % 2 === 0) {
    output.innerHTML = `The number ${number} is <strong>even</strong>.`;
  } else {
    output.innerHTML = `The number ${number} is <strong>odd</strong>.`;
  }
});

function printNumbersTo(n) {
  let result = "For Loop: ";
  for (let i = 1; i <= n; i++) {
    result += i + " ";
  }
  return result;
}

function countdownFrom(n) {
  let result = "While Loop: ";
  while (n > 0) {
    result += n + " ";
    n--;
  }
  return result;
}

document.getElementById("runLoopsBtn").addEventListener("click", function () {
  let number = parseInt(document.getElementById("numberInput").value);
  let output = document.getElementById("output");

  if (isNaN(number) || number <= 0) {
    output.innerHTML = "Please enter a positive number.";
    return;
  }

  let forLoopResult = printNumbersTo(number);
  let whileLoopResult = countdownFrom(number);

  output.innerHTML = `<p>${forLoopResult}</p><p>${whileLoopResult}</p>`;
});