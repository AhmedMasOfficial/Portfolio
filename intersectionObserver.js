
//----------------------------------------------------------------
//animation when shown

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("show");
            // observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));