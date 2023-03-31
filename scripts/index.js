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
    console.log(dir)
    // Move right, else left
    if (dir === "right") {
        if (msgIdx + 1 < MESSAGE_PARTS.length) {
            ++msgIdx;
            msg.innerHTML = MESSAGE_PARTS[msgIdx]
        }
    } else {
        if (msgIdx - 1 > 0) {
            --msgIdx;
            msg.innerHTML = MESSAGE_PARTS[msgIdx]
        }
    }
}

for (let button of document.querySelectorAll(".control")) {
    button.addEventListener("click", changeMessage)
}

function toggleAudio(event) {
    let audio = document.querySelector(".msg-audio")
    let icon = event.target;
    if (audio.paused) {
        audio.currentTime = 0
        audio.play()
        icon.classList.remove("fa-volume-xmark")
        icon.classList.add("fa-volume-high")
    } else {
        audio.pause()
        icon.classList.remove("fa-volume-high")
        icon.classList.add("fa-volume-xmark")
    }
}

document.querySelector(".msg-sound-control").addEventListener("click", toggleAudio)