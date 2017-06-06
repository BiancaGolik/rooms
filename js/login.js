
function notLogged(user) {
    if (user == "unknown")
        window.location = "login.html";
}

function isLogged(callBack)
{
    $.ajax({
        url: "php/isLog.php",
        dataType: 'html',
        cache: false,
        contentType: false,
        processData: false,
        type: 'post',
        success: function (response) {
            var res = response.split("|;|");
            var user = (res.length < 2) ? "unknown" : res[1];
            callBack(user);
            
        }
    });

}

function switchToLogin() {

    $("#logTitle").html("Zaloguj się aby usyskać dostęp do funkcji administratora");
    $("#login").val("");
    $("#password").val("");

    $("#passwords").html('<h4>Hasło</h4><input type="password" maxlength="100" name="password" id="password" />');

    $("#errorLog").html("");

    $("#subbmit_changing_form").html("<label class=\"submit-button\" onclick=\"login()\">Zaloguj</label>");

    $("#switchLog").html("Nie posiadasz konta?");
    $("#switch").html("<a href=\"javascript:switchToRegister();\"><b>Zarejestruj się</b></a>");
}

function switchToRegister() {
    $("#logTitle").html("Rejestracja");
    $("#login").val("");
    $("#password").val("");

    $("#passwords").append("<h4>Powtórz hasło</h4>");
    $("#passwords").append('<input type="password" maxlength="100" name="password2" id="password2" />');

    $("#errorLog").html("");

    $("#subbmit_changing_form").html("<label class=\"submit-button\" onclick=\"register()\">Zarejestruj</label>");

    $("#switch").html("");
    $("#switchLog").html("<a href=\"javascript:switchToLogin();\"><i class=\"fa fa-angle-double-left\"></i>  <b>Powrót do logowania</b></a>");

}

function logout() {
    $.ajax({
        url: "php/logout.php",
        dataType: 'html',
        type: 'post',
        success: function (response) {
            location.reload();
        }
    });
}

function loginValidation()
{
    var errorLog = document.querySelector("#errorLog");
    errorLog.innerHTML = "";

    $("#login").css("border", "2px solid #888");
    $("#password").css("border", "2px solid #888");


    if (!$("#login").val()) {
        $("#login").css("border", "solid red");
        errorLog.innerHTML = "Proszę podać nazwę użytkownika";
    }
    if (!$("#password").val()) {
        $("#password").css("border", "solid red");
        errorLog.innerHTML += (errorLog.innerHTML != "") ? " i hasło" : "Proszę podać hasło";
    }



    if ($("#password2").length) {

        if ($("#password").val().length < 8) {
            $("#password").css("border", "solid red");
            errorLog.innerHTML += "Hasło musi zawierać minimum 8 znaków";
        }
        $("#password2").css("border", "2px solid #888");
        if ($(!"#password2").val()) {
            $("#password2").css("border", "solid red");
            errorLog.innerHTML += (errorLog.innerHTML != "") ? " i powtórzyć hasło" : "Proszę powtórzyć hasło";
        }
        if ($("#password2").val() != $("#password").val()) {
            $("#password").css("border", "solid red");
            $("#password2").css("border", "solid red");
            errorLog.innerHTML += "Podane hasła nie są identyczne";
        }
    }
    if (errorLog.innerHTML != "")
        return "";
    
    var form_data = new FormData();
    form_data.append("login", $("#login").val());
    form_data.append("password", $("#password").val());
    return form_data;
}

function login() {
    var form_data = loginValidation();
    if (form_data == "")
        return;

    $.ajax({
        url: "php/login.php",
        dataType: 'html',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        success: function (response) {
            var res = response.split("|;|");
            if (res.length >= 2) {
                if (res[1] == "Not admin")
                    errorLog.innerHTML = "Użytkownik jeszcze nie został zatwierdzony";
                else if (res[1] == "Not exists")
                    errorLog.innerHTML = "Podano niewłaściwe hasło i/lub login";
                else {
                    var url = window.location.href;
                    var id = url.substring(url.indexOf('?') + 1, url.length);
                    window.location = (id != url) ? "adminOne.html?" + id : "admin.html";
                }
            }
        }
    });
}

function register() {
    var form_data = loginValidation();
    if (form_data == "")
        return;

    $.ajax({
        url: "php/register.php",
        dataType: 'html',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        success: function (response) {
            var res = response.split("|;|");
            if (res.length > 2) {
                errorLog.innerHTML = "Podany użytkownk istnieje już w bazie!";
            } else {
                $("#loginTab").empty();

                $("#loginTab").append("<h2>Dziękujemy za rejestrację</h2>");
                $("#loginTab").append("<h4>Zaczekaj na akceptację zgłoszenia przez administratora</h4>");
                $("#loginTab").append("<h5><a href=\"index.html\"><i class=\"fa fa-angle-double-left\"></i>  <b>Powrót do strony głównej</b></a></h5>");
            }
        }
    });
}

function change_pass()
{
    var errorLog = document.querySelector("#errorLog");
    errorLog.innerHTML = "";

    $("#oldPass").css("border", "2px solid #888");
    $("#newPass").css("border", "2px solid #888");
    $("#newPass2").css("border", "2px solid #888");


    if (!$("#oldPass").val()) {
        $("#oldPass").css("border", "solid red");
        errorLog.innerHTML = "Proszę podać stare hasło";
    }
    if (!$("#newPass").val()) {
        $("#newPass").css("border", "solid red");
        errorLog.innerHTML += (errorLog.innerHTML != "") ? " i nowe hasło" : "Proszę podać nowe hasło";
    }
    if ($("#newPass").val() == $("#oldPass").val()) {
        $("#oldPass").css("border", "solid red");
        $("#newPass").css("border", "solid red");
        $("#newPass2").val("");
        errorLog.innerHTML = "Nowe i stare hasło powinny się różnić";
        return;
    }
        if ($(!"#newPass2").val()) {
            $("#newPass2").css("border", "solid red");
            errorLog.innerHTML += (errorLog.innerHTML != "") ? " i powtórzyć nowe hasło" : "Proszę powtórzyć nowe hasło";
        }
        if ($("#newPass2").val() != $("#newPass").val()) {
            $("#newPass").css("border", "solid red");
            $("#newPass2").css("border", "solid red");
            errorLog.innerHTML = "Podane nowe hasła nie są identyczne";
        }
    
    if (errorLog.innerHTML != "")
        return "";

    var form_data = new FormData();
    form_data.append("oldPass", $("#oldPass").val());
    form_data.append("newPass", $("#newPass").val());

    $.ajax({
        url: "php/changePass.php",
        dataType: 'html',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        success: function (response) {
            var res = response.split("|;|");
            if (res.length > 2) {
                $("#oldPass").css("border", "solid red");
                errorLog.innerHTML = "Stare hasło nie jest poprawne";
            } else {
                $("#loginTab").empty();

                $("#loginTab").append("<h2>Hasło zostało zmienione</h2>");
                $("#loginTab").append("<h4>Możesz korzystać już z nowego hasła</h4>");
                $("#loginTab").append("<h5><a href=\"admin.html\"><i class=\"fa fa-angle-double-left\"></i>  <b>Powrót do strony głównej</b></a></h5>");
            }
        }
    });
}

function setAsAdmin(id) {
    $.ajax({
        url: "php/setAdmin.php?id=" + id,
        dataType: 'html',
        type: 'post',
        success: function (response) {
            $("#allUsers").empty();
            isLogged(printAll);
        }
    });
}

function removeUser(id) {
    $.ajax({
        url: "php/delUser.php?id=" + id,
        dataType: 'html',
        type: 'post',
        success: function (response) {
            $("#allUsers").empty();
            isLogged(printAll);
        }
    });
}

function printAll(user)
{
    if (user == "unknown")
        window.location = "login.html";
    $.ajax({
        url: "php/getAllUsers.php",
        dataType: 'html',
        type: 'post',
        success: function (response) {
            var users = response.split("|;|");
            for (var i = 1; i < users.length - 1; i++)
            {
                var user = users[i].split("|,|");
                var toAdd = "<li id=\"" + user[0] + "\"><ul id=\"oneUserAll\"><li id=\"oneUser\"><h4>" + user[1] + "</h4></li><li id=\"oneUser\">";
                if (user[2] != "1")
                    toAdd += "<a href=\"javascript:setAsAdmin(" + user[0] + ");\"><label class=\"setAdmin-button\">Zatwierdź</label></a>";
                else
                    toAdd += "<label class=\"Admin-button\">Zatwierdzony</label>";

                toAdd += "</li><li id=\"oneUser\"><a href=\"javascript:removeUser(" + user[0] + ");\"><label class=\"setAdmin-button\">Usuń</label></a>";
                toAdd += "</li></ul></li>"
                $("#allUsers").append(toAdd)
            }
        }
    });
    
}