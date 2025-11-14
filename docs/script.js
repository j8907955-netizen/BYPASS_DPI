// Получение количества звезд с GitHub
async function fetchGitHubStars() {
    try {
        const response = await fetch('https://api.github.com/repos/Flowseal/BYPASS_DPI');
        const data = await response.json();
        const starsElement = document.getElementById('stars');
        if (starsElement && data.stargazers_count) {
            starsElement.textContent = `⭐ ${data.stargazers_count.toLocaleString()}`;
        }
    } catch (error) {
        console.log('Не удалось загрузить количество звезд');
    }
}

// Получение последнего релиза и прямой ссылки на скачивание
async function fetchLatestRelease() {
    try {
        const response = await fetch('https://api.github.com/repos/Flowseal/BYPASS_DPI/releases/latest');
        const data = await response.json();
        
        // Обновляем версию
        const versionElements = document.querySelectorAll('.version-number');
        versionElements.forEach(el => {
            el.textContent = data.tag_name || 'v1.0.0';
        });
        
        // Находим ZIP файл в assets
        const zipAsset = data.assets.find(asset => 
            asset.name.toLowerCase().endsWith('.zip') || 
            asset.name.toLowerCase().endsWith('.rar')
        );
        
        if (zipAsset) {
            // Обновляем кнопки скачивания
            const downloadButtons = document.querySelectorAll('.download-direct');
            downloadButtons.forEach(btn => {
                btn.href = zipAsset.browser_download_url;
                btn.setAttribute('download', zipAsset.name);
            });
            
            // Обновляем размер файла
            const sizeElement = document.querySelector('.download-size');
            if (sizeElement && zipAsset.size) {
                const sizeMB = (zipAsset.size / 1024 / 1024).toFixed(2);
                sizeElement.textContent = `Размер: ~${sizeMB} МБ`;
            }
            
            // Обновляем количество скачиваний
            const downloadCount = document.querySelector('.download-count');
            if (downloadCount && zipAsset.download_count) {
                downloadCount.textContent = `Скачиваний: ${zipAsset.download_count.toLocaleString()}`;
            }
        }
    } catch (error) {
        console.log('Не удалось загрузить информацию о релизе');
    }
}

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применяем анимацию к карточкам
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubStars();
    fetchLatestRelease();
    
    const animatedElements = document.querySelectorAll('.feature-card, .faq-item, .download-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Добавляем эффект параллакса для hero секции
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 600;
    }
});
