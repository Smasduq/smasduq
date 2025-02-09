let shownav = document.querySelector('#check')
let nav = document.querySelector('.navbtn')
shownav.addEventListener('click', () =>  {
    shownav.classList.toggle('.menu');
    nav.classList.toggle('.navbtn')
})
