const type = new Typed(".auto-type", {
    strings: ["Desenvolvedor Full Stack...", "UI/UX..."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
