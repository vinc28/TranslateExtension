document.addEventListener("DOMContentLoaded", addListener);

function addListener(){
	var translateButton = document.getElementById("translate");
	translateButton.addEventListener("click", translateText);
}

function translateText() {
	var text = getValueFromElement("toTranslate");
	var fromLanguageIden = getLanguageIden("fromLanguage");
	var toLanguageIden = getLanguageIden("toLanguage");
	var apiCallURL = "http://api.mymemory.translated.net/get?q=" + text + "&langpair=" + fromLanguageIden + "|" + toLanguageIden;
	console.log(apiCallURL);
	var result = jQuery.getJSON(apiCallURL, function(response, status, jqXHR){
		   var raw = jqXHR.responseText;
		   var parsedJSON = JSON.parse(raw);
		   console.log(response);
		   var translatedText = "<font size=3>" + parsedJSON["responseData"]["translatedText"] + "</font>";
		   document.getElementById("translatedText").innerHTML = translatedText;
		   });
}

//boxId is the id of the element
function getValueFromElement(boxId){
	var element = document.getElementById(boxId);
	var value = element.value;
	return value;
}


//boxId is the id of the language dropdown list
function getLanguageIden(boxId){
	var language = getValueFromElement(boxId);
	var iden = getIdentifier(language);
	return iden;
}

//language is the language value from the dropdown box
function getIdentifier(language){
	switch(language) {
		case "english":
			return "en";
		case "french":
			return "fr-FR";
		case "chinese":
			return "zh-CN";
		case "spanish":
			return "es";
		}
}


