// less sass für css

let header
let headerHeight

$(document).ready(() => {
    header = $('header')
    headerHeight = $(header).outerHeight()
    console.log(headerHeight)
})


let lastScrollTop = 0
$(document).scroll(() => {

    let offset = $('header').offset().top
    if (offset >= 5) {
        $(header).addClass('shadow')
    } else {
        $(header).removeClass('shadow')
    }
    if (offset >= headerHeight) {
        console.log('scroll')
        $(header).addClass('hide')
    }

    let st = $(this).scrollTop();
    if (st < lastScrollTop) {
        // downscroll code
        $(header).removeClass('hide')
    }
    lastScrollTop = st;
})