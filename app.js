const button = document.getElementById("convert");
let text = document.getElementById("input").value;
const output = document.getElementById("output");

main();

function main() {
  button.addEventListener("click", function () {
    convertText(text);
  });
}

function convertText(text) {
  text = text.trim();
  let copy = "";
  for (i = 0; i < text.length; i++) {
    let char = text.substring(i, i + 1);
    if (i % 2 === 0) {
      char = char.toLowerCase();
    } else {
      char = char.toUpperCase();
    }
    copy = copy + char;
  }
  output.innerHTML = copy;
}
