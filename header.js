<script>
	/* NB : We already the following variables 
			// domainName
			// langageChoosen
			// genderChoosen
			// connectedDeviceType
			var forGender = { // to translate all gender in es/en/fr
		      forMen:       ["forMen", "pourHomme","paraHombres"],
		      forWomen:     ["forWomen", "pourFemme", "paraMujeres"],
		      forChildren:  ["forChildren", "pourEnfant","paraNinos"]
		    };
		    // function translateToEnglish (genderChoosen)
	*/

	var headerNavigation = {
		paths : {
			fr : ["/fr","/fr_catalogue","/fr","/fr","http://www.business.alamirabijouterie.ma/fr"],
			en : ["/en","/en_catalog","/en","/en","http://www.business.alamirabijouterie.ma/en"],
			es : ["/es","/es_catalogo","/es","/es","http://www.business.alamirabijouterie.ma/es"]
		},
		elements : [
			document.getElementById("saoqW3pV8zbpQGoHscSxqCWpK8m9mwyp"), // home
			document.getElementById("PP2rEhJ9IFLtRCx1SxDCZ99FAFIBhL1u"), // catalo
			document.getElementById("FoWsnikRgL990OekekirmeSl4aFRig4g"), // logo
			document.getElementById("FoWsnikRgL990OekekirmeSl4aFRig4g"), // logo title
			document.getElementById("aR447tPGPX14xNmnZw305ERIDFtBlUCN")  // business
		]
	};

	for(var i=0; i < headerNavigation.elements.length; i++) {
      headerNavigationSetOnClickListener(headerNavigation.elements[i],i);
    }

    function headerNavigationSetOnClickListener (navigationElement,pos) {
      navigationElement.addEventListener("click", function(){
          window.location.href = domainName + headerNavigation.paths[langageChoosen][pos];
          if(pos==4) // Sub domain "business.alamirabijouterie.ma/"
          	window.location.href = headerNavigation.paths[langageChoosen][pos];
      });
    };

    document.getElementById("yFubqTTrEoxfDJdQEiz7G7Aw5yAd7hhC").addEventListener("click", function() { // langage choose paragraphe
    	$(".langageCircle-center").click(); // explicitly trigger the button
    });
	document.getElementById("ynSZlc0tbusTZ1DIneAtrxTCmPTZQ8Ob").addEventListener("click", function() { // gender choose paragraphe
    	$(".genderCircle-center").click(); // explicitly trigger the button
    });

</script>