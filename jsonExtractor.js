
function extractJson(json, divid){

var elem = document.getElementById(divid);
var jsonObj = angular.fromJson(json);
var strHtml =" " ;

angular.forEach(jsonObj, function(value, key) {
     if (value.indexOf('jpg') == -1 ){	
   	  strHtml = strHtml +  "<p> "  + key +  " :  "  + value + "</p>" ; 
     }else{
           strHtml = strHtml +  "<p> "  + key +  " :  "  + " <img src='" +  value + "' />" + "</p>" ; 
     
} 
})
elem.innerHTML =strHtml;





}

 
