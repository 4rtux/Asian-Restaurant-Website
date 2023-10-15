// script.js

// Variable que cuenta el n de validaciones correctas, si es igual a 4, se guarda en localStorage
var counter = 0;

document.addEventListener('DOMContentLoaded', function () {
    const openModalDiv = document.getElementById('openModalDiv');
    const signupModal = document.getElementById('signupModal');

    const dniInput = document.getElementById('dni');
    const dniValidationMessage = document.getElementById('dniValidationMessage');

    const firstNameInput = document.getElementById('firstName');
    const firstNameValidationMessage = document.getElementById('firstNameValidationMessage');

    const lastNameInput = document.getElementById('lastName');
    const lastNameValidationMessage = document.getElementById('lastNameValidationMessage');

    const telephoneInput = document.getElementById('telephone');
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const clearBtn = document.getElementById('clearBtn');

    openModalDiv.addEventListener('click', function(event) {
        dniValidationMessage.style.display = 'none';
        firstNameValidationMessage.style.display = 'none';
        lastNameValidationMessage.style.display = 'none';
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

        const numericPart = dni.slice(0, 8); // Get the first 8 characters (numeric part)
        const providedLetter = dni.slice(8); // Get the provided letter

        // Function to calculate the letter for a given DNI number
        function calculateDNILetter(dniNumber) {
            const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
            const numericDNI = dniNumber % 23;
            return letters.charAt(numericDNI);
        }

        if (dniInput.validity.valid) {
            const calculatedLetter = calculateDNILetter(Number(numericPart));
            
            if (calculatedLetter.toUpperCase() === providedLetter.toUpperCase()) {

                counter++;

                // Store in localStorage
                /*const userData = {
                    dni,
                    firstName,
                    lastName,
                    telephone,
                    email,
                };

                localStorage.setItem('userData', JSON.stringify(userData));
                */
            } else {
                dniValidationMessage.style.display = 'inline';
                dniValidationMessage.textContent = 'DNI is not valid.';
                dniValidationMessage.style.color = 'red';

                // Remove data from localStorage
                // localStorage.removeItem('userData');
            }
        } else {
            dniValidationMessage.style.display = 'inline';
            dniValidationMessage.textContent = 'DNI format is not valid.';
            dniValidationMessage.style.color = 'red';

            // Remove data from localStorage
            // localStorage.removeItem('userData');
        }
        
        if (firstNameInput.validity.valid) {
            counter++;
        } else {
            firstNameValidationMessage.style.display = 'inline';
            firstNameValidationMessage.textContent = 'Invalid First Name.';
            firstNameValidationMessage.style.color = 'red';
        }
        if (lastNameInput.validity.valid) {
            counter++;
        } else {
            lastNameValidationMessage.style.display = 'inline';
            lastNameValidationMessage.textContent = 'Invalid Last Name.';
            lastNameValidationMessage.style.color = 'red';
        }
        
        
        
        
        
        console.log(dniValidationMessage.textContent);

        // Check if the data was stored correctly
        var usr = localStorage.getItem('userData');
        console.log(usr);


        // Close the modal
        // signupModal.style.display = 'none';
    });
});
