// chrome.runtime.onMessage.addListener(function(request, sender, respond) {	
// 	if (request.status == "pageLoaded") {
//         let tabUrl = request.tabUrl;

//         if(tabUrl == "https://chaturbate.com/" ||
//                      "https://chaturbate.com/female-cams/") {
//             home();
//         }
//         else if (tabUrl.includes("yande")) {
//             respond({urls: yandere()});
//         }
//         else if(tabUrl.includes("konachan")) {
//             respond({urls: konachan()});
//         }
//     }
// });

// function home() {

// }

// $("li" [ts]).eq( 2 ).css( "background-color", "red" );
// $("body").find("[ts]").eq(9).css( "background-color", "red" );
// $("#header").css("background", "none");

// const logo = document.querySelector(".logo-zone > a");
// logo.setAttribute('href', 'https://chaturbate.com/female-cams/');

// change favicon
const better16 = chrome.runtime.getURL('img/better16.png');
$("[type='image/x-icon']").attr("href", better16);

const navigation = document.querySelector('#main > div > div:nth-child(3) > div:nth-child(2)');
const zenDiv = document.createElement('div');

zenDiv.style.float = "left";
zenDiv.style.marginRight = "2px";
zenDiv.style.top = "-5px";
zenDiv.style.position = "relative";
zenDiv.style.overflow = "visible";
zenDiv.style.cursor = "pointer";

const zenA = document.createElement('a');
zenA.style.boxSizing = "border-box";
zenA.style.height = "27px";
zenA.style.display = "inline-block";
zenA.style.padding = "6px 11px 0px";
zenA.style.fontFamily = "UbuntuMedium, Helvetica, Arial, sans-serif";

// zenA.setAttribute('href', `https://google.be/`);
zenA.innerText = "ZEN";
zenDiv.appendChild(zenA);

navigation.appendChild(zenDiv);

zenA.addEventListener('click', e => {
    console.log('zenA');
});