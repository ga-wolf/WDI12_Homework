/* 
The World Translator

Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.

*/

var helloWorld = function(langCode) {
	var helloLang;

	if (langCode == "zh") {
		helloLang = "你好世界";		
	} 
	else if (langCode == "da") {
		helloLang = "Hej Verden";
	}
	else if (langCode == "in") {
		helloLang = "Halo Dunia";
	}
	else {
		helloLang = "Hello, World";
	}

	console.log(helloLang);
}

helloWorld("zh");