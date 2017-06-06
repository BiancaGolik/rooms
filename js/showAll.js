setInterval(function () { $(".flex-next").click(); }, 5000);

function addElement (parent, id, name, unavailable, photo, newU)
{
    var divItem = document.createElement("div");
    divItem.className = "post_item";

    var divItemImg = document.createElement('div');
    divItemImg.className = "post_item_img";

    var divItemCont = document.createElement('div');
    divItemCont.className = "post_item_content";

    var newImg = document.createElement('img');
    newImg.src = "images/rooms/" + id + "/" + photo;
    
    var newA = document.createElement('a');
    newA.href = "one.html?" + id;

    if (unavailable == 1)
    {
        newImg.className = "unav_image";
        newA.innerHTML = all['unavailable'];
        newA.className = "unavailable";
    }
    else
        newA.className = "link";


    var newATitle = document.createElement('a');
    newATitle.href = "one.html?" + id;
    newATitle.className = "title";
    newATitle.innerHTML = name;

    divItemCont.appendChild(newATitle);
    divItemCont.appendChild(newU);

    divItemImg.appendChild(newImg);
    divItemImg.appendChild(newA);

    divItem.appendChild(divItemImg);
    divItem.appendChild(divItemCont);

    $(parent).append(divItem);
}

function addElementAdmin(parent, id, name, unavailable, photo) {
    var newLi1 = document.createElement('li');
    var newLi3 = document.createElement('li');
    var newLi5 = document.createElement('li');

    newLi1.className = "lileft";
    newLi3.className = "limiddle";
    newLi5.className = "liright";

    var newLi1a = document.createElement('a');
    var text3 = document.createTextNode("Wyświetl");
    newLi1a.appendChild(text3);
    newLi1a.href = "one.html?" + id;

    var newLi3a = document.createElement('a');
    var text4 = document.createTextNode("Edycja");
    newLi3a.appendChild(text4);
    newLi3a.href = "adminOne.html?" + id;

    var newLi5a = document.createElement('a');
    var text5 = document.createTextNode("Usuń");
    newLi5a.appendChild(text5);
    newLi5a.href = "php/del.php?id=" + id;

    newLi1.appendChild(newLi1a);
    newLi3.appendChild(newLi3a);
    newLi5.appendChild(newLi5a);

    var newU = document.createElement('ul');
    newU.className = "post_item_inf";

    newU.appendChild(newLi1);
    newU.appendChild(newLi3);
    newU.appendChild(newLi5);



    all = [];
    all['unavailable'] = "Brak wolnych terminów";
    addElement(parent, id, name, unavailable, photo, newU);
}

function addElementUser(parent, id, name, unavailable, photo, price, city, stars) {

    var priceCorrect = parseInt(parseFloat(price) * parseFloat(document.getElementById("mainCurrency").getAttribute("value")));
    var newLi1 = document.createElement('li');
    newLi1.setAttribute("basePrice", price);
    newLi1.innerHTML = all['from'] + priceCorrect + document.getElementById("mainCurrency").getAttribute("symbol")

    var newLi3 = document.createElement('li');
    newLi3.className = "limiddle";
    var text6 = document.createTextNode(city);
    newLi3.appendChild(text6);

    var newLi5 = document.createElement('li');
    var starsSymbol = "";
    for (var i = 0; i < stars; i++)
        starsSymbol += '&#9733;';
    var text7 = document.createTextNode(starsSymbol);
    newLi5.innerHTML = starsSymbol;

    var newU = document.createElement('ul');
    newU.className = "post_item_inf";


    newLi1.className = "lileft";
    newLi3.className = "limiddle";
    newLi5.className = "liright";

    newU.appendChild(newLi1);
    newU.appendChild(newLi3);
    newU.appendChild(newLi5);

    addElement(parent, id, name, unavailable, photo, newU);
}

function AddAllAdmin(oneRecord, ncol) {
    addElementAdmin('#allA' + ncol + 'col', oneRecord[0], oneRecord[1], oneRecord[5], oneRecord[6]);
}

function AddAllUser(oneRecord, ncol) {

    addElementUser('#all' + ncol + 'col', oneRecord[0], oneRecord[1], oneRecord[5], oneRecord[6], oneRecord[2], oneRecord[3], oneRecord[4]);
}


function setPricesAll() {
    var prices = document.getElementsByClassName("lileft");
    for (var i = 0; i < prices.length; i++) {
        var price = parseInt(parseFloat(prices[i].getAttribute("basePrice")) * parseFloat(document.getElementById("mainCurrency").getAttribute("value")));
        prices[i].innerHTML = all['from'] + price + " " + document.getElementById("mainCurrency").getAttribute("symbol");
    }
}
//for both
function getAllFromDb(AddAll)
{
    xmlhttp = new XMLHttpRequest();
    var postData = new FormData();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var someVar = String(this.responseText);
            var allRecords = someVar.split("|;|");
            for (var i = 1; i < allRecords.length - 1; i++) {
                var oneRecord = allRecords[i].split("|,|");
                AddAll(oneRecord, ((i - 1)% 3) + 1);
            }

            //resize all added offers
            $(".post_item_img").each(function () {
                $(this).height($(this).width() * 0.75);
            });
        }
    };
    xmlhttp.open("POST", "php/getAll.php");
    xmlhttp.send(postData);
}

//for  all -> callback
function getAllCallback() 
{
    all = getAll();
    setMenuLang();
    setContactLang();
    for (var i = 1; i < 4; i++) {
        var title = all['title' + i];
        var titleSplit = title.split(" ");
        if (title.length < 3) {
            document.getElementById("s" + i + "t1").innerHTML = title;
           // $("#s" + i + "t1").html(title);
            continue;
        }
        document.getElementById("s" + i + "t1").innerHTML = titleSplit[0];
        document.getElementById("s" + i + "t3").innerHTML = titleSplit[titleSplit.length - 1];
        document.getElementById("s" + i + "t2").innerHTML = title.replace(titleSplit[titleSplit.length - 1], " ").replace(titleSplit[0], " ");
        document.getElementById("s" + i + "desc").innerHTML = all['desc' + i];
       // $("#s" + i + "t1").html(titleSplit[0]);
        //$("#s" + i + "t3").html(titleSplit[titleSplit.length - 1]);
        //$("#s" + i + "t2").html(title.replace(titleSplit[titleSplit.length - 1], " ").replace(titleSplit[0], " "));
        //$("#s" + i + "desc").html(all['desc' + i]);
        $('#all' + i + 'col').empty();
    }

    document.getElementById("shortTitle").innerHTML = all['roomsShort'];
    //$("#shortTitle").html(all['roomsShort']);

    getAllFromDb(AddAllUser);
}

//first for admin
function LogAllCallback(login) {
    if (login != "unknown")
        getAllFromDb(AddAllAdmin);
    else
        window.location.replace("login.html");
}