/* ======================== Typed Animation ======================= */

var typed = new Typed(".typing", {
    strings:["Web Designer","Web Developer","Graphic Designer","You Tuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ======================== Aside ======================= */

const nav = document.querySelector(".nav"),
navlist = nav.querySelectorAll("li"),
totalNavlist = navlist.length;
for(let i=0; i<totalNavlist; i++){
    // console.log(navlist[i])
    const a = navlist[i].querySelector("a");
    // console.log(a)
    a.addEventListener("click", function() {
        for(let j=0; j<totalNavlist; j++){
            navlist[j].querySelector("a").classList.remove("active");
        }
        // console.log(this)
        this.classList.add("active")
        showSection(this);
    })
}
function showSection(element){
    // console.log(element.getAttribute("href").split("#"))
    const href = element.getAttribute("href").split("#");
    target = href[1];
    console.log(target)

}