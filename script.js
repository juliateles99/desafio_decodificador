var inputText = document.getElementById("input-text");
var outputDiv = document.getElementById("output");

const words = {
    "imes": "i",
    "enter": "e",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function encrypt() {
    var text = inputText.value;
    var resultEncrypt = text.replace(/imes|enter|ai|ober|ufat/g, match => words[match]);
    showOutput(resultEncrypt);
}

function decrypt() {
    var text = inputText.value;
    Object.keys(words).forEach(function(word) {
        var regex = new RegExp(words[word], "g");
        text = text.replace(regex, word);
    });
    showOutput(text);
}

document.getElementById("input-text").addEventListener("input", function(event) {
    var inputValue = event.target.value;
    var sanitizedValue = inputValue.replace(/[^a-z\n\r\s]/g, "").toLowerCase();
    event.target.value = sanitizedValue;
});


function showOutput(text) {
    if (text.trim() === '') {
        outputDiv.innerHTML = `
            <img id="output-image" src="images/imgNotFound.png" alt="Imagem não encontrada">
            <h2>Texto não encontrado</h2>
            <span>O texto digitado não corresponde a nenhum padrão conhecido.</span>
        `;
    } else {
        outputDiv.innerHTML = `
            <textarea readonly id="output-text">${text}</textarea>
            <button class="btn-copiar" onclick="copyText()">Copiar</button>
        `;
    }
}


function copyText() {
    var textToCopy = document.getElementById("output-text").value;
    
    var tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Texto copiado com sucesso!");
}