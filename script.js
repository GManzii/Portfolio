
function alternarTema() {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("portfolio-theme", isLight ? "light" : "cyber");
}

function alternarIdioma() {
    document.body.classList.toggle("lang-en-active");
    const isEn = document.body.classList.contains("lang-en-active");
    localStorage.setItem("portfolio-lang", isEn ? "en" : "pt");
}
(function() {
    const temaSalvo = localStorage.getItem("portfolio-theme");
    if (temaSalvo === "light") document.body.classList.add("light-mode");

    const idiomaSalvo = localStorage.getItem("portfolio-lang");
    if (idiomaSalvo === "en") document.body.classList.add("lang-en-active");
})();