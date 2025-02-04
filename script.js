// Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Mobil menüyü kapat
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        // Smooth scroll
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Logo click handler
document.querySelector('.logo-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll olayında navbar'ı sadece görünür tutalım, gizlemeyelim
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.pageYOffset > 0) {
        navbar.style.background = 'rgba(10, 10, 31, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 31, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Service Detail Buttons
const detailButtons = document.querySelectorAll('.detail-btn');
detailButtons.forEach(button => {
    button.addEventListener('click', () => {
        showServiceDetails();
    });
});

function showServiceDetails() {
    // Modal oluşturma
    const modal = document.createElement('div');
    modal.className = 'service-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Yakında!</h3>
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p>Bu özellik çok yakında hizmetinizde olacak.</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Modal animasyonu için timeout
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });

    // Modal kapatma
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape tuşu ile kapatma
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Demo Chart
let demoChart;
const ctx = document.getElementById('demoChart').getContext('2d');

function initializeChart() {
    demoChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Veri Analizi',
                data: [],
                borderColor: '#00f7ff',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });
}

// Demo Controls
document.getElementById('generateData').addEventListener('click', generateDemoData);
document.getElementById('runAnalysis').addEventListener('click', runAnalysis);
document.getElementById('generateReport').addEventListener('click', generateReport);

function generateDemoData() {
    // Örnek veri üretme kodu
}

function runAnalysis() {
    // İstatistiksel analiz simülasyonu
}

function generateReport() {
    // Rapor oluşturma simülasyonu
}

// Hero Grid Animation
function createHeroGrid() {
    const grid = document.getElementById('heroGrid');
    const lines = 30;

    // Yatay çizgiler
    for (let i = 0; i < lines; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line';
        line.style.top = `${(i / lines) * 100}%`;
        grid.appendChild(line);
    }

    // Dikey çizgiler
    for (let i = 0; i < lines; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line-vertical';
        line.style.left = `${(i / lines) * 100}%`;
        grid.appendChild(line);
    }
}

// Hero Stars Animation
function createStars() {
    const starsContainer = document.getElementById('heroStars');
    const numberOfStars = 50;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Rastgele pozisyon
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Rastgele animasyon süresi ve gecikmesi
        star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
        star.style.setProperty('--delay', `${Math.random() * 2}s`);
        
        starsContainer.appendChild(star);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createHeroGrid();
    initializeChart();
    createStars();
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Burada form verilerini işleyebilir veya API'ye gönderebilirsiniz
    console.log('Form verileri:', formData);

    // Form başarıyla gönderildi mesajı
    alert('Mesajınız başarıyla gönderildi!');
    contactForm.reset();
}); 