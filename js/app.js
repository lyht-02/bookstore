
$(document).ready(() => {

  const navMenu = document.querySelector('.nav-menu')
  const navToggle = document.querySelector('.nav-toggle')
  const headerTop = document.querySelector('.header-top')
  const scrollTop = document.querySelector('.scroll-top')

  showMenu(navToggle,navMenu)
  showHeaderTop(headerTop)
  showScrollTop(scrollTop)

  
  $('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: `<button class="slide-left"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="slide-right"><i class="fas fa-chevron-right"></i></button>`,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  })

  $('.newest-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    arrows: true,
    prevArrow: `<button class="slide-left"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="slide-right"><i class="fas fa-chevron-right"></i></button>`,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        }
      },
    ]
  })
  
  $('.blog-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: `<button class="slide-left"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="slide-right"><i class="fas fa-chevron-right"></i></button>`,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
    ]
  })
})


function showMenu(toggle, menu) {
  if(toggle && menu) toggle.addEventListener('click', () => { menu.classList.toggle('show-menu') })
}

function showHeaderTop(headerTop) {
  if(headerTop) {
    window.addEventListener('scroll', () => {
      if (this.scrollY > 100) headerTop.classList.add('hide') 
      else headerTop.classList.remove('hide')
    })
  }
}

function showScrollTop(scrollTop) {
  if(scrollTop) {
    window.addEventListener('scroll', () => {
      if(this.scrollY > 500) scrollTop.classList.add('show-scroll')
      else scrollTop.classList.remove('show-scroll')
    })
  }
}
