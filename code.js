
const allButtons = document.querySelectorAll("button");
const allSpaces = document.querySelectorAll(".tbContent_button");

const allNames = document.querySelectorAll("p");
const allImg = document.querySelectorAll(".tbContent_button_info_img");
const allLi = document.querySelectorAll("li");

//Toggle Button

for (let i = 0; i < allButtons.length; i++) {

    const space = allSpaces[i];
    const button = allButtons[i];

    button.addEventListener("click", () => {
       space.classList.toggle("active");
    });
}

//Get name
const API = "https://rickandmortyapi.com/api/character/";

const createData = async () =>  {
    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * 826);
        const url = (`${API}/${index}`);
        await fetch(url)
        .then(response => response.json())
        .then(character => {
            const characterInfo = [
                character.name,
                character.status,
                character.species,
                character.gender,
                character.image
            ]
            const elementNumber = ((i % 3) * 3);
            console.log(characterInfo);//Flag

            //Set data
            allNames[i].innerText = characterInfo[0];
            allImg[i].setAttribute("src",characterInfo[4]);
            allImg[i].setAttribute("alt",characterInfo[0]);
            allLi[elementNumber].innerText += ` ${characterInfo[1]}`;
            allLi[elementNumber + 1].innerText += ` ${characterInfo[2]}`;
            allLi[elementNumber + 2].innerText += ` ${characterInfo[3]}`;

        })
        .catch(err => console.log(err));

    }
}

createData();

{/* <div class="tbContent_button">
    <div class="tbContent_button_head">
        <p>Rick Sanchez</p> 
        <button type="button">
            <img src="src/arrow.svg">
        </button>
    </div>

    <div class="tbContent_button_info">
        <img class="tbContent_button_info_img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick">
        <div class="tbContent_button_info_text">
            <ul>
                <li><b>Status:</b> Alive</li>
                <li><b>Species:</b> Human</li>
                <li><b>Gender:</b> Male</li>
            </ul>
        </div>
    </div>
</div> */}