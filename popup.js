document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('demistify');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      if ( tab.url.indexOf("sudouest.fr") > -1){

        var scriptSO = "";
        scriptSO += "document.querySelector('div.entry-content div.short').style.display = 'none';";
        scriptSO += "document.querySelector('div.entry-content div.long').style.display = 'block';";
        scriptSO += "document.querySelector('h2.entry-summary span.pastille-qualif.premium').style.backgroundColor  = 'red';";
        scriptSO += "document.querySelector('h2.entry-summary span.pastille-qualif.premium').innerHTML = 'OWNED';";
        scriptSO += "document.querySelector('section.article-premium-locked div.premium-bottom').style.display = 'none';";
        scriptSO += "document.querySelector('section.article-premium-locked div.info-text').style.backgroundColor = 'red';";
        scriptSO += "document.querySelector('section.article-premium-locked div.info-text').style.padding = '10px';";
        scriptSO += "document.querySelector('section.article-premium-locked div.info-text').style.color = 'white';";
        scriptSO += "document.querySelector('section.article-premium-locked div.info-text').innerHTML = 'Cet article a été débloqué par <a style=\"color:white;text-decoration: underline;\"href=\"http://alexandreverry.fr\">alexandreverry.fr</a>';";

        chrome.tabs.executeScript(tab.id, {code: scriptSO}, function(response)
        {
          console.log("Sud-ouest owned.");
        });
      }
    });
  }, false);
}, false);
//sudouest.fr