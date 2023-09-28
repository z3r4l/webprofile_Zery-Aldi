const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {  
    if (window.scrollY > 100) {
        nav.style.backgroundColor = '#053B50';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
   
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', scrollToTop);