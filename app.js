const button = document.getElementById("convert");
const text = document.getElementById("input");
const output = document.querySelector(".result > p");

main();

function main() {
  button.addEventListener("click", function () {
    convertText(text.value);
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
    copy = copy.concat(char);
  }
  output.innerHTML = copy;
}
