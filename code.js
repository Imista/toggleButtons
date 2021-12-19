// //Form #1

// const buttonPressed = () =>{
//     //Html objects
//     const div = document.querySelector(".tbContent_button")

//     //Actions
//     div.classList.toggle("active");
// }

//Form #2

const allButtons = document.querySelectorAll("button");
const allSpaces = document.querySelectorAll(".tbContent_button");

for (let i = 0; i < allButtons.length; i++) {

    const space = allSpaces[i];
    const button = allButtons[i];

    button.addEventListener("click", () => {
       space.classList.toggle("active");
    });
}