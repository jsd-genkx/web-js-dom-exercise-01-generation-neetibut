document.querySelector("button").addEventListener("click", () => {
  let elementButton = document.querySelector("h1");
  elementButton.innerHTML === "Hello World!"
    ? (elementButton.innerHTML = "Hello Earth!")
    : (elementButton.innerHTML = "Hello World!");
});
