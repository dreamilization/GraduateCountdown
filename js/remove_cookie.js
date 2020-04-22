function removeCookie() {
    let d = new Date();
    d.setTime(0);
    let expires = "expires="+ d.toUTCString();
    document.cookie = "year=" + ";" + expires + ";path=/";
}