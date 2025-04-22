// BORDA E FUNDO DO HEADER
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let scrollPosition = window.scrollY;
    let scrollThreshold = document.body.scrollHeight * 0.01; // 2% da altura total da página

    header.classList.toggle('rolagem', this.window.scrollY > 5);

    if (scrollPosition > scrollThreshold) {
        header.style.transition = ".4s"
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

// SLIDE

// Seleciona todos os slides (imagens ou caixas de conteúdo)
let imgSlider = document.querySelectorAll('.slider-container .slider-box');

// Seleciona os botões de "próximo" e "anterior"
let btnProx = document.querySelector('#proxima');
let btnAnter = document.querySelector('#anterior');

// Seleciona os botões de navegação (normalmente bolinhas que indicam o slide ativo)
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

// Conta quantos slides existem
let contadorImg = imgSlider.length;

// Começa com o primeiro slide ativo (índice 0)
let imgAtiva = 0;

// Variáveis para controlar o autoplay e o delay
let autoplay;      // guarda o intervalo do autoplay
let timeoutDelay;  // guarda o tempo de espera antes de reiniciar o autoplay

// Função que inicia o autoplay (troca de slides automática a cada 4 segundos)
function iniciarAutoplay() {
    autoplay = setInterval(proximaImagem, 4000);
}

// Função que reinicia o autoplay com um delay de 3 segundos
function reiniciarAutoplay() {
    clearInterval(autoplay);      // Para o autoplay atual
    clearTimeout(timeoutDelay);   // Cancela qualquer delay pendente

    // Aguarda 3 segundos e reinicia o autoplay
    timeoutDelay = setTimeout(() => {
        iniciarAutoplay();
    }, 3000);
}

// Função para avançar para o próximo slide
function proximaImagem() {
    imgAtiva++; // Vai para o próximo slide
    if (imgAtiva >= contadorImg) {
        imgAtiva = 0; // Se chegar no fim, volta para o primeiro
    }
    mostrarSlider(); // Atualiza o slider visualmente
}

// Função que atualiza o slide exibido e o botão de navegação ativo
function mostrarSlider() {
    // Remove a classe "ativo" do slide e botão antigo
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo');
    let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo');

    if (antigaImg) antigaImg.classList.remove('ativo');
    if (antigoBtnNav) antigoBtnNav.classList.remove('ativo');

    // Adiciona a classe "ativo" no novo slide e botão correspondente
    imgSlider[imgAtiva].classList.add('ativo');
    btnNav[imgAtiva].classList.add('ativo');
}

// Evento de clique no botão "Próximo"
btnProx.addEventListener('click', () => {
    proximaImagem();      // Avança para o próximo slide
    reiniciarAutoplay();  // Reinicia o autoplay com delay
});

// Evento de clique no botão "Anterior"
btnAnter.addEventListener('click', () => {
    imgAtiva--; // Volta um slide
    if (imgAtiva < 0) {
        imgAtiva = contadorImg - 1; // Se passar do primeiro, vai para o último
    }
    mostrarSlider();      // Atualiza o slider
    reiniciarAutoplay();  // Reinicia o autoplay com delay
});

// Evento para os botões de navegação (bolinhas)
btnNav.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        imgAtiva = indice;     // Define o slide clicado como ativo
        mostrarSlider();       // Atualiza o slider
        reiniciarAutoplay();   // Reinicia o autoplay com delay
    });
});

// Inicia o autoplay assim que o site carregar
iniciarAutoplay();

// FIM SLIDE