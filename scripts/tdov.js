// Global: to hold msg text index
const checkTime = (time = null) => {
    let date = new Date();
    if (time) {
        date = new Date(time);
    }

    // Using browser local time
    let day = date.getDate();
    let month = date.getMonth();

    console.log(date)

    if (!(day === 31 && month === 2)) {
        let body = document.querySelector("body")

        if (body) {
            let content = body.innerHTML
            sessionStorage.setItem("webContent", content)
            document.querySelector("html").removeChild(body)
        }
    } else {
        let content = sessionStorage.getItem("webContent")
        if (content) {
            let body = document.createElement("body")
            let html = document.querySelector("html")
            body.innerHTML = content
            html.appendChild(body)
        }
    }
}

// Run immediately, this is the only function in this JS file and it will be included in the <head>
window.onload = () => checkTime()

const MESSAGE_PARTS = [
    "...",
    "Hey!",
    "Don't be afraid! Don't worry! I see you.",
    "I appreciate you, for everything that you are, and for everything you will be.",
    "I'll be here for you today.",
    "Whether you're out or not, you're still here.",
    "You're valid.",
    "For those who aren't out, I relate.",
    "With my folded flag on my bedroom floor.",
    "Images and distant pipe dreams of life in the future.",
    "I was lost too, broken I said.",
    "But people found me, reached out.",
    "And gave me back the hope I lost then.",
    "If no one else is here for you, know that I am.",
    "No one can stop you.",
    "Because you're powerful.",
    "Happy Trans Day of Visibility."
]

const MESSAGE_AUDIO_PATHS = [
    "media/audio/complete_silence.wav",
    "media/audio/hey.wav",
    "media/audio/dontworry.wav",
    "media/audio/appreciate.wav",
    "media/audio/here.wav",
    "media/audio/outnot.wav",
    "media/audio/valid.wav",
    "media/audio/relate.wav",
    "media/audio/flag.wav",
    "media/audio/pipe_dreams.wav",
    "media/audio/lost.wav",
    "media/audio/found.wav",
    "media/audio/hope.wav",
    "media/audio/here_2.wav",
    "media/audio/stop.wav",
    "media/audio/powerful.wav",
    "media/audio/tdov.wav"
]