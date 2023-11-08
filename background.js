console.log('hello from background.js')




browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({"url": "/find.html"});
});



//-----------------------------------------------------------------------------
// background.js

 
let array=[]
  
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleMessage(message).then
  (

    (array) => {
      console.log('array=','sender=',sender.url)
      obj={url:sender.url,array}
      return obj;
      
    }
  )
  .then
  (

      (obj)=>
      {
       console.log('sending=',array)
      let activeTabUrl=""
       browser.tabs.onActivated.addListener(function (activeInfo) {
                    browser.tabs.get(activeInfo.tabId, function (activeTab) {
                      activeTabUrl = activeTab.url;
                      // Sending the url to popup.js
                      browser.tabs.sendMessage(activeTab.id, { action: "activateContentScript", url: activeTabUrl });
  });
});
       browser.storage.sync.set({url: obj.url,array: obj.array});
       console.log('saved=',{url: obj.url,array: obj.array})
       
       
       
       


      }


  )
  .catch((error) => {
    console.error(error);
  });

});


function handleMessage(message) {
 
  const prom= new Promise(
    
    (resolve,reject)=>
    {
      if (message.type === "log") {
        array = message.message;
        
        resolve(array);
      } else {
        //reject(new Error("Invalid message type"));
      }
    }
     
  )
  return prom
}
