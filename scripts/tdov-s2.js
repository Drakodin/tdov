/**
 * Singleton class that manages the state of the chat
 */
class TdovAI {
    #renderRoot = null;
    #ttsAgent = null;
    static #session = undefined;

    constructor() {
        if (TdovAI.#session) {
            return TdovAI.#session
        } else {
            this.#ttsAgent = new Tsai()
            this._load()
            TdovAI.#session = this
        }
    }

    /**
     * Caches previous site resources in a class property and then strips the body tag to replace with the container
     */
    _replace_root = () => {
        let body = document.querySelector("body")
        sessionStorage.setItem("webContent", body.innerHTML)
        body.innerHTML = ""
        body.style.height = "100%"

        let root = document.createElement("div")
        root.id = "root2026"
        body.append(root)
        this.#renderRoot = root

        this._load_simple_chat()
    }

    _load_simple_chat = () => {
        const chatPanel = document.createElement("div")
        chatPanel.className = "tdov-ai-chat tdov-ai-panel-reverse"
        const chatAnchor = document.createElement("div")
        chatAnchor.id = "tdov-chat-anchor"
        chatPanel.append(chatAnchor)
        const chatOptions = document.createElement("div")
        const option = document.createElement("div")
        chatOptions.className = "tdov-ai-chat-option-container"
        option.className = "tdov-ai-chat-option"
        option.innerText = "Generate a message like previous years for TDOV."
        option.onclick = async () => {
            const userMessage = document.createElement('div')
            userMessage.className = "tdov-message tdov-user-message"
            userMessage.innerText = option.innerText
            chatPanel.insertBefore(userMessage, chatPanel.firstElementChild)
            chatAnchor.scrollIntoView()
            await this.query(option.innerText)
        }
        chatOptions.append(option)

        this.#renderRoot.append(chatPanel)
        this.#renderRoot.append(chatOptions)
    }

    /**
     * Loads the new body object after 1 second
     */
    _load = () => {
        let body = document.querySelector("body")
        body.style.height = "0px"
        setTimeout(this._replace_root, 1000)
    }

    /**
     * Executes an agent query using userPrompt.
     * @param {string} userPrompt 
     */
    query = async (userPrompt) => {
        if (userPrompt === "Show me the resources and go away.") {
            this._teardown()
            return
        }

        let renderDiv = document.createElement("div")
        renderDiv.className = "tdov-ai-message tdov-message"
        let container = this.#renderRoot.querySelector(".tdov-ai-chat")
        const anchor = document.getElementById("tdov-chat-anchor")
        container.insertBefore(renderDiv, container.firstElementChild);
        anchor.scrollIntoView()
        await this.runQuery(userPrompt, renderDiv)
    }

    runQuery = async (userPrompt, renderDiv) => {
        let response = await fetchlike({
            prompt: userPrompt,
            headers: {
                "Content-Type": "application/json",
            }
        })

        const reader = response.body.getReader();

        reader.read().then(async function pump ({done, value}) {
            let activeAISess = new TdovAI()

            if (done) {
                // Get the only option and change it
                let option = document.querySelector(".tdov-ai-chat-option")
                option.innerText = "Show me the resources and go away."
                return;
            }

            // Create a row inside the rendered div containing the content
            let contentBlock = document.createElement("div")
            contentBlock.className = "tdov-ai-message-content-block"
            let contentBlockMsg = document.createElement("div")
            contentBlockMsg.innerText = value.substring(1);
            let contentBlockTts = document.createElement("i")
            contentBlockTts.className = "fa-solid fa-volume-high clickable"
            contentBlockTts.onclick = () => {
                activeAISess.tts(Number.parseInt(value[0]))
            }

            contentBlock.append(contentBlockMsg)
            contentBlock.append(contentBlockTts)

            renderDiv.append(contentBlock)

            await activeAISess.tts(Number.parseInt(value[0]))

            return reader.read().then(pump)
        })
    }

    async tts(idx) {
        await this.#ttsAgent.readMessage(this.#renderRoot, idx)
    }

    /**
     * Tears down the current running session of the chat and restores the original body
     */
    _teardown = () => {
        let body = document.querySelector("body")
        body.innerHTML = sessionStorage.getItem("webContent") // Retrieve cached resources from sessionStorage

        // \# Detach message box, attach resources, copied from the normal index
        let parent = document.querySelector(".msg-container")
        parent.style.display = "none";
        [
            document.getElementById("menu-bg"),
            document.getElementById("menu-welcome"),
            document.getElementById("settings-gear"),
            document.getElementById("menu-settings")
        ].forEach(v => v.style.display = "none")
        let resources = document.querySelector(".resources")
        resources.style.display = "flex";

        let originalMusic = document.querySelector(".bg-music")
        let additionalAudio = document.createElement("audio")
        additionalAudio.id = "tdov-ai-add-on-audio"
        additionalAudio.pause()
        additionalAudio.src = "media/audio/2026/add-on.wav"
        additionalAudio.volume = 0.6
        additionalAudio.loop = false
        body.append(additionalAudio)

        originalMusic.muted = false
        originalMusic.play()

        setTimeout(() => {
            additionalAudio.play()
        }, 5000)

    }
}

/**
 * Simple wrapper class with text synthesization handled by a trained voice model
 * 
 * \# The usage of "ts" is intentional, both for the niceness of the name and the underlying meaning of it
 */
class Tsai {
    /**
     * Loads audio based on the TTS Index and plays it
     * 
     * @param {string} message 
     * @param {Element} root 
     * @param {number} ttsIdx 
     */
    async readMessage(root, ttsIdx) {
        let audioPath = `media/audio/2026/tts_${ttsIdx}.wav`
        let audioPlayer = document.querySelector(".tdov-ai-audio")
        if (!audioPlayer) {
            audioPlayer = document.createElement("audio")
            audioPlayer.className = "tdov-ai-audio"
        }
        root.append(audioPlayer)
        audioPlayer.pause()
        audioPlayer.volume = 1.0;
        audioPlayer.src = audioPath
        audioPlayer.loop = false

        return new Promise(res => {
            audioPlayer.play()
            audioPlayer.onended = res
        })
    }
}
