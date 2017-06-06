allIcons = [
    ["aircondition", "Aircondition"],
    ["disable", "Disables friendly"],
    ["food", "Set of cutlery"],
    ["kid", "Kids frendly"],
    ["oven", "Oven"],
    ["shower", "Shower"],

    ["balcony", "Balcony"],
    ["dishes", "Set of dishes"],
    ["glass", "Set of glass"],
    ["kitchen", "Refrigerator"],
    ["parking", "Parking place"],
    ["toster", "Toster"],

    ["bath", "Bath"],
    ["dishwasher", "Dishwasher"],
    ["hairdryer", "Hairdryer"],
    ["laundry", "Laundry"],
    ["pet", "Pets allowed"],
    ["towel", "Set of towels"],

    ["clothersdryer", "Clothersdryer"],
    ["ekettle", "Electric Kettle"],
    ["hifi", "HiFi"],
    ["lift", "Lift"],
    ["pot", "Set of pots"],
    ["tv", "Television"],

    ["coffe", "Coffy mashine"],
    ["ethernet", "Wired internet"],
    ["iron", "Iron"],
    ["linen", "Linen"],
    ["satelite", "Satellite TV"],
    ["vaccumcleaner", "Vaccumcleaner"],

    ["computer", "Desktop"],
    ["fireplace", "Fireplace"],
    ["jacuzzi", "Jacuzzi"],
    ["microwave", "Microwave"],
    ["shampoo", "Set of basic cosmetics"],
    ["wifi", "WiFi"]];

//SHARED MENU
var menu = [];
menu['home'] = "Home";
menu['short'] = "Short-term rental";
menu['long'] = "Long-term rental";
menu['cooperation'] = "Cooperation";
menu['aboutUS'] = "About us";
menu['FAQ'] = "FAQ";
menu['contact'] = "Contact";
function getMenu() {
    return menu;
}

//SHARED CONTACT
var contact = [];
contact['contactUs'] = "Contact with us";
contact['onDemand'] = "Later on demand";
contact['findUs'] = "Find us";
contact['findUs1'] = "Besides this website we are in a lot of social media";
contact['findUs2'] = "Find us and follow our new offers";
contact['sendMsg'] = "Send message";
contact['msg'] = "Message";
contact['address'] = "Address";
contact['msgErr'] = "Put proper message body";
contact['addressErr'] = "Put proper email address";
contact['thanks'] = "Thank You for sending</br>message";
function getContact() {
    return contact;
}


//ONE.HTML
function getRoom(n) {
    return n > 2 ? "rooms" : "room";
}
function getPeople(n) {
    return n > 2 ? "people" : "person";
}
function getSingleBed(n) {
    return n > 1 ? "single beds" : "single bed";
}
function getDoubleBed(n) {
    return n > 1 ? "double beds" : "double bed";
}
function getSingleSofa(n) {
    return n > 1 ? "single sofas" : "single sofa";
}
function getDoubleSofa(n) {
    return n > 1 ? "double sofas" : "double sofa";
}
function getBunkleBed(n) {
    return n > 1 ? "bunkle beds" : "bunkle bed";
}
function getLastMinute(str) {
    return str + "% discaunt of Last Minute offers!";
}
function getMinDays(str) {
    return "Rent for minimum of " + str + " days!";
}
function getFrom(str, curr) {
    return "From " + str + " " + curr + " per day";
}

function getErrorMinDates(str) {
    return "Rent for minimum of " + str + " days!";
}
function getErrorPrevDates() {
    return "Departure date have to be later than arrival!";
}
function getErrorCurrentDates() {
    return "This date is in the past!";
}

var one = [];
one['error'] = "This offer doesn't exists";
one['reservation'] = "Reservation";
one['room'] = getRoom;
one['people'] = getPeople;
one['lastMinute'] = getLastMinute;
one['minDays'] = getMinDays;
one['currency'] = "$";
one['priceDay'] = "Price for one day from:";
one['from'] = getFrom;
one['map'] = "Map";
one['streetView'] = "Neighborhood";
one['extras'] = "Standard amenities";
one['calendar'] = "Calendar of availability";
one['calendarError'] = "Calendar inaccessible";
one['calendarUnav'] = "No free terms";
one['curToZl'] = 4;
one['gallery'] = "GALLERY";
one['sendRes'] = "Send reservation";
one['dateFrom'] = "Arrival date";
one['dateTo'] = "Departure date";
one['nKids'] = "Number of kids above 7";
one['nAdults'] = "Number of adults";
one['name'] = "Name and surname";
one['email'] = "E-mail address";
one['briefMsg'] = "Brief message";
one['total'] = "Total:";
one['onlineRes'] = "Online reservation:";
one['req'] = "Field required!";
one['wrongEmail'] = "Invalid email address!";
one["getErrorMinDates"] = getErrorMinDates;
one["getErrorPrevDates"] = getErrorPrevDates;
one["getErrorCurrentDates"] = getErrorCurrentDates;
one['thankYou'] = "Thankyou!";
one['resError'] = "Sorry, something went wrong. Plaese fill the form one more time";
one['thankYouLong'] = "Details were sended on provided e-mail address";
one["fillDates"] = "Choose both dates!";
one['calculate'] = "Calculate";
one['wrongBrowswer'] = "Sorry, form unavailable. Please use another browser.";
one['bedsTitle'] = "Beds configuration";
one['singleBed'] = getSingleBed;
one['doubleBed'] = getDoubleBed;
one['singleSofa'] = getSingleSofa;
one['doubleSofa'] = getDoubleSofa;
one['bunkleBed'] = getBunkleBed;

one['bedsConf'] = [getSingleBed, getDoubleBed, getSingleSofa, getDoubleSofa, getBunkleBed];

function getOne() {
    return one;
}

//INDEX.HTML
var all = [];
all['title1'] = "See another Gdańsk";
all['desc1'] = "Gdansk is the old city with tradition. With our apartments You will visit it like never before";
all['title2'] = "Luxury apartments rental";
all['desc2'] = "Gdansk is the old city with tradition. With our apartments You will visit it like never before";
all['title3'] = "Start your investitions";
all['desc3'] = "Check coopoeration to get know how to earn money with our website";
all['roomsShort'] = "Rooms for short-term rental";
all['from'] = "from ";
all['currency'] = " $";
all['unavailable'] = "No free terms";
all['curToZl'] = 4;

function getAll() {
    return all;
}

//LONGTERM.HTML
var long = [];
long['title1'] = "Long-term rental";
long['title2'] = "Rent apartment for more than month";
long['desc'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function getLong() {
    return long;
}

//COOPERATION.HTML
var cooperation = [];
cooperation['title1'] = "Cooperation";
cooperation['title2'] = "Check hoe to ear money with us";
cooperation['desc'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function getCooperation() {
    return cooperation;
}

//ABOUTUS.HTML
var aboutUs = [];
aboutUs['title1'] = "About us";
aboutUs['title2'] = "Who we are?";
aboutUs['desc'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function getAboutUs() {
    return aboutUs;
}

//FAQ.HTML
var faq = [];
faq['title1'] = "FAQ";
faq['title2'] = "Frequently asked questions";

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