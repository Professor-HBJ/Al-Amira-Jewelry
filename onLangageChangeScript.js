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

    var langageIcons = [
      document.getElementById('englishIcon'),
      document.getElementById('frenchIcon'),
      document.getElementById('spanishIcon')
    ];

    var langageIconsOrder = ["en", "fr", "es"];

    for(var i=0; i < langageIcons.length; i++) {
      genderIconsOnClickListener(langageIcons[i], langageIconsOrder[i], i);
    };

    function genderIconsOnClickListener (langageIcon, langage, pos) {
      langageIcon.onclick = function() {
         if(langage === langageChoosen) // langage already choosen
         	return;
        window.location.href = domainName + "/" + langage + "_" + forGender[translateToEnglish(genderChoosen)][pos];
      }
    }
    
</script>
