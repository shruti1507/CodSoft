document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector('input[name="display"]');
  const buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      handleInput(this.value);
    });
  });

  document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (
      (key >= "0" && key <= "9") ||
      key === "." ||
      key === "/" ||
      key === "*" ||
      key === "-" ||
      key === "+" ||
      key === "%"
    ) {
      handleInput(key);
    } else if (key === "Enter") {
      handleInput("=");
    } else if (key === "Backspace") {
      handleInput("DE");
    } else if (key === "Escape") {
      handleInput("AC");
    }
  });

  function handleInput(value) {
    if (value === "AC") {
      display.value = "";
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  }
});
