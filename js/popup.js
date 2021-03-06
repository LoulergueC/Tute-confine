/* Check option if true */
chrome.storage.sync.get(['timer'], function(result) {
  if(result.timer == "true") {
    $('#timer').attr("checked", "checked");
  };
});

chrome.storage.sync.get(['qcs'], function(result) {
  if(result.qcs == "true") {
    $('#qcs').attr("checked", "checked");
  };
});

chrome.storage.sync.get(['dark'], function(result) {
  if(result.dark == "true") {
    $('#dark').attr("checked", "checked");
  };
});

chrome.storage.sync.get(['truedark'], function(result) {
  if(result.truedark == "true") {
    $('#truedark').attr("checked", "checked");
  };
});

chrome.storage.sync.get(['doc'], function(result) {
  if(result.doc == "true") {
    $('#doc').attr("checked", "checked");
  };
});


$('#Feedback').click(function() {
    event.preventDefault();
    var email = 'clement.loulergue@live.fr';
    window.location = 'mailto:' + email;
})


/* Stockage des options en sync */
$('#timer').change(function() {
  if(this.checked) {
    chrome.storage.sync.set({timer: "true"});
  }
  else {
    chrome.storage.sync.set({timer: "false"});
  }
});

$('#qcs').change(function() {
  if(this.checked) {
    chrome.storage.sync.set({qcs: "true"});
  }
  else {
    chrome.storage.sync.set({qcs: "false"});
  }
});

$('#dark').change(function() {
  if(this.checked) {
    chrome.storage.sync.set({dark: "true"}); 
  }
  else {
    chrome.storage.sync.set({dark: "false"});
  }
});

$('#truedark').change(function() {
  if(this.checked) {
    chrome.storage.sync.set({truedark: "true"}); 
  }
  else {
    chrome.storage.sync.set({truedark: "false"});
  }
});

$('#doc').change(function() {
  if(this.checked) {
    chrome.storage.sync.set({doc: "true"}); 
  }
  else {
    chrome.storage.sync.set({doc: "false"});
  }
});