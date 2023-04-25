const strInput = document.getElementById("str");
const outputDiv = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const str = strInput.value;
  const length = str.length;
  outputDiv.textContent = `The word "${str}" has ${length} characters.`;
});
