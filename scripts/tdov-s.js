const post2025 = () => {

}

// This was added in 2025 because in 2025, TDOV was barred as a holiday by the president.
// Last year, Easter (first Sunday after the full moon) and TDOV (Always March 31) were the same day and that outraged some people.
// That group basically runs the show right now for the US, and mind you, *I never had any influence to start* so I'm meming this year.
const SP_VERSIONS = [
    2
]

const SP_VERSIONS_MAP = {
    2: {
        "audio": `media/audio/2025/post.wav`,
        "animation": post2025
    }
}

function redirectYear(version) {
    return SP_VERSIONS.includes(version);
}

function loadModule(version) {
    
}