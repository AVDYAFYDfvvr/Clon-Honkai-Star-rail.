// Плавная прокрутка к якорям
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Анимация появления элементов при прокрутке
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Обработчик для кнопки CTA
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', function() {
                alert('Спасибо за интерес к Honkai: Star Rail! Игра скоро будет доступна для скачивания.');
            });
        });

        // Динамическое изменение заголовка при уходе со страницы
        let originalTitle = document.title;
        
        window.addEventListener('blur', () => {
            document.title = 'Вернитесь в Honkai: Star Rail!';
        });
        
        window.addEventListener('focus', () => {
            document.title = originalTitle;
        });