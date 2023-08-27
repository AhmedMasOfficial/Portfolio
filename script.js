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
const create_mini = document.querySelector("#createCard");
const create_full = document.querySelector(".create-full");
const create_form = document.getElementById("create-form");


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

function create_card() {
    let image_url = createDirectLink(document.querySelector(".create-image").value);
    // let image_url = document.querySelector(".create-image").value;
    let title = document.getElementsByClassName("create-title");
    let description = document.getElementsByClassName("create-description");
    grid.removeChild(create_mini);
    grid.innerHTML += `<div class="item" id="13" onclick="blured(this)">
            <div class="image image13"> </div>
            <div class="Card-Title : Welcome">Card-Title : Welcome</div>
            <div class="tag-container">
                <div class="tag tag-1">TAG 1</div>
                <div class="tag tag-2">TAG 2</div>
                <div class="tag tag-3">TAG 3</div>
            </div>
            <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi aut
                quaerat magnam neque.
                Voluptate.</div>
            </div>`;
    create_full.style.display = "none";
    background.style.display = "none";
    document.querySelector(".image13").style.backgroundImage = `url("${image_url}")`;
    grid.appendChild(create_mini);
}


function paste() {
    const paste = document.querySelector('.create-image');
    navigator.clipboard.readText().then((clipText) => (paste.value = clipText));
}



// //=============|| Side Bar Sticky ||====================
// let sidebar = document.getElementsByClassName("side-div")[0];
// let sidebar_content = document.getElementsByClassName("content-wrapper")[0];

// window.onscroll = () => {
//     let scrollTop = window.scrollY;
//     let viewportHeight = window.innerHeight;
//     let sidebarTop = sidebar.getBoundingClientRect().top;
//     let contentHeight = sidebar_content.getBoundingClientRect().height;

//     if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
//         sidebar_content.style.transform = `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`;
//         sidebar_content.style.position = "fixed";
//     }
//     else {
//         sidebar_content.style.transform = "";
//         sidebar_content.style.position = "";
//     }
// };