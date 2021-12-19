// //Form #1

// const buttonPressed = () =>{
//     //Html objects
//     const div = document.querySelector(".tbContent_button")

//     //Actions
//     div.classList.toggle("active");
// }

//Form #2

const spaces = document.querySelectorAll(".tbContent_button");

spaces.forEach(x => {
    x.addEventListener("click", () => {
        x.classList.toggle("active");
    });
})
