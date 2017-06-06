allIcons = [
    ["aircondition", "Klimatyzacja"],
    ["disable", "Udogodnienia dla niepełnosprawnych"],
    ["food", "Komplet sztućców"],
    ["kid", "Udogodnienia dla dzieci"],
    ["oven", "Pierakrnik"],
    ["shower", "Prysznic"],

    ["balcony", "Balkon"],
    ["dishes", "Komplet naczyń"],
    ["glass", "Komplet kieliszków"],
    ["kitchen", "Lodówka"],
    ["parking", "Miejsce parkingowe"],
    ["toster", "Toster"],

    ["bath", "Wanna"],
    ["dishwasher", "Zmywarka"],
    ["hairdryer", "Suszarka do włosów"],
    ["laundry", "Pralka"],
    ["pet", "Zwierzęta Dozwolone"],
    ["towel", "Komplet ręczników"],

    ["clothersdryer", "Suszarka do ubrań"],
    ["ekettle", "Czajnik elektryczny"],
    ["hifi", "Zestaw HiFi"],
    ["lift", "Winda"],
    ["pot", "Komplet garnków"],
    ["tv", "Telewizor"],

    ["coffe", "Ekspres do kawy"],
    ["ethernet", "Internet przewodowy"],
    ["iron", "Żelazko"],
    ["linen", "Komplet pościeli"],
    ["satelite", "Telewizja satelitarna"],
    ["vaccumcleaner", "Odkurzacz"],

    ["computer", "Komputer stacjonarny"],
    ["fireplace", "Kominek"],
    ["jacuzzi", "Jacuzzi"],
    ["microwave", "Kuchenka mikrofalowa"],
    ["shampoo", "Komplet kosmetyków"],
    ["wifi", "WiFi"]];

//SHARED MENU
var menu = [];
menu['home'] = "Strona główna";
menu['short'] = "Wynajem krótkoterminowy";
menu['long'] = "Wynajem długoterminowy";
menu['cooperation'] = "Współpraca";
menu['aboutUS'] = "O nas";
menu['FAQ'] = "FAQ";
menu['contact'] = "Kontakt";
function getMenu() {
    return menu;
}

//SHARED CONTACT
var contact = [];
contact['contactUs'] = "Skontaktuj się z nami";
contact['onDemand'] = "Później na życzenie";
contact['findUs'] = "Znajdź nas";
contact['findUs1'] = "Oprócz strony prowadzimy aktywne profile na wielu portalach społecznościowych";
contact['findUs2'] = "Znajdź nas i śledź najnowsze oferty i okazje!";
contact['sendMsg'] = "Wyślij wiadomość";
contact['msg'] = "Wiadomość";
contact['address'] = "Adres";
contact['msgErr'] = "Proszę podać treść wiadomości";
contact['addressErr'] = "Proszę podać właściwy adres email";
contact['thanks'] = "Dziękujemy za wysłanie</br>wiadomości";
function getContact() {
    return contact;
}


//ONE.HTML
function getRoom(n) {
    return n > 4 ? "pokoi" : (n > 1 ? "pokoje" : "pokój");
}
function getPeople(n) {
    return n > 4 ? "osób" : (n > 1 ? "osoby" : "osoba");
}
function getBed(n) {
    return n > 4 ? "łóżek" : (n > 1 ? "łóżka" : "łóżko");
}
function getLastMinute(str) {
    return "Rabat " + str + "% na oferty Last Minute!";
}
function getMinDays(str) {
    var days = parseInt(str) > 1 ? "dni" : "dzień";
    return "Wynajem na minum " + str + " " + days + "!";
}
function getFrom(str) {
    return "Od " + str + " zł za dzień";
}

function getErrorMinDates(str) {
    var days = parseInt(str) > 1 ? "dni" : "dzień";
    return "Minimalny czas wynajmu to " + str + " " + days + "!";
}
function getErrorPrevDates() {
    return "Data odjazdu musi być późniejsza od daty przyjazdu!";
}
function getErrorCurrentDates() {
    return "Wybrana data już minęła!";
}

var one = [];
one['error'] = "Brak oferty o podanym numerze";
one['reservation'] = "Zarezerwuj";
one['room'] = getRoom;
one['people'] = getPeople;
one['bed'] = getBed;
one['lastMinute'] = getLastMinute;
one['minDays'] = getMinDays;
one['currency'] = "zł";
one['priceDay'] = "Cena za dzień od:";
one['from'] = getFrom;
one['map'] = "Mapa";
one['extras'] = "Udogodnienia w standardzie";
one['calendar'] = "Kalendarz dostępności";
one['calendarError'] = "Kalendarz niedostępny";
one['calendarUnav'] = "Brak wolnych terminów";
one['curToZl'] = 1;
one['gallery'] = "GALERIA";
one['sendRes'] = "Wyślij rezerwację";
one['dateFrom'] = "Data przyjazdu";
one['dateTo'] = "Data odjazdu";
one['nKids'] = "Dzieci do lat 7";
one['nAdults'] = "Dorośli";
one['name'] = "Imię i nazwisko";
one['email'] = "Adres e-mail";
one['briefMsg'] = "Krótka wiadomość";
one['total'] = "Razem:";
one['onlineRes'] = "Rezerwacja online:";
one['req'] = "Pole wymagane!";
one['wrongEmail'] = "Adres email nieprawidłowy!";
one["getErrorMinDates"] = getErrorMinDates;
one["getErrorPrevDates"] = getErrorPrevDates;
one["getErrorCurrentDates"] = getErrorCurrentDates;
one['thankYou'] = "Dziękujemy!";
one['resError'] = "Przepraszamy, coś poszło nie tak. Proszę złożyć rezerwację ponownie";
one['thankYouLong'] = "Szczegóły zostały wysłane na podany adres e-mail";
one["fillDates"] = "Proszę podać obie daty!";
one['calculate'] = "Oblicz";

function getOne() {
    return one;
}

//INDEX.HTML
var all = [];
all['title1'] = "Zobacz inny Gdańsk";
all['desc1'] = "Gdaśnk to miasto z wieloletnią tradycją. Dzięki naszym apartamentom będziesz mógł ją zasmakować jak nigdy dotąd";
all['title2'] = "Wynajem luksusowych apartamentów";
all['desc2'] = "Gdaśnk to miasto z wieloletnią tradycją. Dzięki naszym apartamentom będziesz mógł ją zasmakować jak nigdy dotąd";
all['title3'] = "Zacznij inwestować w nieruchomości";
all['desc3'] = "Sprawdź zakładkę Współpraca aby dowiedzieć się więcej jak możesz zacząć zarabiać dzięki naszej stronie";
all['roomsShort'] = "Pokoje do wynajmu krótkoterminowego";
all['from'] = "od ";
all['currency'] = " zł";
all['unavailable'] = "Brak wolnych terminów :(";
all['curToZl'] = 1;

function getAll() {
    return all;
}

//LONGTERM.HTML
var long = [];
long['title1'] = "Wynajem długoterminowy";
long['title2'] = "Wynajmij miekszkanie na pobyt dłuższy niż miesiąc";
long['desc'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function getLong() {
    return long;
}

//COOPERATION.HTML
var cooperation = [];
cooperation['title1'] = "Współpraca";
cooperation['title2'] = "Wynajmij miekszkanie na pobyt dłuższy niż miesiąc";
cooperation['desc'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function getCooperation() {
    return cooperation;
}

//ABOUTUS.HTML
var aboutUs = [];
aboutUs['title1'] = "O nas";
aboutUs['title2'] = "Wynajmij miekszkanie na pobyt dłuższy niż miesiąc";
aboutUs['desc'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function getAboutUs() {
    return aboutUs;
}

//FAQ.HTML
var faq = [];
faq['title1'] = "FAQ";
faq['title2'] = "Najczęściej zadawane pytania";

var questions = [];
questions[0]['question'] = "Czy muszę dodatkowo płacić za sprzątanie?";
questions[0]['answer'] = "Tak";
questions[1]['question'] = "Czy jest z Państwem kontakt bezpośredni?";
questions[1]['answer'] = "Tak";
questions[2]['question'] = "Czy mogę odwołać rezerwację w każdej chwili?";
questions[2]['answer'] = "Nie";

faq['questions'] = questions;

function getFAQ() {
    return faq;
}