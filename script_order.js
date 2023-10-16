document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const stepContents = document.querySelectorAll('.step-content');
    let currentStep = 0;

    function updateStepDisplay() {
        steps.forEach((step, index) => {
            if (index === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        stepContents.forEach((content, index) => {
            if (index === currentStep) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }

    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStepDisplay();
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            updateStepDisplay();
        }
    }

    // Handle "Next" and "Previous" button clicks
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    nextButton.addEventListener('click', nextStep);
    prevButton.addEventListener('click', prevStep);

    updateStepDisplay();
});
