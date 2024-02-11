
//----------------------------------------------------------------
//animation when shown

const hiddenElements = document.querySelectorAll(".hidden-move");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // observer.unobserve(entry.target);
        }
        // else{
        //     entry.target.classList.remove("show");
        // }
    });
}, { threshold: 0.5 });

hiddenElements.forEach((el) => observer.observe(el));


/* another intersection observer*/

const hiddenElements2 = document.querySelectorAll(".hidden");

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show2");
        }
    });
}, { threshold: 0.5 });

hiddenElements2.forEach((el) => observer2.observe(el));