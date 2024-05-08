document.addEventListener("DOMContentLoaded", function() {
    var username = getCookie("username");
    if (username !== "") {
        document.getElementById("greeting").innerText = "Xin chào " + username + "!";
    }

    document.getElementById("nameForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        setCookie("username", name, 30);
        document.getElementById("greeting").innerText = "Xin chào " + name + "!";
    });

    document.getElementById("clearCookie").addEventListener("click", function() {
        deleteCookie("username");
        document.getElementById("greeting").innerText = "";
    });

    function getCookie(name) {
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookies = decodedCookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return "";
    }

    function setCookie(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
});