const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;
const somFundo = document.getElementById('som');

    function eventoCartaoSelecionado() {
        const cartaoSelecionado = document.querySelector('.selecionado');
        cartaoSelecionado.classList.remove('selecionado');
    };

    function mostrarCartao(indiceCartao) {
        cartoes[indiceCartao].classList.add('selecionado');
    };

    btnAvancar.addEventListener('click', function () {
        if(cartaoAtual === cartoes.length - 1) return;
        
        eventoCartaoSelecionado();
        
        cartaoAtual++;
        mostrarCartao(cartaoAtual);
        
        if(cartaoAtual === 0) {
            const audio1 = document.getElementById('audio-1').play();
        }

        if(cartaoAtual === 1) {
            const audio2 = document.getElementById('audio-2').play();
        }

        if(cartaoAtual === 2) {
            const audio3 = document.getElementById('audio-3').play();
        }

    });

    btnVoltar.addEventListener('click', function () {
        if(cartaoAtual === 0) return;

        eventoCartaoSelecionado();
        
        cartaoAtual--;
        mostrarCartao(cartaoAtual);
    
        if(cartaoAtual === 0) {
            const audio1 = document.getElementById('audio-1').play();
        }

        if(cartaoAtual === 1) {
            const audio2 = document.getElementById('audio-2').play();
        }

        if(cartaoAtual === 2) {
            const audio3 = document.getElementById('audio-3').play();
        }

    });

    // somFundo.addEventListener('click', function () {
    //     var musica = document.getElementById('musica');
        
    //     musica.volume = 0.1;
        
    //     musica.play();
    // });