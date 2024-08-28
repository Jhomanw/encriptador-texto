function encryptText() {
    let text = document.getElementById("inputText").value;
    if (text !== "") {
        let encryptedText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("outputText").value = encryptedText;
        hideMessage();
        showClearButton();
    }
}

function decryptText() {
    let text = document.getElementById("inputText").value;
    if (text !== "") {
        let decryptedText = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById("outputText").value = decryptedText;
        hideMessage();
        showClearButton();
    }
}

function copyText() {
    let inputText = document.getElementById("inputText");
    let outputText = document.getElementById("outputText");

    if (outputText.value !== "") {
        inputText.value = outputText.value;
        inputText.select();
        document.execCommand("copy");
        hideMessage();
        showClearButton();
    }
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
    showMessage();
    hideClearButton();
}

function hideMessage() {
    const messageElement = document.querySelector(".message-hidden");
    if (messageElement) {
        messageElement.style.display = "none";
    }
}

function showMessage() {
    const messageElement = document.querySelector(".message-hidden");
    if (messageElement) {
        messageElement.style.display = "block";
    }
}

function showClearButton() {
    const clearButton = document.querySelector(".btn-clear");
    if (clearButton) {
        clearButton.classList.remove("hidden");
    }
}

function hideClearButton() {
    const clearButton = document.querySelector(".btn-clear");
    if (clearButton) {
        clearButton.classList.add("hidden");
    }
}
