<script>

    /***************************************************** START FAKE LOADER *****************************************************/
    $(document).ready(function(){
      var fakeLoaderTimeToHide = 7500; 
      var logoPath = { fr: "http://i.imgur.com/2vF5AR7.png", en: "https://images.assets-landingi.com/5fe2NaY5/EN.png", es: "https://images.assets-landingi.com/y4d5bfL0/ES.png"};
      // Positive Citations
      var onPageLoaderCitation = {
        fr : ["“Un pessimiste voit la difficulté dans chaque opportunité, un optimiste voit l'opportunité dans chaque difficulté”",
              "“Le monde est un livre, et ceux qui ne voyagent pas n’en lisent qu’une page”",
              "“Cessez d’attendre le moment parfait, prenez le moment que vous avez et rendez-le parfait”",
              "“Le sage ne dit pas ce qu'il sait, le sot, lui, ne sait pas ce qu'il dit”",
              "“Vous devez habituellement attendre pour ce qui vaut la peine d'attendre”",
              "“Ce n’est pas parce que les choses sont difficiles que nous n’osons pas les faire. C’est parce que nous n’osons pas les faire qu’elles sont difficiles”",
              "“J’ai décidé d’être heureux parce que c’est bon pour la santé”",
              "“Qui ne se plante jamais n’a aucune chance de pousser”",
              "“Voir le possible là où les autres voient l’impossible, telle est la clé du succès”",
              "“Si tu dors et que tu rêves que tu dors, il faut que tu te réveilles deux fois pour te lever”"
             ],

        en : ["“Glorious things are waiting for you ! We're just getting them ready”",
              "“If you spend your whole life waiting for the storm, you'll never enjoy the sunshine”",
              "“Don't wait for the perfect moment. Take the moment and make it perfect”",
              "“Amazing things come to those who wait”",
              "“You usually have to wait for that which is worth waiting for”",
              "“Don't wait for opportunity. Create it”",
              "“Don't forget to subscribe to our newsletter to receive occasional updates”",
              "“Don’t worry about failures, worry about the chances you miss when you don’t even try”",
              "“I am thankful for all of those who said NO to me. Its because of them I’m doing it myself”",
              "“The best revenge is massive success”"
             ],

        es : ["“Cree que puedes y ya habrás hecho medio camino”",
              "“Estoy agradecido a todos los que me dijeron no. Gracias a ellos lo estoy haciendo por mí mismo”",
              "“Siempre parece imposible hasta que se hace”",
              "“Una actitud sana es contagiosa. Deja que otros se impregnen de ella”",
              "“Lo que no te mata te hace más fuerte”",
              "“Si miras al Sol, no verás las sombras”",
              "“Incluso la noche más oscura terminará con la salida del Sol”",
              "“La paciencia es amarga, pero su fruto es dulce”",
              "“Nadie que haya dado lo mejor de sí mismo lo ha lamentado”",
              "“Nunca eres demasiado viejo para tener otra meta u otro sueño”"
             ]           
      };

      function randomCitation (langage) {
        return onPageLoaderCitation[langage][Math.floor((Math.random() * 9) + 0)]; // since we have 10 citations for each langage
      };

      function startFakeLoader(timeToHide, logoPath) {
        var fakeLoaderDivNode = document.createElement("div");   
        fakeLoaderDivNode.setAttribute("class","fakeloader"); // add class fakeloader that will be used by the plugin
        document.body.insertBefore(fakeLoaderDivNode, document.body.firstChild); // insert the div as the first child of the document body
        
        var imageHtml = '<img style="width:422px;height:185px;" src="'+logoPath+'">';
        if (connectedDeviceType ==="Mobile") {
          imageHtml = '<img style="width:290px;height:127px;" src="'+logoPath+'">';
        }
        
        var backgroundColor = ["#952a73","#DA70D6","#4A96AD","#f46d3b","#7D1935","#3B3738","#C63D0F","#005A31","#558C89","#DE1B1B"][Math.floor((Math.random() * 9) + 0)];;
        
        $(document).ready(function(){
                    $(".fakeloader").fakeLoader({
                        timeToHide: timeToHide,
                        zIndex: "1000000", //Default zIndex
                        bgColor: backgroundColor, 
                        spinner: "spinner6",
                        image: imageHtml,
                        citation : randomCitation((pathname == "/") ? "fr" : pathname[1] + pathname[2])
                    });
                });
      };

      startFakeLoader(fakeLoaderTimeToHide, logoPath[langageChoosen]); 
      /******************************************* END OF FAKE LOADER *******************************************/
    });
    
    /*********************************************** SET UP THE PATH AND HISTORY ************************************************/
    var forGender = {
          forMen:       ["forMen", "pourHomme","paraHombres","formen","pourhomme","parahombres"],
          forWomen:     ["forWomen", "pourFemme", "paraMujeres","forwomen","pourfemme","paramujeres"],
          forChildren:  ["forChildren", "pourEnfant","paraNinos","forchildren","pourenfant","paraninos"]
        };
    var myHistory = [];
    var domainName = "http://alamirabijouterie.ma";
    var connectedDeviceType = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))  ? "Mobile":"Desktop";
    var pathname = window.location.pathname;
    var langageChoosen = (pathname == "/") ? "fr" : pathname[1] + pathname[2]; // Set fr as the default langage to "fr" if no langage was been choosen yet
    var forGenderTranslate = {
      forWomen : {fr: "pourFemme", en: "forWomen", es: "ParaMujeres"},
      forMen : {fr: "pourHomme", en: "forMen", es: "paraHombres"},
      forChildren : {fr: "pourEnfant", en: "forChildren", es: "paraNinos"}
    };  
    // Set forWomen as the default gender if no gender was been choosen yet and capitalize the first lettre ( exp : 'H'omme 'E'nfant ...)
    var genderChoosen = (pathname.substr(0,pathname.indexOf("_")).length == 0) ? forGenderTranslate.forWomen[langageChoosen] : (function () {
      if((forGender.forMen.indexOf(pathname.substr(pathname.indexOf("_")+1))) > -1) 
        return forGenderTranslate.forMen[langageChoosen];
      return forGenderTranslate.forChildren[langageChoosen];
    }());
    pathname = "/" + langageChoosen;
    window.history.pushState(myHistory, "homePage", pathname);
    pathname += "_" + genderChoosen;
    window.history.pushState(myHistory, "homePage", pathname);
    /******************************************** SET UP THE PATH AND HISTORY : END *********************************************/
    

    /************************************************ CIRCLE ANIMATION FUNCTIONS ************************************************/
    $( ".jewelryCategorieCircle-center" ).CircleAnimation({
      rotate: 0,
      radius:120,
      circleSize: 1,
      speed:500
    });
      
    $( ".genderCircle-center" ).CircleAnimation({
      rotate: -26,
      radius:63,
      circleSize: 3,
      speed:500
    });
  
    $( ".langageCircle-center" ).CircleAnimation({
      rotate: 0,
      radius:54,
      circleSize: 2,
      speed:500
    });

    // Some elements that should be hidden when the jewelry circle animation expand
    var elementsToHideOnCircleAnimationExpanded = [
      document.getElementById("SB6XsC9UhUB08lGAyPO1lBJJU2uUWcQw"),
      document.getElementById("foWrUGVCK6T60VoO1e7NxJTvNaHuxcfO"),
      document.getElementById("CwPfdt8cVsetTkqXNmMOwSJp7McLwOTa"),
      document.getElementById("bhysdM9UfgX4S7TDw8zVS9I9PhCQfg25"),
      document.getElementById("ReZ7NzumSeuDHgQlZaTKEyV9KM76MShn")
    ];

    function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    var jewerlyTypesExpanded = false;
    document.getElementById("ChooseCategorieIcon").addEventListener("click", async function(){
      if(jewerlyTypesExpanded) { // that mean we are retracting the animation so we want first the animation to be complete before showing the elemnts
        await sleep(400);
      }
      for(var i=0; i<elementsToHideOnCircleAnimationExpanded.length;i++) {
          if(!jewerlyTypesExpanded) { // that mean it's the first time click the button so we want to unhide the elemnts before expanding the animation
            $(elementsToHideOnCircleAnimationExpanded[i]).hide();
          } else {
            $(elementsToHideOnCircleAnimationExpanded[i]).show();
          }
        }
      jewerlyTypesExpanded = !jewerlyTypesExpanded;
    });
    /********************************************* CIRCLE ANIMATION FUNCTIONS : END *********************************************/

    /******************************************* SOME FUNCTIONS USED BY OTHER SCRIPTS *******************************************/
    function translateToEnglish (genderChoosen) {
      if (forGender.forMen.indexOf(genderChoosen) > -1)
        return "forMen";
      if (forGender.forWomen.indexOf(genderChoosen) > -1)
        return "forWomen";
      return "forChildren";
    };
    /**************************************** SOME FUNCTIONS USED BY OTHER SCRIPTS : END ****************************************/

    
</script>