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