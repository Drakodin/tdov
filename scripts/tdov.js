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
    "Don't worry, I see you.",
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
    "So if no one else is here for you, know that I am.",
    "No one can stop you.",
    "Because you're powerful.",
    "Happy Trans Day of Visibility."
]