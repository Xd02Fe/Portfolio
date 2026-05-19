// Exemplo Corrigido - Slider, Buttons, Scroll
document.addEventListener('DOMContentLoaded', function() {
    // Slider
    const itens = document.querySelectorAll('.conhecimento');
    let currentIndex = 0;
    function showSlide(index) {
        itens.forEach((item, i) => item.classList.toggle('selecionado', i === index));
        currentIndex = index;
    }
    document.getElementById('btn-avancar').onclick = () => showSlide((currentIndex + 1) % itens.length);
    document.getElementById('btn-voltar').onclick = () => showSlide((currentIndex - 1 + itens.length) % itens.length);
    setInterval(() => showSlide((currentIndex + 1) % itens.length), 4000);

    // Buttons
    document.getElementById('GitButton').onclick = () => window.open('https://github.com/jvexample', '_blank');
    document.getElementById('LinkedinButton').onclick = () => window.open('https://linkedin.com/in/jvexample', '_blank');

    // Smooth scroll
    document.querySelectorAll('a[href^=\"#"]').forEach(a => a.onclick = e => {
        e.preventDefault();
        document.querySelector(a.href).scrollIntoView({behavior: 'smooth'});
    });
});
