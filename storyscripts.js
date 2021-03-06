 

      var randomNumberGEN = Math.floor((Math.random() * 900000) + 99999).toString();
  
        // Set the URL and user credentials for the LRS  
        var conf = {  
        "endpoint" : "https://watershedlrs.com/api/organizations/3891/lrs/",  
             "auth" : "Basic " + toBase64("e569192095b6e0:b7ee4b467eaaf4")                
        };  
  
        // Tell the xAPI driver to use these creds  
        ADL.XAPIWrapper.changeConfig(conf);  
  
        // This function will programmatically build the statement using variables  
        function sendxAPIStatement(userNumber, action, coursename, activityid) {          
            var statement = {  
                "actor": {  
                    "account": {  
                        "homePage": "http://www.example.com",  
                        "name": userNumber 
                    },  
                    "objectType": "Agent"  
                },  
                "verb": {  
                    "id": "http://example.com/expapi/verbs/" + action,  
                    "display": { "en-US": action }  
                },  
                "object": {  
                    "id": url,  
                    "definition": {  
                        "name": { "en-US": coursename }  
                    },  
                    "objectType": "Activity"
                    },
            "result" : { 
                "response" : activityid    
                }
            };  

            ADL.XAPIWrapper.sendStatement(statement, function(){});   
            // adding an empty function() at the end of sendStatement tells it to fire asynchronousely   
      };  
  


var url = window.location.href;

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*01*01*01*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//var randomNumberGEN = Math.floor((Math.random() * 900000) + 99999).toString();

function checkCookie() {
    var user=getCookie("userID");
     if (user != "") {  
        sendxAPI_Cookie(randomNumberGEN, "found");
    } else {
       user = randomNumberGEN;
       if (user != "" && user != null) {
           setCookie("userID", user, 30);
       }
    }
}



       //This will set the object to the current url
        var url = window.location.href;
   
  
