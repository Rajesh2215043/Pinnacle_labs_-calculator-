document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("user-input");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonValue = button.textContent;

      if (button.classList.contains("numbers")) {
        if (display.textContent === "0" || display.textContent === "Error") {
          display.textContent = buttonValue;
        } else {
          display.textContent += buttonValue;
        }
      }

      if (button.classList.contains("operations")) {
        switch (buttonValue) {
          case "AC":
            display.textContent = "0";
            break;
          case "DEL":
            if (display.textContent.length > 1) {
              display.textContent = display.textContent.slice(0, -1);
            } else {
              display.textContent = "0";
            }
            break;
          case "=":
            try {
              display.textContent = eval(
                display.textContent.replace(/%/g, "/100")
              );
            } catch {
              display.textContent = "Error";
            }
            break;
          default:
            if (
              display.textContent !== "0" &&
              display.textContent !== "Error"
            ) {
              display.textContent += buttonValue;
            }
            break;
        }
      }
    });
  });
});
