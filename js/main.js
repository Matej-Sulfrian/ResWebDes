// less sass für css

let header
let headerHeight
let wHeight

window.addEventListener('load', () => {
    // header = $('header')
    // headerHeight = $(header).outerHeight()
    // $('.topHead').css('margin-top', headerHeight + 'px')
    // console.log('header height: ', headerHeight)

    // wHeight = $(window).innerHeight()
    // console.log('window height: ', wHeight)
    // let topHeight = (wHeight - headerHeight)

    // topHeight = topHeight - (topHeight/4)
    // console.log(topHeight)
    // let topContentHeight = $('.topContent').innerHeight()
    // console.log(topContentHeight)
    // let topContentPadding = topHeight - topContentHeight
    // console.log(topContentPadding)
    // $('.topContent').css('padding', topContentPadding + 'px 0')
    console.log('load')
    sizeHeaderAndTop()
    

})

window.addEventListener('resize', () => {
    console.log('########### resize ############')
    sizeHeaderAndTop()
})

function sizeHeaderAndTop() {


    header = $('header')
    headerHeight = $(header).outerHeight()
    $('.topHead').css('margin-top', headerHeight + 'px')
    console.log('header height: ', headerHeight)

    wHeight = $(window).innerHeight()
    console.log('window height: ', wHeight)
    let topHeight = (wHeight - headerHeight)

    topHeight = topHeight - (topHeight / 4)
    console.log('top height: ', topHeight)
    let topContentHeight = 384
    console.log('top content height: ', topContentHeight)
    let topContentPadding = topHeight - topContentHeight - (headerHeight * 1.1)
    if (topContentPadding < 80) {
        topContentPadding = 80
    }
    console.log('top content padding: ', Math.abs(topContentPadding))
    // $('.topContent').css('padding', Math.abs(topContentPadding) + 'px')

    $('.topContent').css('padding-bottom', (Math.abs(topContentPadding) * 2) + 'px')

}


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
    let stripeBox = document.querySelector('.row2 .stripe-box')
    if (elementInViewport2(stripeBox) && stripeBox.classList.contains('hide')) {
            setTimeout(() => {
                stripeBox.classList.remove('hide')
            }, 150)
    } else if (!elementInViewport2(stripeBox) && !stripeBox.classList.contains('hide')) {
        stripeBox.classList.add('hide')
    }
})

function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }