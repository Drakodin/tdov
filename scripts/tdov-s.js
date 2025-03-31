const post2025 = () => {
    let mediaPath = "media/audio/2025/yeah_you_heard_it.wav"

    let audioPlayer = document.querySelector(".bg-music")

    // Use async locking
    lockedAudio(mediaPath, audioPlayer).then(() => {
        let audioControls = document.querySelectorAll(".msg-control")

        audioControls.forEach(node => node.disabled = false)
    })
}

const lockedAudio = async (mediaPath, audioPlayer) => {
    let audioControls = document.querySelectorAll(".msg-control")

    audioControls.forEach(node => node.disabled = true)

    audioPlayer.pause()
    audioPlayer.volume = 0.5;
    audioPlayer.src = mediaPath
    audioPlayer.loop = false
    audioPlayer.play()
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

function loadModule(version) {
    SP_VERSIONS_MAP[version]["animation"]()
}