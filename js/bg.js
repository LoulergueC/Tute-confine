/* Communication des modifications des options à la page cible */
chrome.storage.onChanged.addListener(function(changes, namespace) {
  
  chrome.tabs.query({url: "https://pass.tharmo.tutotours.fr/*"}, function(tabs) {
    for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {greeting: "hello"});
    }
  });
  
})