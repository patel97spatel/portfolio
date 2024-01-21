/* ======================== Typed Animation ======================= */

var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Graphic Designer", "You Tuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* ======================== Aside ======================= */

const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavlist = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavlist; i++) {
    // console.log(navlist[i])
    const a = navlist[i].querySelector("a");
    // console.log(a)
    a.addEventListener("click", function () {

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavlist; j++) {

            if (navlist[j].querySelector("a").classList.contains("active")) {

                // console.log("back-section" + navlist[j].querySelector("a"))
                allSection[j].classList.add("back-section");
            }

            navlist[j].querySelector("a").classList.remove("active");
        }
        // console.log(this)
        this.classList.add("active")
        showSection(this);
    })
}
function showSection(element) {

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    // console.log(element.getAttribute("href").split("#"))
    const target = element.getAttribute("href").split("#")[1];
    //  console.log(target)
    document.querySelector("#" + target).classList.add("active")
}

/*  ===================  Nav Toggler Button =========== */

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", function () {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}