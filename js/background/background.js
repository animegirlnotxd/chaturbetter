// chrome.tabs.onUpdated.addListener(function (tabId , changeInfo, tab) {
//     if (changeInfo.status === 'complete') {
//         console.log(tab.url);
        
//         chrome.tabs.sendMessage(
//             tab.id,
//             {status: 'pageLoaded', tabUrl: tab.url.toLowerCase()});
//     }
// });