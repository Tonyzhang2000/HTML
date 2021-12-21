const progress = document.getElementById('progess')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')

let currrentActive = 1

next.addEventListener('click', () => {
    currrentActive++

    if(currrentActive > circle.length) {
        currrentActive = circle.lenght
    }

    update()
})

prev.addEventListener('click', () => {
    currrentActive--

    if(currrentActive < 1) {
        currrentActive = 1
    }

    update()
})

function update() {
    circle.forEach((circle, idx) => {
        if(idx < currrentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (circle.length - 1)) * 100 + '%'

    if(currrentActive === 1) {
        prev.disabled = true
    } else if(currrentActive === circle.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}