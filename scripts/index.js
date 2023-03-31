// Binding to the enter message rather than the screen
// For browsers, entry screen required as autoplay is disallowed
let clickCount = 0
function start() {
    let welcome = document.querySelector(".welcome-popover")
    welcome.style.opacity = 0;
    let music = document.querySelector(".bg-music")
    if (music && clickCount === 0) {
        clickCount++;
        console.log("Playing: Finding Mithral by Purple Planet...")
        music.muted = false
        music.play()
    }
    setTimeout(() => {
        welcome.remove()
    }, 2500)
}