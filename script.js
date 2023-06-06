const blueTheme = document.querySelector("#one");
const whiteTheme = document.querySelector("#two");
const violetTheme = document.querySelector("#three");
const ballBtn = document.querySelector(".ball");

blueTheme.addEventListener("change", () => {
    ballBtn.style.left = "4px"
    document.documentElement.setAttribute("data-theme", "blue")
});

whiteTheme.addEventListener("change", () => {
    ballBtn.style.left = "35px"
    document.documentElement.setAttribute("data-theme", "white")
});

violetTheme.addEventListener("change", () => {
    ballBtn.style.left = "75px"
    document.documentElement.setAttribute("data-theme", "violet")
});
