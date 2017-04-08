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

	var footerNavigation = {
		paths : {
			fr : ["/fr","/fr_pourFemme","/fr_pourHomme","/fr_pourEnfant","/fr_services","http://www.business.alamirabijouterie.ma/fr","/fr_aboutUS"],
			en : ["/en","/en_forWomen","/en_forMen","/en_forChildren","/en_services","http://www.business.alamirabijouterie.ma/en","/en_aboutUS"],
			es : ["/es","/es_paraMujeres","/es_paraHombres","/es_paraNinos","/es_servicios","http://www.business.alamirabijouterie.ma/es","/es_aboutUS"]
		},
		elements : [
			document.getElementById("Qt5uepaWumPbbXbNhBWQBwTJGUZQsHRf"), // home
			document.getElementById("kUT7UyKw6IlyOJFUiMwaQF9LViPoe3lv"), // forWomen
			document.getElementById("bIrrPDz3sTxd4kqEwAHvDiXtZTdrIfEa"), // forMen
			document.getElementById("cdluwn31xFaMUx07af25gDxq508I81Ef"), // forChildren
			document.getElementById("fp6P9nSzLvXrLUdwbTJtBTgwImsteMvn"), // services
			document.getElementById("MNHmWnWxmmfEKMTsPxkHG8JfwpkLDNJX"), // business
			document.getElementById("lkPTVKtBDgJUeTzNK9Itc2q0oSGRBrkx")  // aboutUS
		]
	};

	for(var i=0; i < footerNavigation.elements.length; i++) {
      footerNavigationSetOnClickListener(footerNavigation.elements[i],i);
    }

    function footerNavigationSetOnClickListener (navigationElement,pos) {
    	
      navigationElement.addEventListener("click", function(){
          window.location.href = domainName + footerNavigation.paths[langageChoosen][pos];
          if(pos==5) // Sub domain "business.alamirabijouterie.ma/"
          	window.location.href = footerNavigation.paths[langageChoosen][pos];
      });
    };

	document.getElementById("LXxFAH9PKgdU31GH1Hxw95VDlJl8kQis").addEventListener("click", function() { // Send Form icon
    	$("#wHV4HPp39XCKIxlp3y6mRqvOsytJtLle").click(); // explicitly trigger the button form that is hidden bellow our icon ">"
    });

</script>