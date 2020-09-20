// chrome.tabs.onUpdated.addListener(function (tabId , changeInfo, tab) {
//     if (changeInfo.status === 'complete') {
//         console.log(tab.url);
        
//         chrome.tabs.sendMessage(
//             tab.id,
//             {status: 'pageLoaded', tabUrl: tab.url.toLowerCase()});
//     }
// });


// chrome.webRequest.onBeforeRequest.addListener(
//     m3u8,
//     { urls: ["*://*/*.m3u8*", "*://*/*.ts*"] }
// );

// function m3u8(info) {
//     if (info.url.split("?")[0].split("#")[0].endsWith("m3u8")) {
//         console.log(info.url);
//     }
// }