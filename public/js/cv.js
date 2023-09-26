var button = document.querySelectorAll('[data-id="button"]')
var password = document.querySelectorAll('[data-id="password"]')
var encryptedUrlHash = 'U2FsdGVkX1/oyOxLU9lZhq461WTRKQf5AOc7g1M//fc1R1nyvWTpsMrXDnHr0jj9I2jSjCqtoZLYeWrzn3oVHkIUA3qGisaPtXtx1NA1K79repM1+dsvorgK6qEXusWG';
function login(secret) {

    // Hash the password using SHA256
    const hashedPassword = CryptoJS.SHA256(secret).toString();
    // Decrypt the encrypted URL hash using the hashed password as the key
    const url = CryptoJS.AES.decrypt(encryptedUrlHash, hashedPassword).toString(CryptoJS.enc.Utf8);
    var alert = document.querySelectorAll('[data-id="alert"]')

    var request = new XMLHttpRequest();

    request.onload = function () {
        if (request.status >= 200 && request.status < 400 && !request.responseText.includes("html")) {
            window.location = url
        } else {
            alert[0].style.display = 'block'
            password[0].setAttribute('placeholder', 'Incorrect password')
            password[0].value = ''
        }
    }
    request.onerror = function () {
        alert[0].style.display = 'block'
        password[0].setAttribute('placeholder', 'Incorrect password')
        password[0].value = ''
    }

    if (url) {
        request.open('GET', url, true)
        request.send();
    } else {
        alert[0].style.display = 'block'
        password[0].setAttribute('placeholder', 'Incorrect password')
        password[0].value = ''
    }
}

button[0].addEventListener("click", function () {
    login(password[0].value)
})

document.onkeydown = function (e) {
    e = e || window.event
    if (e.keyCode == 13) {
        login(password[0].value)
    }
}