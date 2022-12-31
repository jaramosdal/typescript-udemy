(() => {
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    const currentAudio = AudioLevel.medium;

    console.log(currentAudio)
})()