
// Header ist durchsichtig solange Scrollposition auf 0 sonst weiss
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const gamingPc = document.querySelector('.gamingPc')
    const officePc = document.querySelector('.officePc')
    const kabel = document.querySelector('.kabel')
    const logo = document.querySelector('.logoBlackandWhite')
    const profile = document.querySelector('.profileBlackandWhite')
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        header.classList.remove('notTransparent');
        gamingPc.classList.remove('notTransparent');
        officePc.classList.remove('notTransparent');
        kabel.classList.remove('notTransparent');
        logo.src = '/images/LogoWhite.svg';
        profile.src = '/images/profilePictureWhite.svg'
    } else {
        header.classList.add('notTransparent');
        gamingPc.classList.add('notTransparent');
        officePc.classList.add('notTransparent');
        kabel.classList.add('notTransparent');
        logo.src = '/images/LogoBlack.svg';
        profile.src = '/images/profilePictureBlack.svg'
    }
});