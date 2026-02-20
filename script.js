document.addEventListener('DOMContentLoaded', () => {
    // Implement simple slider logic
    const cards = document.querySelectorAll('.card');
    const btnNext = document.querySelector('.nav-btn.next');
    const btnPrev = document.querySelector('.nav-btn.prev');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (btnNext && btnPrev && cards.length > 0) {
        btnNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            showCard(currentIndex);
        });

        btnPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            showCard(currentIndex);
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add a keyframe animation programmatically for the slider
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// 3D Modal Logic
window.open3DModal = function () {
    const modal = document.getElementById('modelModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // prevent scrolling
    }
}

window.close3DModal = function () {
    const modal = document.getElementById('modelModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // enable scrolling
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function (event) {
    const modal = document.getElementById('modelModal');
    if (event.target === modal) {
        close3DModal();
    }
});
