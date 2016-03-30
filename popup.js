document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('demistify');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      if ( tab.url.indexOf("sudouest.fr") > -1){
        var scriptSO = "document.querySelector('div.entry-content div.short').style.display = 'none';document.querySelector('div.entry-content div.long').style.display = 'block';var articlePastille = document.querySelector('h2.entry-summary span.pastille-qualif.premium');articlePastille.style.backgroundColor  = 'red';articlePastille.innerHTML = 'OWNED';";

        chrome.tabs.executeScript(tab.id, {code: scriptSO}, function(response)
        {
    
        });


        
      }
    });
  }, false);
}, false);
//sudouest.fr