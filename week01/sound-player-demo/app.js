const nature = document.getElementById('nature')
const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')
const stopBtn = document.getElementById('stopBtn')
const skipBack = document.getElementById('skipBack')
const skipFor = document.getElementById('skipFor')


function theLog() {
    console.log('Test')
}

console.dir(nature)

// playBtn.addEventListener('click', theLog())
playBtn.addEventListener('click', function() {
    nature.play()
})

pauseBtn.addEventListener('click', function() {
    nature.pause()
})

stopBtn.addEventListener('click', function() {
    nature.pause()
    nature.currentTime = 0;
})

skipBack.addEventListener('click', function () {
    // nature.currentTime = nature.currentTime - 10 
    nature.currentTime -= 10
})

skipFor.addEventListener('click', function() {
    nature.currentTime += 10
    // nature.currentTime = nature.currentTime + 10
})