/*
 * \# Since this site is static, we can't make real API requests, but we can fake them
 */

/**
 * Mock fetch function that returns a preset partition string
 * @param {{prompt: string, headers: Record<String, String>}} requestBody 
 * @returns {status: number, body: ReadableStream}
 */
async function fetchlike(requestBody) {
    let stream = new ReadableStream({
        start: (controller) => {
            let partitions = [
                "Every day, we open our eyes to a dreary world.",
                "However, we must also still have hope in our hearts.",
                "And a burning fire in our eyes.",
                "As we are not powerless and awaiting dark futures.",
                "You, me, all of us, we have the power.",
                "So rise up, raise our flag, and lead the action.",
                "Call all for unity, and celebrate with pride and passion.",
                "A fractured community - one hurt by its own - cannot begin to enact change.",
                "It's time to rise up and shine as bright as stars themselves.",
            ]

            // Induce artificial latency as to mimic the estimated latency of a real agent call
            for (let idx = 0; idx < partitions.length; idx++) {
                setTimeout(() => {
                    controller.enqueue(`${idx}${partitions[idx]}`)
                }, (idx + 1) * 300)
            }

            setTimeout(() => controller.close(), (partitions.length + 1) * 300)
        },
    })

    return {
        status: 200,
        body: stream
    };
}