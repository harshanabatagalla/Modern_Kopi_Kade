window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function handdleMenuClick(){
    window.location.href = 'Menu.html' ;
}