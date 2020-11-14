/* Communication des modifications des options à la page cible */
chrome.storage.onChanged.addListener(function(changes, namespace) {
  for(key in changes) {
     if(key === 'timer') {
       chrome.tabs.query({url: "https://pass.tharmo.tutotours.fr/*"}, function(tabs) {
          for (var i=0; i<tabs.length; ++i) {
              chrome.tabs.sendMessage(tabs[i].id, {greeting: "timer"});
          }
        });
     }
    
    if(key === 'qcs') {
       chrome.tabs.query({url: "https://pass.tharmo.tutotours.fr/*"}, function(tabs) {
          for (var i=0; i<tabs.length; ++i) {
              chrome.tabs.sendMessage(tabs[i].id, {greeting: "qcs"});
          }
        });
     }
    
    if(key === 'dark') {
       chrome.tabs.query({url: "https://pass.tharmo.tutotours.fr/*"}, function(tabs) {
          for (var i=0; i<tabs.length; ++i) {
              chrome.tabs.sendMessage(tabs[i].id, {greeting: "dark"});
          }
        });
     }
    
    if(key === 'truedark') {
       chrome.tabs.query({url: "https://pass.tharmo.tutotours.fr/*"}, function(tabs) {
          for (var i=0; i<tabs.length; ++i) {
              chrome.tabs.sendMessage(tabs[i].id, {greeting: "truedark"});
          }
        });
     }
    
    if(key === 'doc') {
       chrome.tabs.query({url: "https://pass.tharmo.tutotours.fr/*"}, function(tabs) {
          for (var i=0; i<tabs.length; ++i) {
              chrome.tabs.sendMessage(tabs[i].id, {greeting: "doc"});
          }
        });
     }
  }
})