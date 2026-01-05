export function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');

    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;
    const intervalTime = 5000;

    const goToSlide = (index) => {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        currentSlide = (index + slideCount) % slideCount;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    const startTimer = () => { slideInterval = setInterval(nextSlide, intervalTime); };
    const stopTimer = () => { clearInterval(slideInterval); };
    const resetTimer = () => { stopTimer(); startTimer(); };

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => { goToSlide(index); resetTimer(); });
    });

    const sliderContainer = document.querySelector('.hero-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopTimer);
        sliderContainer.addEventListener('mouseleave', startTimer);
    }

    startTimer();
}
