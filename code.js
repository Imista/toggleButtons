//Form #1

const buttonPressed = () =>{
    //Html objects
    const button = document.querySelector(".tbContent_button_head");
    const text = document.querySelector(".tbContent_button_info");

    //Actions
    button.classList.toggle("disableButton");
    text.classList.toggle("activateText");
}