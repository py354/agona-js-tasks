let is_hiding = true;

let btn = document.querySelector("img");
let input = document.querySelector("#password_input");
console.log(btn);

btn.onclick = (event) => {
    if (is_hiding) {
        input.setAttribute("type", "text")
        btn.setAttribute("src", "Eye.svg")
        is_hiding = false;
    } else {
        input.setAttribute("type", "password")
        btn.setAttribute("src", "Eye%20Hide.svg")
        is_hiding = true;
    }
}