let shownav = document.querySelector('.nav')
let nav = document.querySelector('.navbtn')
shownav.addEventListener('click', () =>  {
    shownav.classList.toggle('.active');
    nav.classList.toggle('.active')
})
