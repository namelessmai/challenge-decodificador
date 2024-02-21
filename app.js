function criptografar() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var campoTexto = document.getElementById("output_campo_texto");

    var texto = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    var substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    texto = texto.replace(/[^\w\s]/gi, '');

    for (var chave in substituicoes) {
        if (substituicoes.hasOwnProperty(chave)) {
            texto = texto.replace(new RegExp(chave, 'g'), substituicoes[chave]);
        }
    }

    campoTexto.innerHTML = texto;

    var imagem = output.querySelector(".output_img_placeholder");
    var mensagemPlaceholder = output.querySelector(".output_mensagem_placeholder");

    if (campoTexto.innerHTML.trim() !== '') {
        imagem.style.display = "none"; 
        mensagemPlaceholder.style.display = "none"; 
    } else {
        imagem.style.display = "block"; 
        mensagemPlaceholder.style.display = "block"; 
    }
}

function copiarMensagem() {
    var campoTexto = document.getElementById("output_campo_texto");

    // Verifica se há texto para copiar
    if (campoTexto.textContent.trim() === '') {
        alert("Não há texto para copiar.");
        return;
    }

    var inputTemporario = document.createElement("textarea");

    inputTemporario.value = campoTexto.textContent;

    document.body.appendChild(inputTemporario);

    inputTemporario.select();
    inputTemporario.setSelectionRange(0, 99999); // Para dispositivos móveis

    var copiado = document.execCommand('copy');

    document.body.removeChild(inputTemporario);

    if (copiado) {
        alert("Copiado para a área de transferência.");
    } else {
        alert("Falha ao copiar ao para a área de transferência.");
    }
}


function descriptografar() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var campoTexto = document.getElementById("output_campo_texto");

    var texto = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    var substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    texto = texto.replace(/[^\w\s]/gi, '');

    for (var chave in substituicoes) {
        if (substituicoes.hasOwnProperty(chave)) {
            texto = texto.replace(new RegExp(chave, 'g'), substituicoes[chave]);
        }
    }

    campoTexto.innerHTML = texto;

    var imagem = output.querySelector(".output_img_placeholder");
    var mensagemPlaceholder = output.querySelector(".output_mensagem_placeholder");

    if (campoTexto.innerHTML.trim() !== '') {
        imagem.style.display = "none"; 
        mensagemPlaceholder.style.display = "none"; 
    } else {
        imagem.style.display = "block"; 
        mensagemPlaceholder.style.display = "block"; 
    }
}
function checkWidth() {
    var outputPlaceholder = document.querySelector('.output_mensagem_placeholder');
    if (window.matchMedia("(max-width: 1200px)").matches) {
        // Se a largura da tela for menor ou igual a 1200px, remover <br>
        outputPlaceholder.innerHTML = outputPlaceholder.innerHTML.replace(/<br>/g, "");
    } else {
        // Se a largura da tela for maior que 1200px, restaurar o conteúdo original
        outputPlaceholder.innerHTML = "Nenhuma mensagem <br>encontrada.";
    }
}

checkWidth();

window.addEventListener("resize", checkWidth);