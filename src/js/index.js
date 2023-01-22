const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal")
const botaofecharmodal = document.querySelector('.fechar-modal');
const video = document.getElementById("video");
const linkDoVideo = video.src;


function alternarmodal() {
    modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener("click", () => {
    alternarmodal()
    video.setAttribute("src",
        linkDoVideo);
})

botaofecharmodal.addEventListener('click', () => {
    alternarmodal()
    video.setAttribute('src', "");

})

/*forma alternativa de fazer, porém com repetição de código.

botaoTrailer.addEventListener("click", () => {
    modal.classList.add('aberto');
    video.setAttribute("src",
        linkDoVideo);
})

botaofecharmodal.addEventListener('click', () => {
    modal.classList.remove('aberto');
    video.setAttribute('src', "");

})*/