// less sass für css

let header
let headerHeight
let wHeight

$(document).ready(() => {
    header = $('header')
    headerHeight = $(header).outerHeight()
    $('.top').css('margin-top', headerHeight + 'px')
    console.log('header height: ', headerHeight)
    
    wHeight = $(window).innerHeight()
    console.log('window height: ', wHeight)
    let topHeight = (wHeight - headerHeight)
    
    topHeight = topHeight - (topHeight/4)
    console.log(topHeight)
    let topContentHeight = $('.topContent').innerHeight()
    console.log(topContentHeight)
    let topContentPadding = topHeight - topContentHeight
    console.log(topContentPadding)
    $('.topContent').css('padding', topContentPadding + 'px 0')
    
})

$(window).resize( ()=> {
    console.log('resize')
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