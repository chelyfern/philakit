const filter = {
    url: [
      {
        urlMatches: 'https://www.amazon.com/',
      },
    ],
  };

  try{
    console.log("service worker test");
    if ('serviceWorker' in navigator) {
        chrome.webNavigation.onCompleted.addListener(() => {
                console.timeLog("The user has loaded my amazon!");
              }, filter);
  }
}
    catch(err){
        console.log("service worker test failed");
    }
  
