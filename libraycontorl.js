function usernametest() {
    var n=0;
    var username=document.getElementById("user").value
    var password=document.getElementById("pass").value
    if (username.toUpperCase.charAt(0)<'A' || username.toUpperCase.charAt(0)>'Z' ) {
        n++;
    }

    if(n>0) {
        return false;
    }

}
