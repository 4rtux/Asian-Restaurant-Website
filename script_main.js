// script.js

// Variable que cuenta el n de validaciones correctas, si es igual a 5, se guarda en localStorage
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
    const telephoneValidationMessage = document.getElementById('telephoneValidationMessage');

    const emailInput = document.getElementById('email');
    const emailValidationMessage = document.getElementById('emailValidationMessage');

    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const clearBtn = document.getElementById('clearBtn');

    openModalDiv.addEventListener('click', function(event){
        dniValidationMessage.style.display = 'none';
        firstNameValidationMessage.style.display = 'none';
        lastNameValidationMessage.style.display = 'none';
        telephoneValidationMessage.style.display = 'none';
        emailValidationMessage.style.display = 'none';
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
        const telephone = telephoneInput.value.replace(/ /g, '');
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

        if (/^[0-9]{8}[a-zA-Z]$/.test(dni)) {
            const calculatedLetter = calculateDNILetter(Number(numericPart));
            
            if (calculatedLetter.toUpperCase() === providedLetter.toUpperCase()) {
                counter++;

            } else {
                dniValidationMessage.style.display = 'inline';
                dniValidationMessage.textContent = 'DNI is not valid.';
                dniValidationMessage.style.color = 'red';

            }
        } else {
            dniValidationMessage.style.display = 'inline';
            dniValidationMessage.textContent = 'DNI format is not valid.';
            dniValidationMessage.style.color = 'red';

        }
        // Validate first name and last name
        
        if (/^[a-zA-Z ]+$/.test(firstName)) {
            counter++;
        } else {
            firstNameValidationMessage.style.display = 'inline';
            firstNameValidationMessage.textContent = 'Invalid First Name.';
            firstNameValidationMessage.style.color = 'red';
        }
        if (/^[a-zA-Z ]+$/.test(lastName)) {
            counter++;
        } else {
            lastNameValidationMessage.style.display = 'inline';
            lastNameValidationMessage.textContent = 'Invalid Last Name.';
            lastNameValidationMessage.style.color = 'red';
        }
        
        // Validate telephone number
        if (/^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/.test(telephone)) {
            counter++;
        } else {
            telephoneValidationMessage.style.display = 'inline';
            telephoneValidationMessage.textContent = 'Invalid Telephone.';
            telephoneValidationMessage.style.color = 'red';
        }

        // Validate email
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$/.test(email)) {
            counter++;
        } else {
            emailValidationMessage.style.display = 'inline';
            emailValidationMessage.textContent = 'Invalid Email.';
            emailValidationMessage.style.color = 'red';
        }

        // Check if all validations were correct
        if (counter == 5) {
            // Store in localStorage
            const userData = {
                dni,
                firstName,
                lastName,
                telephone,
                email,
            };

            localStorage.setItem('userData', JSON.stringify(userData));
            signupModal.style.display = 'none';
        }
        
        console.log(dniValidationMessage.textContent);
        console.log(firstNameValidationMessage.textContent);
        console.log(lastNameValidationMessage.textContent);
        console.log(telephoneValidationMessage.textContent);
        console.log(emailValidationMessage.textContent);
        console.log(counter);

        // Check if the data was stored correctly
        var usr = localStorage.getItem('userData');
        console.log(usr);


        // Close the modal
        // signupModal.style.display = 'none';
    });
});
