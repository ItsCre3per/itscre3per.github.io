/**
 * Gets a specified cookie and returns its value.
 * @param {string} cname - The name of the cookie to get
 * @returns {string} The value of the cookie
 * @returns {null} If the cookie does not exist
 */
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}
function checkCookie(cookieName) {
    let username = getCookie(cookieName);
    if (username !== "") {
        authenticatedDisplay();
    }

}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}
function onSubmit() {
    let username = document.getElementById('login').username.value;
    let password = document.getElementById('login').password.value;
    if(username === 'ItsCre3per' || hash(password) === 1385576089) {
        authenticatedDisplay();
    }
}
function authenticatedDisplay() {
    document.getElementsByTagName('h1')[0].innerHTML = "Creeper's Control Panel"
    document.getElementById ('login').style.display = 'none';
}

function hash(string) {
    let hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}