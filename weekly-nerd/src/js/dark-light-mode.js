document
  .getElementById("darkmode-toggle")
  .addEventListener("click", function () {
    const checkbox = this;
    checkbox.disabled = true;
    if (checkbox.checked) {
      console.log("Checked!");
      localStorage.setItem("darkMode", "false");
    } else if (!checkbox.checked) {
      console.log("Not checked!");
      localStorage.setItem("darkMode", "true");
    }
    setTimeout(() => {
      checkbox.disabled = false;
    }, 500);
  });

const setting = localStorage.getItem("darkMode");
if (setting === "true") {
  console.log("DarkMode");
} else if (setting === "false") {
  console.log("LightMode");
  document.getElementById("darkmode-toggle").checked = true;
}
