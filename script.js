const background = document.getElementById("blur-background");
const card1 = document.getElementById("full-view-1");
const card2 = document.getElementById("full-view-2");
const card3 = document.getElementById("full-view-3");
const card4 = document.getElementById("full-view-4");
const card5 = document.getElementById("full-view-5");
const card6 = document.getElementById("full-view-6");
const card7 = document.getElementById("full-view-7");
const card8 = document.getElementById("full-view-8");
const card9 = document.getElementById("full-view-9");
const card10 = document.getElementById("full-view-10");
const card11 = document.getElementById("full-view-11");
const card12 = document.getElementById("full-view-12");
var next = document.getElementById("next-card");
var prev = document.getElementById("prev-card");
var t = document.getElementsByClassName("full");

const grid = document.querySelector(".grid-container");
const design_section = document.querySelector(".design");
const video_section = document.querySelector(".video");
const design3d_section = document.querySelector(".design3d");
const web_section = document.querySelector(".web");
const mobile_section = document.querySelector(".mobile");
const desktop_section = document.querySelector(".desktop");
const game_section = document.querySelector(".game");
const ai_section = document.querySelector(".ai");

const design_btn = document.querySelector(".design-btn");
const video_btn = document.querySelector(".video-btn");
const design3d_btn = document.querySelector(".design3d-btn");
const web_btn = document.querySelector(".web-btn");
const mobile_btn = document.querySelector(".mobile-btn");
const desktop_btn = document.querySelector(".desktop-btn");
const game_btn = document.querySelector(".game-btn");
const ai_btn = document.querySelector(".ai-btn");

const create_mini = document.querySelector("#createCard");
const create_full = document.querySelector(".create-full");
const create_form = document.getElementById("create-form");


if (design_btn.classList.contains("empty")) design_btn.style.display = "none";
if (video_btn.classList.contains("empty")) video_btn.style.display = "none";
if (design3d_btn.classList.contains("empty")) design3d_btn.style.display = "none";
if (web_btn.classList.contains("empty")) web_btn.style.display = "none";
if (mobile_btn.classList.contains("empty")) mobile_btn.style.display = "none";
if (desktop_btn.classList.contains("empty")) desktop_btn.style.display = "none";
if (game_btn.classList.contains("empty")) game_btn.style.display = "none";
if (ai_btn.classList.contains("empty")) ai_btn.style.display = "none";


function blured(object) {
    background.style.display = "block";
    next.style.display = "block";
    prev.style.display = "block";
    if (object == document.getElementById("1")) {
        card1.style.display = "block";
        prev.style.display = "none";
        current = 1;
    }
    if (object == document.getElementById("2")) {
        card2.style.display = "block";
        current = 2;
    }
    if (object == document.getElementById("3")) {
        card3.style.display = "block";
        current = 3;
    }
    if (object == document.getElementById("4")) {
        card4.style.display = "block";
        current = 4;
    }
    if (object == document.getElementById("5")) {
        card5.style.display = "block";
        current = 5;
    }
    if (object == document.getElementById("6")) {
        card6.style.display = "block";
        current = 6;
    }
    if (object == document.getElementById("7")) {
        card7.style.display = "block";
        current = 7;
    }
    if (object == document.getElementById("8")) {
        card8.style.display = "block";
        current = 8;
    }
    if (object == document.getElementById("9")) {
        card9.style.display = "block";
        current = 9;
    }
    if (object == document.getElementById("10")) {
        card10.style.display = "block";
        current = 10;
    }
    if (object == document.getElementById("11")) {
        card11.style.display = "block";
        current = 11;
    }
    if (object == document.getElementById("12")) {
        card12.style.display = "block";
        next.style.display = "none";
        current = 12;
    }


}
function hide() {
    background.style.display = "none";
    next.style.display = "none";
    prev.style.display = "none";
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card5.style.display = "none";
    card6.style.display = "none";
    card7.style.display = "none";
    card8.style.display = "none";
    card9.style.display = "none";
    card10.style.display = "none";
    card11.style.display = "none";
    card12.style.display = "none";
    create_full.style.display = "none";
    create_form.reset();
}

function to_next() {
    t[current - 1].style.display = "none";
    t[current].style.display = "block";
    prev.style.display = "block";
    current++;
    if (current == 12) {
        next.style.display = "none";
    }
    else {
        next.style.display = "block";
    }
}
function to_prev() {
    t[current - 1].style.display = "none";
    t[current - 2].style.display = "block";
    next.style.display = "block";
    current--;
    if (current == 1) {
        prev.style.display = "none";
    }
    else {
        prev.style.display = "block";
    }
}


function createDirectLink(ch) {
    /*  normal :
        https://drive.google.com/file/d/1qvVlqyl3qi6vXSUGVnYVD2nsyYM-4vC0/view?usp=drive_link
        direct :
        https://drive.google.com/uc?export=download&id=1qvVlqyl3qi6vXSUGVnYVD2nsyYM-4vC0
    */
    const myArray = ch.split("/");
    return "https://drive.google.com/uc?export=download&id=" + myArray[myArray.lenght - 2];
}

function open_creation() {
    create_full.style.display = "block";
    background.style.display = "block";
}

// function create_card() {
//     let image_url = createDirectLink(document.querySelector(".create-image").value);
//     // let image_url = document.querySelector(".create-image").value;
//     let title = document.getElementsByClassName("create-title");
//     let description = document.getElementsByClassName("create-description");
//     grid.removeChild(create_mini);
//     grid.innerHTML += `<div class="item" id="13" onclick="blured(this)">
//             <div class="image image13"> </div>
//             <div class="Card-Title : Welcome">Card-Title : Welcome</div>
//             <div class="tag-container">
//                 <div class="tag tag-1">TAG 1</div>
//                 <div class="tag tag-2">TAG 2</div>
//                 <div class="tag tag-3">TAG 3</div>
//             </div>
//             <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi aut
//                 quaerat magnam neque.
//                 Voluptate.</div>
//             </div>`;
//     create_full.style.display = "none";
//     background.style.display = "none";
//     document.querySelector(".image13").style.backgroundImage = `url("${image_url}")`;
//     grid.appendChild(create_mini);
// }


// function paste() {
//     const paste = document.querySelector('.create-image');
//     navigator.clipboard.readText().then((clipText) => (paste.value = clipText));
// }



function hideAll() {
    design_section.style.display = "none";
    video_section.style.display = "none";
    design3d_section.style.display = "none";
    web_section.style.display = "none";
    mobile_section.style.display = "none";
    desktop_section.style.display = "none";
    game_section.style.display = "none";
    ai_section.style.display = "none";

    design_btn.classList.remove("active");
    design3d_btn.classList.remove("active");
    video_btn.classList.remove("active");
    web_btn.classList.remove("active");
    mobile_btn.classList.remove("active");
    desktop_btn.classList.remove("active");
    game_btn.classList.remove("active");
    ai_btn.classList.remove("active");
}

function showDesign() {
    hideAll();
    design_section.style.display = "block";
    design_btn.classList.add("active");

}

function showVideo() {
    hideAll();
    video_section.style.display = "block";
    video_btn.classList.add("active");

}

function show3d() {
    hideAll();
    design3d_section.style.display = "block";
    design3d_btn.classList.add("active");

}
function showWeb() {
    hideAll();
    web_section.style.display = "block";
    web_btn.classList.add("active");

}
function showMobile() {
    hideAll();
    mobile_section.style.display = "block";
    mobile_btn.classList.add("active");

}
function showDesktop() {
    hideAll();
    desktop_section.style.display = "block";
    desktop_btn.classList.add("active");

}
function showGame() {
    hideAll();
    game_section.style.display = "block";
    game_btn.classList.add("active");

}
function showAi() {
    hideAll();
    ai_section.style.display = "block";
    ai_btn.classList.add("active");

}