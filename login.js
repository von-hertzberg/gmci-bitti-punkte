

const userData = {
    'admin': '1234',
    'testUser': 'password'
};

function login(username, password) {
    if (userData[username] === password) {
        window.location.href = 'index.html';
        return true
    } 
    alert('Invalid username or password.');
    return false;
}

