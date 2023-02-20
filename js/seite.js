
    
    const flexItems = document.querySelectorAll('.items');


    // 0 Wird getriggert sobald ein Klick auf das Bild getätigt wird.
    const nextArrow = document.getElementById('nextArrow').addEventListener ('click', vorwaerts); // A
    const prevArrow = document.getElementById('prevArrow').addEventListener('click', ruckwerts); // B
    
    let mobile = false;
    let currentStartIndex = 0;
    
    // 1 Wird getriggert sobald die Seite geladen wird.
    window.addEventListener("load", setup);
    //1.1 Wird getrigger sobald die Seite neu skaliert wird.
    window.addEventListener("resize", setup); // 1.1            Problem: Nach 3 mal wird rechts nicht angezeigt.

    // 2 
    function setup() {
        if(window.innerWidth < 868){ // Wenn Mobilversion dann   
            mobile = true;
            for (let i = 1; i < flexItems.length; i++) {
                flexItems[i].classList.add('invisible');
            }
        } else { // Wenn Desktopversion dann
            mobile = false;
            for (let i = 2; i < flexItems.length; i++) {
                flexItems[i].classList.add('invisible');
            }
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
    1. Verstecke erst die beiden sichtbaren Items
    2. Erhöhe den Startindex um 2 damit die nächsten beiden Items angezeigt werden können.
    3. Wenn der Startindex größer als die Anzahl der Items ist, dann setze den Startindex auf 0. Damit wird von vorne begonnen.
    4. Zeige die nächsten zwei Items an mit der Funktion showFlexItems()
*/
function vorwaerts() {
    if (mobile == true) {
      hideFlexItems1(currentStartIndex);
      currentStartIndex = currentStartIndex + 1;
      if (currentStartIndex >= flexItems.length) {
        currentStartIndex = 0;
      }
        showFlexItems1(currentStartIndex);
    } else {
      hideFlexItems2(currentStartIndex);
      currentStartIndex = currentStartIndex + 2;
  
      if (currentStartIndex >= flexItems.length) {
        currentStartIndex = 0;
      }
      setTimeout(function() {
        showFlexItems2(currentStartIndex);
      }, 1); 
    }
  }

    function ruckwerts(){ 
        if(mobile == true){
            hideFlexItems1(currentStartIndex);
            currentStartIndex -= 1;
            if (currentStartIndex < 0) {
                currentStartIndex = flexItems.length - 1;
            } 
            showFlexItems1(currentStartIndex);
        } else {
            hideFlexItems2(currentStartIndex);
            currentStartIndex -= 2;
            if (currentStartIndex < 0) {
                currentStartIndex = flexItems.length - 2;
            } 
            showFlexItems2(currentStartIndex);
        }   
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    /* 3.1
        Dieses Snippet macht nur die aktuellen beiden sichtbaren Items unsichtbar. 
    */
    function hideFlexItems2(startIndex) { // 4  snipA                                 //Bsp. Startindex = 0 
        for (let i = startIndex; i < startIndex + 2 && i < flexItems.length; i++) { // i=0; 0 kleiner  0+2 Und 0 kleiner max. Items
            flexItems[i].classList.remove('visible');   
            flexItems[i].classList.add('invisible');
            setTimeout(function() { 
                flexItems[i].classList.add('invisible2');
            }, 1);
        }
    }

    /* 3.5 
    Dieses Snippet wandelt die an die Reihe kommenden Items in sichtbare Items um.
    */
    function showFlexItems2(startIndex) { 
        for (let i = startIndex; i < startIndex + 2 && i < flexItems.length; i++) { 
            flexItems[i].classList.remove('invisible');
            flexItems[i].classList.add('visible');
        }
    }

    //////////////////////////////////////////// Mobile Version /////////////////////////////////////////////////////////////

    function hideFlexItems1(startIndex) { // 4  snipA                                 //Bsp. Startindex = 0 
        for (let i = startIndex; i < startIndex + 1 && i < flexItems.length; i++) { // i=0; 0 kleiner  0+2 Und 0 kleiner max. Items
            flexItems[i].classList.remove('visible');   
            flexItems[i].classList.add('invisible');
        }
    }
    function showFlexItems1(startIndex) { 
        for (let i = startIndex; i < startIndex + 1 && i < flexItems.length; i++) { 
            flexItems[i].classList.remove('invisible');
            flexItems[i].classList.add('visible');
        }
    }
    