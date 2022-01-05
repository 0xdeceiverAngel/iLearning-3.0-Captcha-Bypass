chrome.webRequest.onBeforeRequest.addListener(
	function(details) { 
        // document.addEventListener("DOMContentLoaded", function(){
	    // document.getElementsByClassName("p-block")[0].remove();
        // });
        return {cancel: true}; 
    },
	{urls: ["https://lms2020.nchu.edu.tw/sysdata/p/4/557f620010d41d8a0f35e6e2ea87e5c6.jpg"]},
	["blocking"]
  );