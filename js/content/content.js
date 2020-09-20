// chrome.runtime.onMessage.addListener(function (request, sender, respond) {
//     if (request.status == "pageLoaded") {
//         let tabUrl = request.tabUrl;

//         if (tabUrl == "https://chaturbate.com/" ||
//             "https://chaturbate.com/female-cams/") {
//             home();
//         }
//     }
// });

// function home() {

// }

// change default logo redirect to female cams
const logo = document.querySelector(".logo-zone > a");
// const logo = document.getElementsByClassName("logo-zone");
logo.setAttribute('href', 'https://chaturbate.com/female-cams/');

// change favicon
const better16 = chrome.runtime.getURL('img/better16.png');
$("[type='image/x-icon']").attr("href", better16);

// add 'zen' button
const navigation = document.querySelector('#main > div > div:nth-child(3) > div:nth-child(2)');
if (navigation === null) {
    console.log('😣 navigation null');
}
else {
    console.log('😘 navigation not null');

    const zenContainer = document.createElement('div');
    zenContainer.id = "zen-container";
    const zenLink = document.createElement('a');
    zenLink.id = "zen-link";
    zenLink.setAttribute('href', `https://google.be/`);
    zenLink.innerText = "ZEN";
    zenLink.addEventListener('click', e => {
        console.log('zenA');
    });

    zenContainer.appendChild(zenLink);
    navigation.appendChild(zenContainer);
}



// document.querySelector("#users-tab-default").innerText
// "USERS (552)"
// const xd = document.querySelector("#users-tab-default").innerText
// undefined
// xd.indexOf('(')
// 6
// xd.substr(xd.idnex)
// "USERS (549)"
// const dd = xd.substr(xd.indexOf('(') + 1)



// do {
//     if (navigation !== null) {
//         console.log('😘 navigation defined');
//     }
// } while (navigation === null);



// if (document) {
//     do {
//         if (navigation !== null) {
//             console.log('😘 navigation not null');

//             const zenContainer = document.createElement('div');
//             zenContainer.id = "zen-container";
//             const zenLink = document.createElement('a');
//             zenLink.id = "zen-link";
//             zenLink.setAttribute('href', `https://google.be/`);
//             zenLink.innerText = "ZEN";
//             zenLink.addEventListener('click', e => {
//                 console.log('zenA');
//             });

//             zenContainer.appendChild(zenLink);
//             navigation.appendChild(zenContainer);
//         }
//     } while (navigation === null);
// }

// if (!navigation) {
//     console.log('false');
// }


// while (!navigation) {
//     if (navigation) {
//         const zenContainer = document.createElement('div');
//         zenContainer.id = "zen-container";
//         const zenLink = document.createElement('a');
//         zenLink.id = "zen-link";
//         zenLink.setAttribute('href', `https://google.be/`);
//         zenLink.innerText = "ZEN";
//         zenLink.addEventListener('click', e => {
//             console.log('zenA');
//         });

//         zenContainer.appendChild(zenLink);
//         navigation.appendChild(zenContainer);
//     }
// }



// const bodyOld = document.querySelector('body');
// bodyOld.empty();
// const headOld = document.querySelector('head');
// headOld.empty();



// const link = document.createElement('link');
// link.setAttribute('href', 'https://vjs.zencdn.net/7.8.4/video-js.css');
// link.setAttribute('rel', 'stylesheet');

// const head = document.createElement('head');
// head.appendChild(link);


// const script = document.createElement('script');
// script.setAttribute('src', 'https://vjs.zencdn.net/7.8.4/video.js');

// const video = document.createElement('video');
// video.setAttribute('id', 'my-video');
// video.setAttribute('class', 'video-js');
// video.setAttribute('controls', 'controls');
// video.setAttribute('autoplay', 'autoplay');
// video.setAttribute('muted', 'muted');
// video.setAttribute('preload', 'auto');
// video.setAttribute('width', '900');
// // script.setAttribute('height', '264');
// video.setAttribute('data-setup', '{}');

// const source = document.createElement('source');
// source.setAttribute('src', 'https://edge318.stream.highwebmedia.com/live-edge/amlst:kriss0leoo-sd-75fdf2c3de0df8e21a4b94ba9f848eddf5e4121d8926d0cc9d24f321251994e2_trns_h264/chunklist_w94160773_b5128000_t64RlBTOjMwLjA=.m3u8');
// source.setAttribute('type', 'application/x-mpegURL');

// video.appendChild(source);



// const noice = document.querySelector('#main > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1)');
// noice.appendChild(video);

// const body = document.createElement('body');
// body.prepend(video);
// body.appendChild(script);


// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', afterDOMLoaded);
// } else {
//     afterDOMLoaded();
// }

// function afterDOMLoaded() {
//     const follow = document.querySelector("#main > div > div:nth-child(6) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)");
//     follow.textContent = 'FOLLOW';

//     const unfollow = document.querySelector("#main > div > div:nth-child(6) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)");
//     unfollow.textContent = 'UNFOLLOW';

//     const join = document.querySelector("#main > div > div:nth-child(6) > div:nth-child(7) > div:nth-child(1) > div:nth-child(3) > span:nth-child(2) > a");
//     join.textContent = 'JOIN';
// }

// if (document.readyState !== 'complete') {
//     window.addEventListener('load', afterWindowLoaded);
// } else {
//     afterWindowLoaded();
// }

// function afterWindowLoaded() {
//     const follow = document.querySelector("#main > div > div:nth-child(6) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)");
//     follow.textContent = 'FOLLOW';

//     const unfollow = document.querySelector("#main > div > div:nth-child(6) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)");
//     unfollow.textContent = 'UNFOLLOW';

//     const join = document.querySelector("#main > div > div:nth-child(6) > div:nth-child(7) > div:nth-child(1) > div:nth-child(3) > span:nth-child(2) > a");
//     join.textContent = 'JOIN';
// }

