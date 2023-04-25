const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
  const str = document.querySelector("#str").value;
  const length = str.length;
  const output = document.querySelector("#output");
  output.innerHTML = length;
});
