const state = {
    connected: false
};

function setStatus(message) {
    const status = document.getElementById("status");

    if (status) {
        status.textContent = message;
    }
}