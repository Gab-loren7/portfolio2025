// BORDA E FUNDO DO HEADER
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let scrollPosition = window.scrollY;
    let scrollThreshold = document.body.scrollHeight * 0.01; // 2% da altura total da página

    header.classList.toggle('rolagem', this.window.scrollY > 5);

    if (scrollPosition > scrollThreshold) {
        header.style.borderBottom = "2px solid #f1f1f1";
        header.style.backgroundColor = "#0f0f0f";
    } else {
        header.style.borderBottom = "2px solid transparent";
        header.style.backgroundColor = "transparent";
    }

});
// FIM BORDA E FUNDO DO HEADER


// AUMENTAR TAMANHO HEADER NO PORTFÓLIO
window.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("header");
    let dropHover = document.querySelector(".drop-hover");

    dropHover.addEventListener("mouseover", function () {
        header.style.height = "180px"; // Aumenta a altura do header
        header.style.transition = "height 0.3s ease-in-out";
    });

    dropHover.addEventListener("mouseout", function () {
        header.style.height = "110px"; // Retorna à altura original
    });
});
// FIM AUMENTAR TAMANHO HEADER NO PORTFÓLIO