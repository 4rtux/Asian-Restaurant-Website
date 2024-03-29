// script.js

// Variable que cuenta el n de validaciones correctas, si es igual a 5, se guarda en localStorage
var counter = 0;

const currentPage = window.location.pathname.split('/').pop();

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

    const order = document.getElementById('order');
    const popupoverlay = document.getElementById('popup-overlay');

    const contactname = document.getElementById("nombre");
    const contactsurname = document.getElementById("apellidos");
    const contacttelf = document.getElementById("telefono");
    const contactemail = document.getElementById("email2");
    const contactsubject = document.getElementById("asunto");
    const contactmessage = document.getElementById("mensaje");

    const check = document.getElementById('check');
    const enviar = document.getElementById('enviar');
    const exito = document.getElementById('exito');

    const incrementButtons = document.querySelectorAll(".aumentar");
    const decrementButtons = document.querySelectorAll(".disminuir");
    const cantidadSpans = document.querySelectorAll(".cantidad");
    const precioTotalElements = document.querySelectorAll(".precio");
    const totalCompraElement = document.querySelector(".total-a-pagar");
    

    let preciosUnitarios = [5.99, 4.99, 4.99, 3.99, 3.99]; // Precios unitarios de los productos
    let cantidades = [0, 0, 0, 0, 0]; // Cantidad de productos añadidos
    let preciosTotales = [0, 0, 0, 0, 0]; // Precio total de cada producto

     // Precio total de cada producto

    function actualizarResumen() {
        let totalCompra = preciosTotales.reduce((a, b) => a + b, 0);
        totalCompraElement.textContent = `${totalCompra.toFixed(2)}`;
        const orderinfo = {
            cantidades,
            preciosTotales,
            totalCompra,
        };
        localStorage.setItem('orderinfo', JSON.stringify(orderinfo));
    }

    function actualizarProducto(index) {
        preciosTotales[index] = preciosUnitarios[index] * cantidades[index];
        precioTotalElements[index].textContent = `${preciosTotales[index].toFixed(2)}`;
        actualizarResumen();
        
    }

    incrementButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            cantidades[index]++;
            cantidadSpans[index].textContent = cantidades[index];
            actualizarProducto(index);

        });
    });

    decrementButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (cantidades[index] > 0) {
                cantidades[index]--;
                cantidadSpans[index].textContent = cantidades[index];
                actualizarProducto(index);

            }
        });
    });

    const orderinfo = JSON.parse(localStorage.getItem('orderinfo'));

    if (currentPage === 'paying.html') {
        const cantidades2 = orderinfo.cantidades;
        const preciosTotales2 = orderinfo.preciosTotales;
        const totalCompra2 = orderinfo.totalCompra;
        
            for (let i = 0; i < cantidades2.length; i++) {
            cantidadSpans[i].textContent = cantidades2[i];
            precioTotalElements[i].textContent = `${preciosTotales2[i].toFixed(2)}€`;
            }
            
            totalCompraElement.textContent = `Total a pagar: ${totalCompra2.toFixed(2)}€`;
    };

       // Ejecuta las funciones solo en "prueba.html"

    if (check){
        check.addEventListener('change', function(){
            enviar.disabled = !this.checked;
        });
    };
    if (enviar){
        enviar.addEventListener('click', function(){

            const ctname = contactname.value.trim();
            const ctsurname = contactsurname.value.trim();
            const cttelf = contacttelf.value.replace(/ /g, '');
            const ctemail = contactemail.value.trim();
            const ctsubject = contactsubject.value.trim();
            const ctmessage = contactmessage.value.trim();

            const contactinfo = {
                ctname,
                ctsurname,
                cttelf,
                ctemail,
                ctsubject,
                ctmessage,
            };
            localStorage.setItem('contactinfo', JSON.stringify(contactinfo));
            exito.style.display = 'block';
            console.log(localStorage.getItem('contactinfo'));
        });
    };

    if (openModalDiv) {
        openModalDiv.addEventListener('click', function(event){
            dniValidationMessage.style.display = 'none';
            firstNameValidationMessage.style.display = 'none';
            lastNameValidationMessage.style.display = 'none';
            telephoneValidationMessage.style.display = 'none';
            emailValidationMessage.style.display = 'none';
            signupModal.style.display = 'flex';
            event.preventDefault();
        });
    };
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            signupModal.style.display = 'none';
            clearInputFields();
        });
    };

    function clearInputFields() {
        dniInput.value = '';
        firstNameInput.value = '';
        lastNameInput.value = '';
        telephoneInput.value = '';
        emailInput.value = '';
    };
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearInputFields);
    };
    if (submitBtn) {
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
            // Validate DNI
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
            };
            
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
    };
    if (order) {
        order.addEventListener('click', function(event){
            popupoverlay.style.display = 'inline-block';
            event.preventDefault();
        });
    };


});

if (currentPage === 'checkout.html') {
    let timerDisplay = document.querySelector(".progress-value");
    circularProgress = document.querySelector(".circular-progress");
    let timerStartValue = 600, // 10 minutes in seconds
        timerEndValue = 0,     // 0 minutes in seconds
        interval = 1000;       // 1 second interval

    function updateTimerDisplay(minutes, seconds) {
        let formattedMinutes = String(minutes).padStart(2, '0');
        let formattedSeconds = String(seconds).padStart(2, '0');
        timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;

    }

    let timer = setInterval(() => {
        if (timerStartValue > timerEndValue) {
            let minutes = Math.floor(timerStartValue / 60);
            let seconds = timerStartValue % 60;

            // Update the circular progress
            let progressPercentage = ((timerStartValue / 600) * 100).toFixed(2);
            circularProgress.style.background = `conic-gradient(#bf5f6a ${progressPercentage}%, #ededed ${progressPercentage}% 100%)`;

            updateTimerDisplay(minutes, seconds);
            timerStartValue--;
        } else {
            clearInterval(timer);
            updateTimerDisplay(0, 0); // Display "00:00" when the timer reaches 0 minutes
            circularProgress.style.background = `conic-gradient(#bf5f6a 0%, #ededed 0% 100%)`;
        }
    }, interval);
}