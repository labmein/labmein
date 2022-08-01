function slider() {
    const indicator = document.body.querySelectorAll(".swiper__block")
    const btnNext = document.body.querySelector(".swiper__button-next")
    const btnPrev = document.body.querySelector(".swiper__button-prev")
    const items = document.body.querySelectorAll(".accelerator__item")
    const images = document.body.querySelectorAll(".accelerator__img")
    let current = 0
    const length = items.length

    function changeClassname(n) {
        items[current].classList.remove("accelerator__opacity")
        images[current].classList.remove("accelerator__opacity")
        indicator[current].classList.remove("swiper__block--active")
        current = n
        items[current].classList.add("accelerator__opacity")
        images[current].classList.add("accelerator__opacity")
        indicator[current].classList.add("swiper__block--active")
    }

    btnNext.addEventListener('click', evt => {
        evt.preventDefault()
        changeClassname((current + 1) % length)
    })

    btnPrev.addEventListener('click', evt => {
        evt.preventDefault()
        changeClassname(current == 0 ? length - 1 : current - 1)
    })

    indicator.forEach((element) => {
        element.addEventListener('click', evt => {
            evt.preventDefault()
            var arr = Array.prototype.slice.call(indicator)
            changeClassname(arr.indexOf(element))
        })
    })
}

slider()

const items_texts = [["Заголовок1", "Текст1"], ["Заголовок2", "Текст2"], ["Заголовок3", "Текст3"], ["Заголовок4", "Текст4"], ["Заголовок5", "Текст5"], ["Заголовок6", "Текст6"], ["Заголовок7", "Текст7"]]
const items_default = ["Hello", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc blandit in volutpat senectus nullam congue fermentum, egestas. Purus velit cum proin at risus proin vivamus lectus et. Sed fermentum ullamcorper leo ipsum, nec volutpat dignissim. Sed tellus felis purus, quisque enim magna dolor facilisis sed."]

function description() {
    const block_center = document.body.querySelector(".block_center")
    const block_left = document.body.querySelector(".block_left")
    const block_right = document.body.querySelector(".block_right")
    const block_left_up = document.body.querySelector(".block_left_up")
    const block_left_down = document.body.querySelector(".block_left_down")
    const block_right_up = document.body.querySelector(".block_right_up")
    const block_right_down = document.body.querySelector(".block_right_down")
    const blocks = [block_center, block_left, block_right, block_left_up, block_left_down, block_right_up, block_right_down]
    const description__title = document.body.querySelector(".description__title")
    const description__text = document.body.querySelector(".description__text") 

    blocks.forEach((element) => {
        element.addEventListener('click', evt => {
            evt.preventDefault()
            if (element.classList.contains("big_image")) {
                description__title.textContent = items_default[0]
                description__text.textContent = items_default[1]
                element.classList.remove("big_image")
            } else {
                element.classList.add("big_image")
                description__title.textContent = items_texts[blocks.indexOf(element)][0]
                description__text.textContent = items_texts[blocks.indexOf(element)][1]
            }
        })
    })
}

description()

function contacts() {
    const contacts__item = document.body.querySelectorAll(".contacts__item")
    let current

    contacts__item.forEach((element) => {
        const contacts__img = element.querySelector(".contacts__img")
        contacts__img.addEventListener('click', evt => {
            evt.preventDefault()
            if (element.classList.contains("active")) {
                element.classList.remove("active")
                current = undefined
            } else {
                if (current !== undefined) {
                    current.classList.remove("active")
                }
                current = element
                element.classList.add("active")
            }
        })
    })
}

contacts()