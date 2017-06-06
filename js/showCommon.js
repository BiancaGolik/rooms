
//choose language
function chooseLang(callback) {
    lang = "pl";
    $.ajax({
        url: "php/changeLang.php",
        dataType: 'html',
        type: 'post',
        success: function (response) {
            var langResp = response.split("|;|");
            if (langResp.length > 1) {
                lang = langResp[1];
                //remove existing language script
                $('script').each(function (index) {
                    if ($(this).attr('src') && $(this).attr('src').indexOf("js/lang/") >= 0)
                        $(this).remove();
                });
            }
            $("#mainLang").html(lang + " <i class=\"fa fa-angle-down\"></i>");
            var e = window.document.createElement('script');
            e.setAttribute('src', "js/lang/" + lang + ".js");
            e.onload = callback;
            window.document.body.appendChild(e);
        }
    });
}
function chooseLangFirst() {
    chooseLang(getAllCallback);
}
function chooseLangFirstOne() {
    chooseLang(getOneCallbackPhoto)
}

//choose currency
function chooseCurrency(callback) {
    curr = "PLN";
    $.ajax({
        url: "php/changeCurr.php",
        dataType: 'html',
        type: 'post',
        success: function (response) {

            var currResp = response.split("|;|");
            if (currResp.length > 1)
                curr = currResp[1];
            $("#mainCurrency").html(curr + " <i class=\"fa fa-angle-down\"></i>");
            if (curr == "PLN") {
                document.getElementById("mainCurrency").setAttribute("value", 1);
                document.getElementById("mainCurrency").setAttribute("symbol", "zł");
                callback();
            } else {
                $.getJSON('http://apilayer.net/api/live?access_key=bd93f298695092c0d51226d89c388eb2&currencies=PLN,EUR,GBP&format=1', function (data) {

                    var currValue;
                    if (curr == "USD") {

                        currValue = data.quotes.USDPLN;
                        document.getElementById("mainCurrency").setAttribute("symbol", "$");
                    }
                    if (curr == "EUR") {

                        currValue = parseFloat(parseFloat(data.quotes.USDPLN) / parseFloat(data.quotes.USDEUR));
                        document.getElementById("mainCurrency").setAttribute("symbol", "€");
                    }
                    if (curr == "GBP") {

                        currValue = parseFloat(parseFloat(data.quotes.USDPLN) / parseFloat(data.quotes.USDGBP));
                        document.getElementById("mainCurrency").setAttribute("symbol", "£");
                    }

                    document.getElementById("mainCurrency").setAttribute("value", parseFloat(parseFloat(currValue) * 1.05));
                    callback();
                });

            }

        }
    });
}

function highlightWord(name, n) {
    if (name == "" || name.length < n)
        return name;
    var bold = name.split(" ")[parseInt(n) - 1];
    var ret = name.replace(bold, "<b>" + bold + "</b>");
    return ret;
}

function highlightFirst(name) {
    return highlightWord(name, 1);
}

function getOnFocus(name, nameErr) {
    return "if (this.value == '" + name + "' || this.value == '" + nameErr + "') this.value = '';";
}

function getOnBlur(name) {
    return "if (this.value == '') this.value = '" + name + "';";
}

function setMenuLang() {
   // menu = getMenu();
    $("#menuHome").html(menu['home']);
    $("#menuShort").html(menu['short']);
    $("#menuLong").html(menu['long']);
    $("#menuCooperation").html(menu['cooperation']);
    $("#menuAboutUs").html(menu['aboutUS']);
    $("#menuTerms").html(menu['terms']);
    $("#menuFAQ").html(menu['FAQ']);
    $("#menuContact").html(menu['contact']);
}

function setContactLang() {
    contact = getContact();
    $("#laterDemand").html(contact['onDemand']);
    $("#contactUs").html(highlightFirst(contact['contactUs']));
    $("#findUs").html(highlightFirst(contact['findUs']));
    $("#findUs1").html(contact['findUs1']);
    $("#findUs2").html(contact['findUs2']);

    $("#sendMsgTitle").html(highlightFirst(contact['sendMsg']));
    $("#sendMsgMsg").attr("onFocus", getOnFocus(contact['msg'], contact['msgErr']));
    $("#sendMsgMsg").attr("onBlur", getOnBlur(contact['msg']));
    $("#sendMsgMsg").html(contact['msg']);
    $("#sendMsgAdres").attr("onFocus", getOnFocus(contact['address'], contact['addressErr']));
    $("#sendMsgAdres").attr("onBlur", getOnBlur(contact['address']));
    $("#sendMsgAdres").val(contact['address']);
    $("#sendMsg").val(contact['sendMsg']);


}

function changeLang(lang, callback) {
    //set lang
    $.ajax({
        url: "php/changeLang.php?lang=" + lang,
        dataType: 'html',
        type: 'post',
        success: function (response) {
            chooseLang(callback);
        }
    });
}

function changeCurrency(curr, callback) {
    //set lang
    $.ajax({
        url: "php/changeCurr.php?curr=" + curr,
        dataType: 'html',
        type: 'post',
        success: function (response) {
            chooseCurrency(callback);
        }
    });
}

function changeLangOne(lang) {
    changeLang(lang, getOneCallbackNoPhoto);
}

function changeLangAll(lang) {
    changeLang(lang, getAllCallback);
}

function changeLangLong(lang) {
    changeLang(lang, fillLongCallback);
}

function changeCurrencyOne(curr) {
    changeCurrency(curr, setPricesOneFirst);
}

function changeCurrencyAll(curr) {
    changeCurrency(curr, setPricesAll);
}

function sendMsgAction()
{
    $("#thanks").html("");
    $("#sendMsgAdres").css("border", "2px solid #666");
    $("#sendMsgAdres").css("color", "#666");
    $("#sendMsgMsg").css("border", "2px solid #666");
    $("#sendMsgMsg").css("color", "#666");
    var ret = 0;
    if ($("#sendMsgAdres").val().indexOf("@") == -1 || $("#sendMsgAdres").val().indexOf(".") == -1 ||
                $("#sendMsgAdres").val() == "" || $("#sendMsgAdres").val() == contact['addressErr'] || $("#sendMsgAdres").val() == contact['address'])
    {
        $("#sendMsgAdres").css("border", "2px solid red");
        $("#sendMsgAdres").css("color", "red");
        $("#sendMsgAdres").val(contact['addressErr']);
        ret = 1;
    }
    if ($("#sendMsgMsg").val() == "" || $("#sendMsgMsg").val() == contact['msgErr'] || $("#sendMsgMsg").val() == contact['msg'])
    {
        $("#sendMsgMsg").css("border", "2px solid red");
        $("#sendMsgMsg").css("color", "red");
        $("#sendMsgMsg").val(contact['msgErr']);
        ret = 1;
    }

    //OK
    if (ret == 0)
    {
        var form_data = new FormData();

        form_data.append("msg", $("#sendMsgMsg").val());
        form_data.append("mail", $("#sendMsgAdres").val());
        $.ajax({
            url: "php/sendMail.php",
            dataType: 'html',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function (someData) {
                $("#sendMsgMsg").val(contact['msg']);
                $("#sendMsgAdres").val(contact['address']);
                $("#thanks").html(contact['thanks']);
            }
        });

    }

}

