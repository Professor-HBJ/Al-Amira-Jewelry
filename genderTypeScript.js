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
	
	var forGenderTranlsate = {
      fr:  ["pourFemme","pourHomme","pourEnfant"],
      es:  ["paraMujeres","ParaHombres","paraNinos"],
      en:  ["forWomen","forMen","forChildren"]
    };

    var genderIcons = [
      document.getElementById('forWomenIcon'),
      document.getElementById('forMenIcon'),
      document.getElementById('forChildrenIcon')
    ];

    var genderIconsOrder = ["forWomen", "forMen", "forChildren"];


    for(var i=0; i < genderIcons.length; i++) {
      genderIconsOnClickListener(genderIcons[i], genderIconsOrder[i], i);
    };

    function genderIconsOnClickListener (genderIcon, gender, pos) {
      genderIcon.onclick = function() {
         if(forGender[gender].indexOf(genderChoosen) > -1) {  // gender already choosen
         	return;
         }
        window.location.href = domainName + "/" + langageChoosen + "_" + forGenderTranlsate[langageChoosen][pos];
      };
    };

</script>
