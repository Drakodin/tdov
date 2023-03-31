// Binding to the enter message rather than the screen
// For browsers, entry screen required as autoplay is disallowed
let clickCount = 0

let msgIdx = 0
function start() {
    let welcome = document.querySelector(".welcome-popover")
    welcome.style.opacity = 0;
    let music = document.querySelector(".bg-music")
    if (music && clickCount === 0) {
        clickCount++;
        console.log("Playing: Finding Mithral by Purple Planet...")
        music.muted = false
        music.volume = 0.25;
        music.play()
    }
    let msg = document.getElementById("msg")
    msg.innerHTML = MESSAGE_PARTS[msgIdx]
    setTimeout(() => {
        welcome.remove()
    }, 2500)
}

function changeMessage(event) {
    let msg = document.getElementById("msg")
    let dir = event.target.dataset.direction
    let audio = document.querySelector(".msg-audio")
    // Move right, else left
    if (dir === "right") {
        if (msgIdx + 1 < MESSAGE_PARTS.length) {
            msgIdx++;
            msg.innerHTML = MESSAGE_PARTS[msgIdx]
            audio.currentTime = 0
            audio.src = MESSAGE_AUDIO_PATHS[msgIdx]
            audio.pause()
        } else {
            // Detach message box, attach resources
            let parent = document.querySelector(".msg-container")
            parent.style.display = "none";
            let resources = document.querySelector(".resources")
            resources.style.display = "flex";
        }
    } else {
        if (msgIdx - 1 > -1) {
            msgIdx--;
            msg.innerHTML = MESSAGE_PARTS[msgIdx]
            audio.currentTime = 0
            audio.src = MESSAGE_AUDIO_PATHS[msgIdx]
            audio.pause()
        }
    }

    // Default silence
    if (audio.src.endsWith("undefined")) {
        audio.src = MESSAGE_AUDIO_PATHS[0]
    }
}

for (let button of document.querySelectorAll(".control")) {
    button.addEventListener("click", changeMessage)
}

async function toggleAudio() {
    let audio = document.querySelector(".msg-audio")
    if (audio.paused) {
        audio.currentTime = 0
        await audio.play()
    }
}

document.querySelector(".msg-sound-control").addEventListener("click", toggleAudio)