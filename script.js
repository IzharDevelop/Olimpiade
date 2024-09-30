// script.js
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');

nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        const section = document.querySelector(id);
        section.scrollIntoView({ behavior: 'smooth' });
    }
});

sections.forEach((section) => {
    section.addEventListener('click', () => {
        const links = section.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const url = link.getAttribute('href');
                window.open(url, '_blank');
            });
        });
    });
});

// script.js
const touchableImages = document.querySelectorAll('.touchable');

touchableImages.forEach((image) => {
    image.addEventListener('click', () => {
        const href = image.getAttribute('data-href');
        window.open(href, '_blank');
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.image-container').forEach((imageContainer) => {
  gsap.fromTo(
    imageContainer,
    { y: 100, opacity: 0 }, // Elemen awal di bawah viewport, opacity 0
    {
      y: 0, // Kembali ke posisi semula
      opacity: 1, 
      duration: 0.8, 
      scrollTrigger: {
        trigger: imageContainer,
        start: 'top 80%', // Animasi dimulai saat 80% elemen terlihat
        end: 'bottom 20%', // Animasi berakhir saat elemen 20% dari bawah viewport
        toggleActions: 'play none none reverse', // Berjalan saat scroll ke bawah, terbalik saat ke atas
        scrub: true // Menghaluskan animasi mengikuti kecepatan scroll 
      },
    }
  );
});