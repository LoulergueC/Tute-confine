var timerel = $('#timerPassageColle').parent().parent();
var w = timerel.parent().width();

function script() {
  
chrome.storage.sync.get(['timer'], function(result) {
  if(result.timer == "true") {
    timerel.css({"position": "fixed"});
    timerwidth();
  } else {
    timerel.css({"position": "relative"});
  };
});

chrome.storage.sync.get(['qcs'], function(result) {
  if(result.qcs == "true") {
    $("#text").each(function() {
      var text = $(this).text();
      var newtext = text.replace("QCS", "<span class='QCS'>QCS</span>");
      $(this).text(newtext);
    });
  } else {
    $("#text").each(function() {
      var text = $(this).text();
      var newtext = text.replace("<span class='QCS'>QCS</span>", "QCS");
      $(this).text(newtext);
    });
  };
});

chrome.storage.sync.get(['dark'], function(result) {
  if(result.dark == "true") {
      timerel.css({"background-color": "rgb(25,25,25)", "color": "#FDFCFC"});
      $('#terminerPassageColle').children().children().css({"background-color": "#e74c3c"});
      $('body').css({"background-color": "rgb(26,26,28)"});
      
      $('body').append('<style id="cardstyle">.card{background-color: rgb(24,24,27);color: #FDFCFC;}</style>');
      
      $('.white').addClass("dark_white").removeClass("white");
  } else {
      timerel.css({"background-color": "white", "color": "black"});
      $('body').css({"background-color": "white"});
      
      $('#cardstyle').remove();  
    
      $('.dark_white').addClass("white").removeClass("dark_white");
  }
});
  
};

script();

/* Lien entre changement d'option et affichage sur la page */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    script();
  });

/* Correction de la largeur du timer quand il devient 'fixed' */
function timerwidth(){
  timerel.css({"width": w});
}

/* Adaptation de la largeur du timer à chaque changement de taille de la page */
$(window).resize(function() {
  timerwidth();
});