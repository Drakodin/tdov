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
        let body = document.querySelector("body")
        if (content && !body) {
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
    [
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
    ],
    [
        "..."
    ]
]

const MESSAGE_AUDIO_PATHS = [
    [
        "media/audio/2023/complete_silence.wav",
        "media/audio/2023/hey.wav",
        "media/audio/2023/dontworry.wav",
        "media/audio/2023/appreciate.wav",
        "media/audio/2023/here.wav",
        "media/audio/2023/outnot.wav",
        "media/audio/2023/valid.wav",
        "media/audio/2023/relate.wav",
        "media/audio/2023/flag.wav",
        "media/audio/2023/pipe_dreams.wav",
        "media/audio/2023/lost.wav",
        "media/audio/2023/found.wav",
        "media/audio/2023/hope.wav",
        "media/audio/2023/here_2.wav",
        "media/audio/2023/stop.wav",
        "media/audio/2023/powerful.wav",
        "media/audio/2023/tdov.wav"
    ],
    [

    ]
]