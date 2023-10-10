// script.js
document.addEventListener('DOMContentLoaded', function () {
    const openModalDiv = document.getElementById('openModalDiv');
    const signupModal = document.getElementById('signupModal');
    const signupForm = document.getElementById('signupForm');
    const dniInput = document.getElementById('dni');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const telephoneInput = document.getElementById('telephone');
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const clearBtn = document.getElementById('clearBtn');

    openModalDiv.addEventListener('click', function(event) {
        signupModal.style.display = 'block';
        event.preventDefault();
    });

    cancelBtn.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    clearBtn.addEventListener('click', () => {
        dniInput.value = '';
        firstNameInput.value = '';
        lastNameInput.value = '';
        telephoneInput.value = '';
        emailInput.value = '';
    });

    submitBtn.addEventListener('click', () => {
        // Validate and store user information in localStorage
        const dni = dniInput.value.trim();
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const telephone = telephoneInput.value.trim();
        const email = emailInput.value.trim();

        // Perform validation here (e.g., DNI, telephone, email format)

        // Store in localStorage
        const userData = {
            dni,
            firstName,
            lastName,
            telephone,
            email,
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Close the modal
        signupModal.style.display = 'none';
    });
});
