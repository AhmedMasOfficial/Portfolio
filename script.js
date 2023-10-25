const background = document.getElementById("blur-background");
var next = document.getElementById("next-card");
var prev = document.getElementById("prev-card");


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

// const create_mini = document.querySelector("#createCard");
// const create_full = document.querySelector(".create-full");
// const create_form = document.getElementById("create-form");

// if (design_btn.classList.contains("empty")) design_btn.style.display = "none";
// if (video_btn.classList.contains("empty")) video_btn.style.display = "none";
// if (design3d_btn.classList.contains("empty")) design3d_btn.style.display = "none";
// if (web_btn.classList.contains("empty")) web_btn.style.display = "none";
// if (mobile_btn.classList.contains("empty")) mobile_btn.style.display = "none";
// if (desktop_btn.classList.contains("empty")) desktop_btn.style.display = "none";
// if (game_btn.classList.contains("empty")) game_btn.style.display = "none";
// if (ai_btn.classList.contains("empty")) ai_btn.style.display = "none";

var full = document.getElementsByClassName("full")[0];
let items = document.getElementsByClassName("item-design");


////////////////////////////////////////////////////////////////
//The functions that when you click on a category, the old one will be removed and the new one will be displayed
////////////////////////////////////////////////////////////////



function showDesign() {
    hideAll();
    items = document.getElementsByClassName("item-design");
    design_section.style.display = "block";
    design_btn.classList.add("active");
}
function showVideo() {
    hideAll();
    items = document.getElementsByClassName("item-video");
    video_section.style.display = "block";
    video_btn.classList.add("active");
}
function show3d() {
    hideAll();
    items = document.getElementsByClassName("item-3d");
    design3d_section.style.display = "block";
    design3d_btn.classList.add("active");

}
function showWeb() {
    hideAll();
    items = document.getElementsByClassName("item-web")
    web_section.style.display = "block";
    web_btn.classList.add("active");

}
function showMobile() {
    hideAll();
    items = document.getElementsByClassName("item-mobile");
    mobile_section.style.display = "block";
    mobile_btn.classList.add("active");

}
function showDesktop() {
    hideAll();
    items = document.getElementsByClassName("item-desktop");
    desktop_section.style.display = "block";
    desktop_btn.classList.add("active");

}
function showGame() {
    hideAll();
    items = document.getElementsByClassName("item-game");
    game_section.style.display = "block";
    game_btn.classList.add("active");

}
function showAi() {
    hideAll();
    items = document.getElementsByClassName("item-ai");
    ai_section.style.display = "block";
    ai_btn.classList.add("active");

}

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

function hide() {
    background.style.display = "none";
    next.style.display = "none";
    prev.style.display = "none";
    full.style.display = "none";
    // create_full.style.display = "none";
    // create_form.reset();
}








////////////////////////////////////////////////////////////////////////////////////////////////
//the functions that when you click on the create button, the create form will be displayed 
// and you will input a new card.
////////////////////////////////////////////////////////////////////////////////////////////////

// function createDirectLink(ch) {
//     /*  normal :
//         https://drive.google.com/file/d/1qvVlqyl3qi6vXSUGVnYVD2nsyYM-4vC0/view?usp=drive_link
//         direct :
//         https://drive.google.com/uc?export=download&id=1qvVlqyl3qi6vXSUGVnYVD2nsyYM-4vC0
//     */
//     const myArray = ch.split("/");
//     return "https://drive.google.com/uc?export=download&id=" + myArray[myArray.lenght - 2];
// }

// function open_creation() {
//     create_full.style.display = "block";
//     background.style.display = "block";
// }

// function create_card() {
//     let image_url = createDirectLink(document.querySelector(".create-image").value);
//     // let image_url = document.querySelector(".create-image").value;
//     let title = document.getElementsByClassName("create-title");
//     let description = document.getElementsByClassName("create-description");
//     grid.removeChild(create_mini);
//     grid.innerHTML += `<div class="item_design" id="13" onclick="blured(this)">
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



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//create design Items and tables
////////////////////////////////////////////////////////////////////////

const grid_design = document.querySelector(".grid-container-design");
let item_image = ["images/IG-1.png","images/IG-2.png","images/IG-3.png", "images/IG-4-3.png","images/pic1-2.png", "images/pic2-1.png","images/insta.png", "images/posts.ai_1200_630_px_1500_1500_px_1.png",
    "images/340653563_949680539392767_4660127515563206705_n.webp",
    "images/2-11.png", "images/113.png", "images/1122.png",
    "images/2-logo nmtc+.png", "images/+Artboard 32_2.png", "images/official logo.png",
    "images/insta_ipsas_cyber.png", "images/insta3.png", "images/ezfhbze.jpg",
    "images/profil-pic.png", "images/1.jpg", "images/2.jpg", "images/3.jpg",
    "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg",
    "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg"];

for (var i = 0; i < item_image.length; i++) {
    grid_design.innerHTML += `<img class="item item-design" onclick="blured(this)" src="${item_image[i]}">`;
}

// item_image.forEach(element => {
//     grid_design.innerHTML += `<img class="item item-design" onclick="blured(this)" src="${element}">`;
// })


////////////////////////////////////////////////////////////////
//the functions that when you click on the card, the card will be displayed in full screen
////////////////////////////////////////////////////////////////

function blured(object) {
    var source = object.src;
    full.innerHTML = "";
    full.style.backgroundImage = `url("${source}")`;
    full.style.display = "block";
    background.style.display = "block";
    next.style.display = "block";
    prev.style.display = "block";

    for (let i = 0; i < items.length; i++) {
        if (source == items[i].src) {
            current = i;
            break;
        }
    }

    if (current == 0) {
        prev.style.display = "none";
    }
    else {
        prev.style.display = "block";
    }

    if (current + 1 == items.length) {
        next.style.display = "none";
    }
    else {
        next.style.display = "block";
    }

}


function to_next() {
    prev.style.display = "block";
    source = items[current + 1].src;
    full.style.backgroundImage = `url("${source}")`;
    current++;

    if (current + 1 == items.length) {
        next.style.display = "none";
    }
    else {
        next.style.display = "block";
    }
}

function to_prev() {
    next.style.display = "block";
    source = items[current - 1].src;
    full.style.backgroundImage = `url("${source}")`;
    current--;
    if (current == 0) {
        prev.style.display = "none";
    }
    else {
        prev.style.display = "block";
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//create Video Items and tables
////////////////////////////////////////////////////////////////////////

const grid_video = document.querySelector(".grid-container-video");

let video_links = ["https://drive.google.com/file/d/1GbzRTXswwPC4PtnFO50V2boMbpjk4WHR/preview",
    "https://drive.google.com/file/d/1oCNEdWflL9xfnK-8C6MllR46-fj3KaVI/preview",
    "https://drive.google.com/file/d/12G-_lUy4pgdfkOJOudA_rutYyKLq2tWR/preview",
    "https://drive.google.com/file/d/1nNBqdKwA57J3CzIuGN75MFhoMa6On6vl/preview",
    "https://drive.google.com/file/d/1mrMxbGyRKBSGDQ7Wb7SFF3pbH4yJlDAW/preview",
    "https://drive.google.com/file/d/1wXHQGfHHFYQo7qeqEmB3TvKGjsQq8vP6/preview",
    "https://drive.google.com/file/d/15LB2BAsFTiqxuI07hT2k4owODvKqyC6d/preview"
];

let video_thubnails = ["Video/Screenshot 2023-08-30 185101.png",
    "Video/Screenshot 2023-08-30 173808.png",
    "Video/Screenshot 2023-10-25 225019.png",
    "Video/Screenshot 2023-10-25 230528.png",
    "Video/Screenshot 2023-08-30 184959.png",
    "Video/Screenshot 2023-08-30 184828.png",
    "Video/Screenshot 2023-08-30 184920.png"
];
//this loop creates the grid items of the video categorie
for (let i = 0; i < video_thubnails.length; i++) {
    grid_video.innerHTML += `<div class="item-container">
    <img class="item" onclick="blured_video(${i})" src="${video_thubnails[i]}">
    <i class="fa-solid fa-play fa-2xl video-icon" style="color: #ffffff;"></i>
</div>`;
}


////////////////////////////////////////////////////////////////
// Video Fullscreen view
////////////////////////////////////////////////////////////////


let current = 0;
function blured_video(i) {
    full.style.backgroundImage = "none";
    current = i;
    full.innerHTML = `<iframe src="${video_links[current]}" style="aspect-ratio:16/9;width:60vw;transform:translate(0,10%)" allow="autoplay" allowfullscreen></iframe>`;
    full.style.display = "block";
    background.style.display = "block";
    next.style.display = "block";
    prev.style.display = "block";

    if (current == 0) {
        prev.style.display = "none";
    }
    else {
        prev.style.display = "block";
    }

    if (current + 1 == video_links.length) {
        next.style.display = "none";
    }
    else {
        next.style.display = "block";
    }

}

next.addEventListener("click", () => {
    if (video_btn.classList.contains("active")) {
        to_next_vid(current);
    }
    else {
        to_next();
    }
});

prev.addEventListener("click", () => {
    if (video_btn.classList.contains("active")) {
        to_prev_vid(current);
    }
    else {
        to_prev();
    }
});


function to_next_vid(i) {
    current = i;
    prev.style.display = "block";
    full.innerHTML = `<iframe src="${video_links[++current]}" style="aspect-ratio:16/9;width:60vw;transform:translate(0,10%)" allow="autoplay" allowfullscreen></iframe>`;

    if (current + 1 == video_links.length) {
        next.style.display = "none";
    }
    else {
        next.style.display = "block";
    }
}

function to_prev_vid(i) {
    current = i;
    next.style.display = "block";
    full.innerHTML = `<iframe src="${video_links[--current]}" style="aspect-ratio:16/9;width:60vw;transform:translate(0,10%)" allow="autoplay" allowfullscreen></iframe>`;

    if (current == 0) {
        prev.style.display = "none";
    }
    else {
        prev.style.display = "block";
    }
}

