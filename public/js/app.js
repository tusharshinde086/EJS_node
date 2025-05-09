console.log("✅ app.js loaded!");

const buttons = document.querySelectorAll("button");
for (let btn of buttons) {
    btn.addEventListener("click", () => {
        alert("Button clicked!");
    });
}
