

const userData = {
    'admin': '1234',
    'testUser': 'password'
};

function login(event) {
    console.log(event);
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (userData[username] == password) {
        window.location.replace('index.html');
        console.log('Login successful');    
        return true
    } 
    alert('Invalid username or password.');
    return false;
}

