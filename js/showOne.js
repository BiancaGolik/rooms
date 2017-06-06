
var url = window.location.href;
var hash = url.indexOf('#');
var end = hash > 1 ? hash : url.length;
var id = url.substring(url.indexOf('?') + 1, end);
var trueIcons = [];

function addIconsAll(i, n) {
    var extrasli = document.createElement('div');
    extrasli.id = "extras";
    extrasli.className = "col-lg-2 col-md-6 col-sm-4 col-xs-6";
    for (var j = 0; j < n; j++) {
        var extrasimg = document.createElement('img');
        extrasimg.src = "images/favicons/facilities/" + trueIcons[i + j][0] + ".png";
        var extrash6 = document.createElement('h6');
        extrash6.innerHTML = trueIcons[i + j][1];
        extrash6.id = "extrasCol" + i + "Row" + j;
        extrasli.appendChild(extrasimg);
        extrasli.appendChild(extrash6);
    }

    $('#extrasUl').append(extrasli);
}

function addIconsNames(i, n) {
    for (var j = 0; j < n; j++) 
        $("#extrasCol" + i + "Row" + j).html(trueIcons[i + j][1]);
}

function AddIconsAdmin() {
    nrows = allIcons.length / 4;
    for (var i = 1; i <= 4; i++)
    {
        for (var j = 0; j < nrows ; j++)
        {
            var br = document.createElement('br');
            var input = document.createElement('input');
            var label = document.createElement('label');
            var img = document.createElement('img');
            var h5 = document.createElement('h5');
            var b = document.createElement('b');

            var id = (i - 1)  * nrows + j;
            input.id =  allIcons[id][0];
            input.name =  allIcons[id][0];
            input.type =  "checkbox";

            img.src = "images/favicons/facilities/" + allIcons[id][0] + ".png";

            label.setAttribute("for", allIcons[id][0]);
            label.appendChild(img);

            b.innerHTML = allIcons[id][1];
            h5.appendChild(b);


        
            $("div[extrasAdd='"+ i +"']").append(br);
            $("div[extrasAdd='" + i + "']").append(input);
            $("div[extrasAdd='" + i + "']").append(label);
            $("div[extrasAdd='" + i + "']").append(h5);
        }
    }
}

function printErrorAdmin() {

    $('.main').empty();
    $('.mapa').empty();
    $('.cleancode_block').empty();

    var error = document.createElement('h1');
    error.innerHTML = "Brak oferty o podanym numerze";
    $('.cleancode_block').append(error);

}

function printErrorUser() {
    $('.purpose_block').empty();
    $('.cleancode_block').empty();
    $('.padbot0').empty();
    $('.order_block').empty();
    var error = document.createElement('h1');
    error.innerHTML = one['error'];
    $('.cleancode_block').append(error);

}

function showOne(id) {
    var src = document.getElementById("allSlides").getAttribute("photoSrc" + id);
    $(".galery_img").attr("src", src);
    $(".galery_img").attr("photoID", id);

    var nID = parseInt(parseInt(id) - parseInt($(".galery").attr("firstID")) + 1);
    $("#photos_num").html(nID + "/" + $(".galery").attr("nPhotos"));
}

function showGalery(id) {
    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        $(".galery_shadow").css({ "display": "inline-block" });
        $(".galery_controls").css({ "display": "inline-block" });
        $(".galery").css({ "display": "inline-block" });
    } else {
        $(".galery_shadow").css("display", "initial");
        $(".galery_controls").css("display", "initial");
        $(".galery").css("display", "initial");

    }

    showOne(id);

}

function showOrder() {
    var order = document.getElementById("order");
    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
        order.style.setAttribute("bottom", "0");

    else
        order.style = "bottom:0;";

}

function hideOrder() {
    var order = document.getElementById("order");
    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
        order.style.setAttribute("bottom", "-550px");
    else
        order.style = "bottom:-550px;";

}

function closeGalery() {

    $(".galery").css("display", "none");
    $(".galery_controls").css("display", "none");
    $(".galery_shadow").css("display", "none");

}

function nextGalery() {
    var id = parseInt(parseInt($(".galery_img").attr("photoID")) + 1);
    if (id > $(".galery").attr("lastID"))
        id = $(".galery").attr("firstID");

    showOne(id);

}

function prevGalery() {

    var id = parseInt(parseInt($(".galery_img").attr("photoID")) - 1);
    if (id < $(".galery").attr("firstID"))
        id = $(".galery").attr("lastID");

    showOne(id);
}

function setReservation() {
    var reservation = one['reservation'];
    var reservationEl = document.getElementById("order_show_logo");
    reservationEl.innerHTML = "";
    for (var i = 0; i < reservation.length; i++) {
        var bID = i > 9 ? "110" : "1" + parseInt(i + 1);
        reservationEl.innerHTML += "<span class=\"b" + bID + "\">" + reservation[i] + "</span>"
    }
    $("#reservationButton").html(reservation);
    $("#reservationButton").attr("data-hover", reservation);
}

function IsPast(changedDate) {

    var current = moment();
    if ($(changedDate).val() != "" && moment($(changedDate).val()).diff(current, "days") < 0) {
        $(".errorDates").css("display", "initial");
        $(".errorDates").html(one["getErrorCurrentDates"]);
        $(changedDate).css("border-color", "red");
        $(changedDate).val("");
        $(".totalSum").html("0.00");
        return 1;
    }
    return 0;
}

function validateDate()
{
    $("#dateFrom").css("border-color", "#e9e9e9");
    $("#dateTo").css("border-color", "#e9e9e9");
    $("#dateFrom").css("color", "#666");
    $("#dateTo").css("color", "#666");
    $(".errorDates").css("display", "none");

    var ret = 0;
    ret += IsPast("#dateFrom");
    ret += IsPast("#dateTo");
    if ($("#dateFrom").val() == "" || $("#dateTo").val() == "")
        return ret;;
    
    var start = moment($("#dateFrom").val());
    var end = moment($("#dateTo").val());
    
    var ndays = start.diff(end, "days");
    ndays *= -1;
    if (priceInfo['minDays'] > ndays) {
        $(".errorDates").css("display", "initial");
        $(".errorDates").html(one["getErrorMinDates"](priceInfo['minDays']));
        $("#dateFrom").val("");
        $("#dateFrom").css("border-color", "red");
        $("#dateTo").val("");
        $("#dateTo").css("border-color", "red");
        $(".totalSum").html("0.00");
        ret = 1;
    }

    if (ndays < 1) {
        $(".errorDates").css("display", "initial");
        $(".errorDates").html(one["getErrorPrevDates"]);
        $("#dateFrom").val("");
        $("#dateFrom").css("border-color", "red");
        $("#dateTo").val("");
        $("#dateTo").css("border-color", "red");
        $(".totalSum").html("0.00");
        $(".totalSum").html("0.00");
        ret = 1;
    }
    return ret;;

}

function setTotalPrice()
{
    if ($("#dateFrom").val() == "" || $("#dateTo").val() == "" || $("#nAdults").val() == "" || ($("#nAdults").val() == "0" && $("#nKids").val() == "0"))
        return;
    var start = moment($("#dateFrom").val());
    var end = moment($("#dateTo").val());
    
    var ndays = start.diff(end, "days");
    ndays *= -1;
    var nAdults = $("#nAdults").val();
    var nKids = $("#nKids").val();

    //depending on days
    var totalPrice = ndays
    if (ndays >= 28) {
        totalPrice *= priceInfo['priceMonth'];

    } else if (ndays >= 7) {
        totalPrice *= priceInfo['priceWeek'];

    } else {
        totalPrice *= priceInfo['priceDay'];

    }

    //lastMinute
    if (ndays <= priceInfo['LastMinuteDays'])
    {
        totalPrice -= totalPrice * priceInfo['lastMinutePerc'] / 100;
    }

    //additional peope
    if ($("#nAdults").val() > 1) {
        var nAddAdults = nAdults - 1;
        totalPrice += totalPrice * nAddAdults * priceInfo['PriceNextAdult'] / 100;
    }

    if (nKids != "" || nKids > 0) {
        totalPrice += totalPrice * nKids * priceInfo['PriceNextKid'] / 100;
    }

    $(".totalSum").html(totalPrice.toFixed(2));
}

function calculate() {
    validateDate();
    setTotalPrice();
}

$("#dateFrom").change(function () {
    calculate();
});

$("#dateTo").change(function () {
    calculate();
});

$("#nAdults").change(function () {
    var nAdults = parseInt($("#nAdults").val());
    if (isNaN(nAdults) || nAdults < 1)
        nAdults = 1;
    $("#nAdults").val(nAdults);
    setTotalPrice();
});

$("#nKids").change(function () {
    var nKids = parseInt($("#nKids").val());
    if (isNaN(nKids) || nKids < 0)
        nKids = 0;
    $("#nKids").val(nKids);
    setTotalPrice();
});

function setPricesOne(pDay, pWeek, pMonth)
{

    var currency = parseFloat(document.getElementById("mainCurrency").getAttribute("value"));
    var currencySymbol = document.getElementById("mainCurrency").getAttribute("symbol");

    //price day
    var priceDay = parseInt(parseInt(pDay) * currency);
    priceInfo['priceDay'] = priceDay;
    var price1 = document.getElementById("price1");
    price1.setAttribute("basePrise", pDay);
    price1.childNodes[2].innerHTML = priceDay + " " + currencySymbol;
    price1.childNodes[3].innerHTML = one['from'](priceDay, currencySymbol);


    //price week
    var priceWeek = parseInt(parseInt(pWeek) * currency);
    priceInfo['priceWeek'] = priceWeek;
    var priceAllWeek = priceWeek * 7;
    var price2 = document.getElementById("price2");
    price2.setAttribute("basePrise", pWeek);
    price2.childNodes[2].innerHTML = priceAllWeek + " " + currencySymbol;
    price2.childNodes[3].innerHTML = one['from'](priceWeek, currencySymbol);

    //price month
    var priceMonth = parseInt(parseInt(pMonth) * currency);
    priceInfo['priceMonth'] = priceMonth;
    var priceAllMonth = priceMonth * 28;
    var price3 = document.getElementById("price3");
    price3.setAttribute("basePrise", pWeek);
    price3.childNodes[2].innerHTML = priceAllMonth + " " + currencySymbol;
    price3.childNodes[3].innerHTML = one['from'](priceMonth, currencySymbol);

}

function setPricesOneFirst()
{
    setPricesOne(document.getElementById("price1").getAttribute("basePrise"),
                 document.getElementById("price2").getAttribute("basePrise"),
                 document.getElementById("price3").getAttribute("basePrise"));
}

function AddOneAdmin(record) {

    if (record.length <= 1)
        return printErrorAdmin();

    //photos
    var nPhotos = parseInt(record[record.length - 1]);
    var firstPhotoId = record.length - nPhotos - 1;
   // var nPhotos = record[record.length - 1];
    for (var i = firstPhotoId; i < record.length - 1; i++) {

        var numInt = parseInt(record[i].split('.').reverse()[1]);

        var pC = $("#photosCnt").val();
        if (numInt >= parseInt(pC))
            $("#photosCnt").val(parseInt(parseInt(numInt)));

        //var nP = $("#nPhotos").val();
        //$("#nPhotos").val(parseInt(parseInt(nP) + 1));

        var photosCnt = i - firstPhotoId;

        var canMoveLeft = (i == firstPhotoId) ? "" : "<i  id=\"moveLeft\" class=\"fa fa-arrow-left\"  onclick=\"moveLeft(" + photosCnt + ")\"></i>";
        var canMoveRight = (i == record.length - 2) ? "" : "<i  id=\"moveLeft\" class=\"fa fa-arrow-right\"  onclick=\"moveRight(" + photosCnt + ")\"></i>";

        selDiv.innerHTML += "<li class = \"miniPhoto\" id=\"mini" + photosCnt + "\"><img src=\"images/rooms/" + id + "/" + record[i] + "\"  photoSrc=\"images/rooms/" + id + "/" + record[i] + "\"  id=\"miniPhoto\"  class=\"mini" + photosCnt + "\"  onclick=\"pickPhoto(" + photosCnt + ")\" >" +
                                "<i  id=\"rotate\" class=\"fa fa-refresh\"  onclick=\"rotatePhoto(" + photosCnt + ")\"></i>" +
                               canMoveLeft + canMoveRight +
                                "<i  id=\"trash\" class=\"fa fa-trash\"  onclick=\"delPhoto(" + photosCnt + ")\"></i></li>";

       
        if (record[i] == record[12])
            pickPhoto(photosCnt);
    }

    // description
    $("#namePL").val(record[1]);
    $("#descriptionPL").val(record[2]);
    $("#nameEN").val(record[26]);
    $("#descriptionEN").val(record[27]);
    $("#nameRU").val(record[28]);
    $("#descriptionRU").val(record[29]);

    // main info
    $("#tokeetID").val(record[13]);
    $("#adres").val(record[11]);
    if (record[34] == 1)
        $("#available").prop('checked', true);
    switch(record[24])
    {
        case "Gdańsk":
            $("#city").prop("selectedIndex", 0);
            break;
        case "Sopot":
            $("#city").prop("selectedIndex", 1);
            break;
        case "Gdynia":
            $("#city").prop("selectedIndex", 2);
            break;
    }

    //luxury
    var rating = "star" + record[25];
    $("#" + rating).prop('checked', true);

    //numbers
    
    $("#rooms").val(record[3]);
    $("#m2").val(record[4]);
    $("#people").val(record[5]);

    $("#singleBed").val(record[35]);
    $("#doubleBed").val(record[36]);
    $("#singleSofa").val(record[37]);
    $("#doubleSofa").val(record[38]);
    $("#bunkleBed").val(record[39]);

    $("#dayPrice").val(record[7]);
    $("#weekPrice").val(record[8]);
    $("#monthPrice").val(record[9]);
    $("#minDays").val(record[10]);


    $("#LastMinutePercent").val(record[23]);
    $("#LastMinuteDays").val(record[22]);
    $("#NextAdult").val(record[21]);
    $("#NextKid").val(record[20]);

    //submit button
    $('#changing_form').attr("action", "php/oneAdd.php?id=" + id);

     //icons
    AddIconsAdmin();

    var first = firstPhotoId - 36;
    for (var i = first; i < firstPhotoId; i++) {
        if (record[i] == 1)
            $("#" + allIcons[i - first][0]).prop('checked', true);
    }

    //location
    var latOne = parseFloat(record[14]);
    var lngOne = parseFloat(record[15]);

    document.getElementById("lat").value = latOne;
    document.getElementById("lon").value = lngOne;
    var location = { lat: latOne, lng: lngOne };
    placeMarker(location, true);


}

function AddOneUser(record, addIcons) {
    if (record.length <= 1) {
        printErrorUser();
        return 1;
    }
    priceInfo = [];
    var nPhotos = parseInt(record[record.length - 1]);
    var firstPhotoId = record.length - nPhotos - 1;

    var slidebtn = document.createElement('div');
    slidebtn.className = "flex-show-galery";
    slidebtn.setAttribute("onclick", "showGalery(" + firstPhotoId + ")");
    $("#allSlides").append(slidebtn);

    $(".flex-show-galery").html(one['gallery']);


    /*-----------------------------------------------------------------------------------*/
    /*	icons with headders
    /*-----------------------------------------------------------------------------------*/
    for (var i = 1; i <= 4; i++)
    {
        if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true))
            $("#i" + i).css({ "background-image": "url(images/i" + i + "-" + lang + ".svg)" });
        else
            $("#i" + i).css("background-image", "url(images/" + i + "-" + lang + ".svg)");
    }



    /*-----------------------------------------------------------------------------------*/
    /*	oneUserTitle
    /*-----------------------------------------------------------------------------------*/
    //name
    var name = record[1];

    //adres + stars
    var adres = record[11];
    var stars = parseInt(record[25]);
    var starsSymbol = "";
    for (var i = 0; i < stars; i++)
        starsSymbol += '&#9733;';

    var h4 = document.createElement('h4');
    h4.innerHTML = "<i>" + adres + "</i>  " + starsSymbol;

    $('#oneUserTitle').empty();
    $('#oneUserTitle').append("<h2>" +  highlightFirst(name) + "</h2>");
    $('#oneUserTitle').append(h4);

    /*-----------------------------------------------------------------------------------*/
    /*	icons
    /*-----------------------------------------------------------------------------------*/

    //rooms
    var rooms = parseInt(record[3]);
    $("#roomsH").html("<b>" + rooms + "</b> " + one['room'](rooms));

    //m2
    var m2 = record[4];
    $("#m2H").html("<b>" + m2 + "</b>  m&#178;");

    //people
    var people = record[5];
    $("#peopleH").html("<b>" + people + "</b> " + one['people'](people));


    /*-----------------------------------------------------------------------------------*/
    /*	prices
    /*-----------------------------------------------------------------------------------*/
    document.getElementById("price1").childNodes[1].innerHTML = highlightWord(one['priceDay'], 3);
    document.getElementById("price2").childNodes[1].innerHTML = highlightWord(one['priceDay'], 3);
    document.getElementById("price3").childNodes[1].innerHTML = highlightWord(one['priceDay'], 3);



    //min days
    var minDays = record[10];
    priceInfo['minDays'] = minDays;
    $("#minDaysDiv").html("<h4>" + one['minDays'](minDays) + "</h4>");

    //set all prices
    setPricesOne(record[7], record[8], record[9]);


    priceInfo['PriceNextKid'] = record[20];
    priceInfo['PriceNextAdult'] = record[21];
    priceInfo['LastMinuteDays'] = record[22];

    /*-----------------------------------------------------------------------------------*/
    /*	tabs
    /*-----------------------------------------------------------------------------------*/

    //description
    var description = record[2];
    var descriptionP = document.createElement('p');
    var descriptionSpan = document.createElement('span');
    descriptionP.className = "title";
    descriptionP.innerHTML = highlightFirst(name);//"<b>" + name.split(" ")[0] + "</b>" + nametmp;
    descriptionSpan.innerHTML = description;
    $("#tab1").empty();
    $("#tab1").append(descriptionP);
    $("#tab1").append(descriptionSpan);

    //map
    $("#mapTitle").html(highlightFirst(one['map']));
    var latOne = parseFloat(record[14]);
    var lngOne = parseFloat(record[15]);

    var mapOne = new google.maps.Map(document.getElementById('mapOne'), {
        center: { lat: latOne, lng: lngOne },
        zoom: 11
    });
    var marker = new google.maps.Marker({
        position: { lat: latOne, lng: lngOne },
        map: mapOne,
    });

    //street View
    document.getElementById("streetViewTitle").innerHTML = one['streetView'];
    var panorama = new google.maps.StreetViewPanorama( document.getElementById('streetView'),
        {
            position: { lat: latOne, lng: lngOne },
            pov: { heading: 165, pitch: 0 },
            zoom: 1
        });
    
    //beds configuration 
    document.getElementById("bedsTitle").innerHTML = one['bedsTitle'];

    var bedsIcons = ["single-bed", "double-bed", "single-sofa", "double-sofa", "bunk-bed"]
    var beds = [];
    var nBedsConf = 0;
    for (var i = 35; i < 40; i++)
    {
        beds.push(record[i] + " " + one['bedsConf'][i - 35](record[i]));
        if (record[i] != "0")
            nBedsConf++;
    }

    for (var i = 0; i < 5; i++)
    {
        if (record[parseInt(parseInt(i) + 35)] == "0")
            continue;
        if (document.getElementById(bedsIcons[i]) != null) {
            document.getElementById(bedsIcons[i]).innerHTML = beds[i];
            continue;
        }
        var newBed = document.createElement("div");
        newBed.className = "col-sm-" + parseInt(12 / nBedsConf) + " col-xs-6";
        newBed.id = "bedConf";


        var newBedH = document.createElement("h4");
        newBedH.id = bedsIcons[i];
        newBedH.innerHTML = beds[i];

        var newBedImg = document.createElement("img");
        newBedImg.src = "images/favicons/" + bedsIcons[i] + ".png";

        newBed.appendChild(newBedImg);
        newBed.appendChild(newBedH);

        document.getElementById("bedsConfiguration").appendChild(newBed);
    }




    //extras
    $("#extrasTitle").html(highlightFirst(one['extras']));

    var i
    var first = firstPhotoId - 36;
    trueIcons = [];
    for (i = first; i < firstPhotoId; i++) {
        if (record[i] == 1)
            trueIcons.push(allIcons[i - first]);
    }
    var ncol = (trueIcons.length / 6 == 0) ? 0 : 6;
    var nrows = (trueIcons.length / 6 == 0) ? 1 : trueIcons.length / 6;
    var it = 0;

    for (i = 0; i < ncol; i++) {
        var nadd = parseInt((trueIcons.length % 6 >= i + 1) ? nrows + 1 : nrows);
        addIcons(it, nadd);
        it += nadd;
    }
    //calendar
    $("#calendarTitle").html(highlightFirst(one['calendar']));
    if ($(".tokeet-calendar").children().length > 0) {

        if (record[34] != 0)
        {
            $("#calendarUnav").html(one['calendarUnav']);
            return;
        }
        else
            setReservation();

    } else {
        if (record[34] == 0) {
            var tokeetIDa = document.createElement('a');
            tokeetIDa.innerHTML = one['calendarError'];
            tokeetIDa.className = "tokeet-calendar-widget";
            tokeetIDa.href = "http://tokeet.com";
            tokeetIDa.setAttribute("data-rental-id", "\"" + record[13] + "\"");
            tokeetIDa.setAttribute("data-rental-account", "1486978841.246");
            tokeetIDa.setAttribute("data-calendar-months", "3");
            tokeetIDa.setAttribute("data-available-color", "rgba(255, 150, 0, 0.8)");
            tokeetIDa.setAttribute("data-unavailable-color", "rgba(0, 255, 200, 0.8)");
            tokeetIDa.setAttribute("data-font-family", "Helvetica");
            tokeetIDa.setAttribute("data-font-size", "16px");
            tokeetIDa.setAttribute("data-sunday-first", "false");
            $(".tokeet-calendar").append(tokeetIDa);
            setReservation();
        }
        else {
            var UnavailableMsg = document.createElement('h2');
            UnavailableMsg.innerHTML = one['calendarUnav'];
            UnavailableMsg.id = "calendarUnav";
            $(".tokeet-calendar").append(UnavailableMsg);

            $(".order_block").empty();
            $(".order_block").remove();
            $("#order").empty();
            $(".order").remove();
            $("#resBtnDiv").empty();
            $(".resBtnDiv").remove();
            return;
        }
    }

    //reservation block
    $(".onlineRes").html(highlightFirst(one['onlineRes']));
    $("#sendRes").html(one['sendRes']);

    $(".dateFrom").html(one['dateFrom']);
    $(".dateTo").html(one['dateTo']);
    $(".nKids").html(one['nKids']);
    $(".nAdults").html(one['nAdults']);

    $("#name").val(one['name']);
    $("#name").attr("onFocus", getOnFocus(one['name'], one['req']));
    $("#name").attr("onBlur", getOnBlur(one['name']));

    $("#email").val(one['email']);
    $("#email").attr("onFocus", "if (this.value == '" + one['email'] + "' || this.value == '" + one['req'] + "' || this.value == '" + one['wrongEmail'] + "') this.value = '';");
    $("#email").attr("onBlur", getOnBlur(one['email']));

    $("#briefMsg").val(one['briefMsg']);
    $("#briefMsg").attr("onFocus", getOnFocus(one['briefMsg'], ""));
    $("#briefMsg").attr("onBlur", getOnBlur(one['briefMsg']));

    $(".total").html(one['total']);
    $(".currency").html(one['currency']);
    $("#sendRes").attr("onclick", "validateReservation(\"" + record[13] + "\")");
    $(".totalSum").html("0.00");

    
    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true) || navigator.userAgent.indexOf("Firefox") != -1 ) //IF IE > 10 or Firefox
    {
        $(".calculate").html(one['calculate']);
        $(".calculate").css({ "display": "inline-block" });
    }
    
    //make enable datepickers for firefox and ie
    webshims.setOptions('waitReady', false);
    webshims.setOptions('forms-ext', { types: 'date' });
    webshims.polyfill('forms forms-ext');

    
}

function AddOneUserNoPhoto(record)
{
    return AddOneUser(record, addIconsNames);
}

function AddOneUserPhoto(record)
{
        if (AddOneUser(record, addIconsAll) == 1)
            return 1;

        /*-----------------------------------------------------------------------------------*/
        /*	Photos
        /*-----------------------------------------------------------------------------------*/
    
        var nPhotos = parseInt(record[record.length - 1]);
        var firstPhotoId = record.length - nPhotos - 1;
        $(".galery").attr("firstID", firstPhotoId);
        $(".galery").attr("lastID", record.length - 2);
        $(".galery").attr("nPhotos", nPhotos);

        var mainPhotoID = firstPhotoId;
        var url = record[12];
        var slideli = document.getElementById("allSlides");
        if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
            slideli.style.setAttribute("background-image", "url(images/rooms/" + id + "/" + url + ")");
        else
            slideli.style = "background-image:url(images/rooms/" + id + "/" + url + ");";
        
        for (var i = firstPhotoId; i < record.length - 1; i++)
        {
            slideli.setAttribute("photoSrc" + i, "images/rooms/" + id + "/" + record[i]);
            if (record[i] == record[12])
                mainPhotoID = i;
        }
        slideli.setAttribute("onclick", "showGalery(" + mainPhotoID + ")");

    
}


function getOneFromDb(AddOne)
{
    xmlhttp = new XMLHttpRequest();
    var postData = new FormData();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var someVar = String(this.responseText);
            AddOne(someVar.split("|,|"));
        }
    };
    xmlhttp.open("POST", "php/getOne.php?id=" + id);
    xmlhttp.send(postData);
}

//for  one -> callback
function getOneCallback(fn) {
    setContactLang();
    setMenuLang();
    one = getOne();
    getOneFromDb(fn);
}

//for  one -> callback when loading
function getOneCallbackPhoto() {
    getOneCallback(AddOneUserPhoto);
}

//for  one -> callback when change lang
function getOneCallbackNoPhoto() {
    getOneCallback(AddOneUserNoPhoto);
}

function userLoggedOne() {
    if (url == id)
        AddIconsAdmin()
    else
        getOneFromDb(AddOneAdmin);
}

// for one Add
function LogOneCallback(login) {
    if (login != "unknown") {
        var e = window.document.createElement('script');
        e.setAttribute('src', "js/lang/pl.js");
        e.onload = userLoggedOne;
        window.document.body.appendChild(e);
    }  else
        window.location = "login.html?" + id;
}