const button = document.getElementById("request");
const div = document.getElementById("result");

button.addEventListener("click", async function() {
    try {
      const xhr = await fetch("http://localhost:5110/back");
      const data = await xhr.text();
      div.textContent = data;
    } 
    catch (error) {
      div.textContent = "Error: " + error.message;
    }
});