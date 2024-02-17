let isLoggedIn = false;
/**
 * Gets a specified cookie and returns its value.
 * @param {string} cname - The name of the cookie to get
 * @returns {string} The value of the cookie, or an empty string if it doesn't exist
 */
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Checks a specified cookie and authenticates the user if valid.
 * @param cookieName the name of the cookie
 */
function checkCookie(cookieName) {
    const username = getCookie(cookieName);
    if (username === "ItsCre3per") {
        authenticatedDisplay();
    }
}

/**
 * Sets a cookie with a specified name, value, and expiration date from the current time, in days.
 * @param cname The name of the cookie to be made
 * @param cvalue The value of the cookie
 * @param exdays The number of days until the cookie expires
 */
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + "path=/";
}

/**
 * Function that runs when the user attempts to log in to the control panel.
 * Checks if the username and password given are valid. If valid, the user is given a 1-day cookie and is logged in.
 * If invalid, the user is alerted and the inputs are reset. The password is hashed, to prevent anyone from
 * looking at the source code and guessing the password.
 */
function onAttemptLogin() {
    const username = document.getElementById('login').username.value;
    const password = document.getElementById('login').password.value;
    if(username === 'ItsCre3per' && hash(password) === 3185884) {
        authenticatedDisplay();
        setCookie('username', username, 1);
    } else {
        alert('Invalid username or password');
        document.getElementById('login').username.value = '';
        document.getElementById('login').password.value = '';
    }
}

/**
 * Clears a specified cookie, at the specified path.
 * @param cname The name of the cookie to clear
 * @param cpath The path of the specified cookie
 */
function clearCookie(cname, cpath) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/${cpath};`;
    isLoggedIn = false;
}


/**
 * Function that displays the control panel when the user is authenticated.
 */
function authenticatedDisplay() {
    document.getElementById('loginDiv').style.display = 'none';
    document.getElementById("loggedInDiv").style.display = 'block';
    document.getElementsByTagName('title')[0].innerHTML = "Creeper's Control Panel";
    document.getElementById('logOutButton').style.display = 'block';
    isLoggedIn = true;
}


/**
 * Converts a given string to a number. This process is one-way and prevents anyone from guessing a password.
 * @param string The string to be hashed
 * @returns {number} The hashed string, or 0 if the string is empty
 */
function hash(string) {
    let hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
        const char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}