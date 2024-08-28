function encryptText() {
    let text = document.getElementById("inputText").value;
    if (text === "") {
        showMessage(true);
    } else {
        let encryptedText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("outputText").value = encryptedText;
        showMessage(false);
    }
}

function decryptText() {
    let text = document.getElementById("inputText").value;
    if (text === "") {
        showMessage(true);
    } else {
        let decryptedText = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById("outputText").value = decryptedText;
        showMessage(false);
    }
}

function copyText() {
    let inputText = document.getElementById("inputText");
    let outputText = document.getElementById("outputText");
    inputText.value = outputText.value;
    inputText.select();
    document.execCommand("copy");
}

function showMessage(show) {
    let message = document.getElementById("message");
    if (show) {
        message.classList.remove("hidden");
    } else {
        message.classList.add("hidden");
    }
}
