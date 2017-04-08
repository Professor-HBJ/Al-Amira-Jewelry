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

 	// jewelry types in order
    var jewelryTypes = {
      fr : ["fiancailles-&-mariage","colliers","bagues","boucles","bracelets","montres","ensemble","orientaleMdama"],
      en : ["engagement-&-weddings","neckalges","rings","earrings","bracelets","watches","jewelrySet","orientalMdama"],
      es : ["compromiso-&-matrimonio","collares","anillos","aretes","pulseras","relojes","cojunto","orientalMdama"]
    };

	// Boxes of each jewelry type that contain the title and description and URL for each type for each gender
	var jewelryTypeBoxes = [
      document.getElementById("BgxrQ5hEGZyPsG6b9E5zWgTvJVv8p5sT"), // weddings
      document.getElementById("bLRVt6TCQF23C6vkXdvwksla7FRSxi9x"), // neckalges
      document.getElementById("gFIPe935TLGT3v8Ms7qu3uyVF3uNGekw"), // rings
      document.getElementById("ffR3fJEFQHfTGOLM93BZAU1uJ4BS81Mo"), // earrigns
      document.getElementById("AOyT8np88Vnv36ATKKBoZOHXSN57n4V4"), // bracelets
      document.getElementById("SWxR6ixXGKsko1veogIyPEhn32ROgkpt"), // watches
      document.getElementById("IsHM4nmpT43V4aSIKOgpm6nmiTzr5EyK"), // jewelry Set
      document.getElementById("AEIxatW3L9ZTlpMaTGsRKQTRSZsQ24BW")  // oriental Mdama
    ];

	removeBoxesWhenMenGenderChoosen = [3,6,7];    
	removeBoxesWhenChildrenGenderChoosen = [0,5,7];    

	if(translateToEnglish(genderChoosen) == "forMen") // Remove some boxes when Men gender is choosen
		for (var i = removeBoxesWhenMenGenderChoosen.length -1; i >= 0; i--) {
		   	jewelryTypeBoxes.splice(removeBoxesWhenMenGenderChoosen[i],1);
		   	jewelryTypes.fr.splice(removeBoxesWhenMenGenderChoosen[i],1);
		   	jewelryTypes.en.splice(removeBoxesWhenMenGenderChoosen[i],1);
		   	jewelryTypes.es.splice(removeBoxesWhenMenGenderChoosen[i],1);
		}
	
	if(translateToEnglish(genderChoosen) == "forChildren") // Remove some boxes when Children gender is choosen
		for (var i = removeBoxesWhenChildrenGenderChoosen.length -1; i >= 0; i--) {
		   	jewelryTypeBoxes.splice(removeBoxesWhenChildrenGenderChoosen[i],1);
		   	jewelryTypes.fr.splice(removeBoxesWhenChildrenGenderChoosen[i],1);
		   	jewelryTypes.en.splice(removeBoxesWhenChildrenGenderChoosen[i],1);
		   	jewelryTypes.es.splice(removeBoxesWhenChildrenGenderChoosen[i],1);
		}

 	for(var i=0; i < jewelryTypeBoxes.length; i++) {
      jewelryTypeBoxSetOnClickListener(jewelryTypeBoxes[i],i);
    }

    function jewelryTypeBoxSetOnClickListener (jewelryTypeBox,pos) {
      jewelryTypeBox.addEventListener("click", function(){
          window.location.href = domainName + "/" + langageChoosen + "_" + jewelryTypes[langageChoosen][pos]  + "_" + genderChoosen;
      });
    };

    

</script>