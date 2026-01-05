export function initForm() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const action = contactForm.getAttribute('action');
        if (action.includes('YOUR_FORM_ID')) {
            formStatus.textContent = 'Configuration required: Please add your Formspree ID.';
            formStatus.className = 'form-status error';
            return;
        }

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-circle-notch fa-spin"></i>';
        submitBtn.disabled = true;

        formStatus.className = 'form-status';
        formStatus.textContent = '';

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                submitBtn.innerHTML = 'Sent Successfully! <i class="fa-solid fa-check-double"></i>';
                submitBtn.style.backgroundColor = '#1e7e34';
                formStatus.textContent = 'Thank you! Your message has been sent.';
                formStatus.className = 'form-status success';
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            submitBtn.innerHTML = 'Error Sending <i class="fa-solid fa-triangle-exclamation"></i>';
            submitBtn.disabled = false;
            formStatus.textContent = 'Oops! Something went wrong.';
            formStatus.className = 'form-status error';
            setTimeout(() => { submitBtn.innerHTML = originalBtnText; }, 5000);
        }
    });
}
