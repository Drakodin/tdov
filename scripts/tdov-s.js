const post2025 = async () => {
    let mediaPath = "media/audio/2025/yeah_you_heard_it.wav"

    let audioPlayer = document.querySelector(".bg-music")
    let lockMap = []
    // Use async locking
    await lockedAudio(mediaPath, audioPlayer, lockMap)

    for (let button of document.querySelectorAll(".msg-control")) {
        button.addEventListener("click", changeMessage)
    }

    document.getElementById("msg").innerText = "No one can stop me or anyone from celebrating, buttons work again, click for helpful resources."
    document.getElementsByTagName("body")[0].removeChild(
        document.getElementById("anim-div-root")
    )

    lockMap.forEach(interval => {
        clearInterval(interval)
    })
}

const lockedAudio = async (mediaPath, audioPlayer, lockMap) => {
    let audioControls = document.querySelectorAll(".msg-control")

    audioControls.forEach(node => {
        node.removeEventListener("click", changeMessage);
    })

    return new Promise(res => {
        audioPlayer.pause()
        audioPlayer.volume = 0.5;
        audioPlayer.src = mediaPath
        audioPlayer.loop = false
        audioPlayer.play()

        document.getElementById("msg").innerText =
            "Read message_2025.md for more information about this."
        
    
        setTimeout(() => {
            render2025(lockMap)
        }, 3000)

        audioPlayer.onended = res
    })
}

const render2025 = (lockMap) => {
    let imgId = 0;
    let anim = document.createElement("div")
    anim.className = "center-div-eo"
    anim.id = "anim-div-root"
    let root = document.getElementsByTagName("body")[0]
    root.appendChild(anim)
    setTimeout(() => {
        root.removeChild(anim)
    }, 2000)

    setTimeout(() => {
        anim.className = "center-div-song"
        root.appendChild(anim)
        lockMap.push(setInterval(() => {
            runAnimLoop2025(anim, imgId)
            imgId++;
        }, 666)) // Yeah, 2/3 of a second, how fitting
    }, 15000)
}

const runAnimLoop2025 = (animRoot, img) => {
    animRoot.style.backgroundImage = `url(style/assets/2025-anim/march_${(img % 4) + 1}.png`
}

// This was added in 2025 because in 2025, TDOV was barred as a holiday by the president.
// Last year, Easter (first Sunday after the full moon) and TDOV (Always March 31) were the same day and that outraged some people.
// That group basically runs the show right now for the US, and mind you, *I never had any influence to start* so I'm meming this year.
const SP_VERSIONS = [
    2
]

const SP_VERSIONS_MAP = {
    2: {
        "animation": post2025
    }
}

function isRedirectYear(version) {
    return SP_VERSIONS.includes(version);
}

async function loadModule(version) {
    SP_VERSIONS_MAP[version]["animation"]()
}