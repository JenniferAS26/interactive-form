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

form.addEventListener('submit', e => {
    e.preventDefault();
    getData();
    const dataJS = JSON.parse(localStorage.getItem('users'));
    dataJS.forEach(data => {
        console.log(data);
    });
});

