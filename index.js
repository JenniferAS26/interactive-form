const form = document.querySelector('.signup');
const users = [];
const getData = () => {
    const name = document.querySelector('#input-name').value;
    const lastname = document.querySelector('#input-lastname').value;
    const email = document.querySelector('#input-email').value;
    const password = document.querySelector('#input-password').value;

    const data = {name, lastname, email, password};
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
};

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     verifyFilled(nameInput, nameErrorDiv);
//     verifyFilled(lastnameInput, lastnameErrorDiv);
//     verifyFilled(emailInput, emailErrorDiv);
//     verifyFilled(passwordInput, passwordErrorDiv);
//     getData();
//     const dataJS = JSON.parse(localStorage.getItem('users'));
//     dataJS.forEach(data => {
//         console.log(data);
//     });
// });

let iconError = document.querySelector('.icon-error');
let nameInput = document.querySelector('#input-name');
let nameErrorDiv = document.querySelector('.input__name--error');

nameInput.addEventListener('input', () => {
    if (nameInput.value === '') {
        showError(nameInput, nameErrorDiv, 'Este campo no puede estar vacio');
    } else {
        showError(nameInput, nameErrorDiv, '', false);
    }
});

let lastnameInput = document.querySelector('#input-lastname');
let lastnameErrorDiv = document.querySelector('.input__lastname--error');

lastnameInput.addEventListener('input', () => {
    if (nameInput.value === '') {
        showError(lastnameInput, lastnameErrorDiv, 'Este campo no puede estar vacio');
    } else {
        showError(lastnameInput, lastnameErrorDiv, '', false);
    }
});

let emailInput = document.querySelector('#input-email');
let emailErrorDiv = document.querySelector('.input__email--error');

emailInput.addEventListener('input', () => {
    if (nameInput.value === '') {
        showError(emailInput, emailErrorDiv, 'Este campo no puede estar vacio');
    } else {
        showError(emailInput, emailErrorDiv, '', false);
    }
});

let passwordInput = document.querySelector('#input-password');
let passwordErrorDiv = document.querySelector('.input__password--error');

passwordInput.addEventListener('input', () => {
    if (nameInput.value === '') {
        showError(passwordInput, passwordErrorDiv, 'Este campo no puede estar vacio');
    } else {
        showError(passwordInput, passwordErrorDiv, '', false);
    }
});

// Confirmar button
let confirmButton = document.querySelector('.signup__button');
confirmButton.addEventListener('click', e => {
    e.preventDefault();
    verifyFilled(nameInput, nameErrorDiv);
    verifyFilled(lastnameInput, lastnameErrorDiv);
    verifyFilled(emailInput, emailErrorDiv);
    verifyFilled(passwordInput, passwordErrorDiv);
    getData();
    const dataJS = JSON.parse(localStorage.getItem('users'));
    dataJS.forEach(data => {
        console.log(data);
    });
})

const showError = (divInput, divError, errorMessage, show = true) => {
    if (show) {
      divError.textContent = errorMessage;
      divInput.style.borderColor = 'hsl(0, 100%, 66%)';
    } else {
      divError.textContent = errorMessage;
      divInput.style.borderColor = '#D3D3D3';
    } 
  }

const verifyFilled = (divInput, divError) => {
if (divInput.value.length > 0) {
    showError(divInput, divError, '', false);
    
} else {
    showError(divInput, divError, 'Este campo no puede estar vacio');
    
}
}
