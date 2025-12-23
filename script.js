const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Toggle icon
    const icon = mobileToggle.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scroll with header offset (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
// --- Contact Form Handling with Formspree ---

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Check if Form ID is still placeholder
        const action = contactForm.getAttribute('action');
        if (action.includes('YOUR_FORM_ID')) {
            formStatus.textContent = 'Configuration required: Please add your Formspree ID in index.html';
            formStatus.classList.add('error');
            return;
        }

        // Change button state to loading
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-circle-notch fa-spin"></i>';
        submitBtn.disabled = true;

        // Clear previous status
        formStatus.className = 'form-status';
        formStatus.textContent = '';

        const formData = new FormData(this);

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success state
                submitBtn.innerHTML = 'Sent Successfully! <i class="fa-solid fa-check-double"></i>';
                submitBtn.classList.remove('btn-primary');
                submitBtn.style.backgroundColor = '#1e7e34';

                formStatus.textContent = 'Thank you! Your message has been sent. We will contact you shortly.';
                formStatus.classList.add('success');

                contactForm.reset();

                // Reset button after 5 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.add('btn-primary');
                    submitBtn.style.backgroundColor = '';
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Submission failed');
            }
        } catch (error) {
            // Error state
            submitBtn.innerHTML = 'Error Sending <i class="fa-solid fa-triangle-exclamation"></i>';
            submitBtn.disabled = false;

            formStatus.textContent = 'Oops! Something went wrong. Please check your connection or try again later.';
            formStatus.classList.add('error');
            console.error('Formspree Error:', error);

            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
            }, 5000);
        }
    });
}
