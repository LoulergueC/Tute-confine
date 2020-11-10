var timerel = $('#timerPassageColle').parent().parent();
var w = timerel.parent().width();


function timer() {
  chrome.storage.sync.get(['timer'], function(result) {
    if(result.timer == "true") {
      timerel.css({"position": "fixed"});
      timerwidth();
    } else {
      timerel.css({"position": "relative"});
    };
  });
}  

function qcs() {
  chrome.storage.sync.get(['qcs'], function(result) {
    if(result.qcs == "true") {
      $(".bold").each(function() {
        var html = $(this).html();
        var newhtml = html.replace("QCS", "<span class='QCS'>QCS</span>");
        $(this).html(newhtml);
      });
    } else {
      $(".bold").each(function() {
        var html = $(this).html();
        var newhtml = html.replace("<span class='QCS'>QCS</span>", "QCS");
        $(this).html(newhtml);
      });
    };
  });
}

function dark() {
  chrome.storage.sync.get(['dark'], function(result) {
    if(result.dark == "true") {
        timerel.css({"background-color": "rgb(25,25,25)", "color": "rgba(255,255,255,.6)"});
        $('#terminerPassageColle').children().children().css({"background-color": "#e74c3c"});
        $('body').css({"background-color": "rgb(26,26,28)"});

        $('body').append('<style id="cardstyle">.card{background-color: rgb(24,24,27);color: rgba(255,255,255,.6);}</style>');

        $('.white').addClass("dark_white").removeClass("white");
    } else {
        timerel.css({"background-color": "white", "color": "black"});
        $('body').css({"background-color": "white"});

        $('#cardstyle').remove();  

        $('.dark_white').addClass("white").removeClass("dark_white");
    }
  });
}
  
function truedark() {  
  chrome.storage.sync.get(['truedark'], function(result) {
    if(result.truedark == "true") {

        $('body').append('<style id="navstyle">nav, footer{background-color: #18181b !important}</style>');

    } else {

        $('#navstyle').remove();
    }
  });
}

/* Initiate all options if checked on first load */
timer();
qcs();
dark();
truedark();

/* Lien entre changement d'option et affichage sur la page */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "timer") {
      timer();
    }
    
    if (request.greeting == "qcs") {
      qcs();
    }
    
    if (request.greeting == "dark") {
      dark();
    }
    
    if (request.greeting == "truedark") {
      truedark();
    }
});

/* Correction de la largeur du timer quand il devient 'fixed' */
function timerwidth(){
  timerel.css({"width": w});
}

/* Adaptation de la largeur du timer à chaque changement de taille de la page */
$(window).resize(function() {
  timerwidth();
});