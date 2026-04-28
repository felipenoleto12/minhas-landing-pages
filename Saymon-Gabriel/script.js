// Counter Animation
const counter = document.getElementById('counter');
const target = +counter.getAttribute('data-target');

const animateCounter = () => {
    const value = +counter.innerText.replace(/\./g, '');
    const data = target;
    const time = 200;
    const step = data / time;

    if (value < data) {
        const newValue = Math.ceil(value + step);
        counter.innerText = newValue.toLocaleString('pt-BR');
        setTimeout(animateCounter, 1);
    } else {
        counter.innerText = data.toLocaleString('pt-BR');
    }
};

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounter();
        observer.disconnect();
    }
}, { threshold: 0.5 });

if (counter) observer.observe(counter);

// FAQ Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close other items
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
        
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
