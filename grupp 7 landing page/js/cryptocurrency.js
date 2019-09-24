/*
* JSON get currency-list
*************/

  
/* Detta nedanför är JQuery, ett javascript framework, läs på i FreeCodeCamp.com. 
Det liknar Vanilla Javscript men är mkt enklare att använda. */

$( document ).ready(function() { // document.ready ser till att sidan laddas färdigt innan javascript-koden körs.  
    console.log( "cryptocurrency-script ready!" );

    $(".button1").click(function() { // om elementet med klassen ".button1" klickas...
        $('html,body').animate({    // ...ska en animation skapas som involverar hela html och body.
        scrollTop: $("#section1").offset().top}, // animationen är "scrollTop", bestäm sen id-tagg som vi ska scrolla till, i detta fall "#section1". 
        'slow'); // hastigheten det tar för scrollen. 
    });

    $(".button2").click(function() {
        $('html,body').animate({
            scrollTop: $("#section2").offset().top},
            'slow');
    });

    $(".button3").click(function() {
        $('html,body').animate({
            scrollTop: $("#section3").offset().top},
            'slow');
    });

    $(".button4").click(function() {
        $('html,body').animate({
            scrollTop: $("#section4").offset().top},
            'slow');
    });

    let apiLankCrypto = "https://api.coinmarketcap.com/v1/ticker/?limit=0";  // öppna länken på en browser och studera JSON-Objektet

    let hello =  $.getJSON(apiLankCrypto , function(data) {  // BoilerPlate kod. En variabel hello där vi tilldelar en funktion som kräver två parametrar, 1: vårt JSON-objekt (som vi satt in på variabeln "apiLankCrypto") och 2. funktionen "function(data)"" som vi kommer använda för att gräva ur och visa information ifrån vår JSON-fil. 

        for(let i = 0; i < 2; i++){   // en for-loop, studera den online om du ej vet hur en sådan fungerar. kommer välja dem två mest värdefulla valutorna, om i < 50 så kommer koden nedanför att köras 50 gånger istället för tre gånger och således välja dem 50 mest värdefulla valutorna. (det är genom värde som valutorna är listade i just DETTA JSON-objekt, det behöver inte alltså vara så i andra json objekt.)

            let plats = i + 1;  // så att valutorna listas som "1,2,3" och inte "0,1,2" i vår html kod. 

            // väljer html-element där id-taggen "#apiTest"-finns. "append" gör så att det innanför dess paranteser sätts upp i vår html kod. 
            $('#apiTest').append(" <br><p><b>" +plats+ ".&nbsp;&nbsp;&nbsp;&nbsp;"+
             data[i].name+"</b>&nbsp;&nbsp;" + data[i].price_usd+ "$&nbsp;&nbsp; 1h:" + 
                data[i].percent_change_1h+" % &nbsp;&nbsp; 24h:" + data[i].percent_change_24h+"  % &nbsp;&nbsp; 7d:" 
                +data[i].percent_change_7d+" % &nbsp;&nbsp; <b>Marketcap</b>:&nbsp;"+ data[i].market_cap_usd+"$&nbsp;&nbsp; </p> <br>" );  
            //varje "data[i].price_usd" kallar dollarkursen för den aktuella valutan i varje iteration(varje gång koden körs). data[1].price_usd för den populäraste valutan, data[2].price_usd för den näst populäraste valutan, osv. allt i data[1] motsvarar allt för bitcoin, och där inne finns MASSA information lagrad i objekt-form om bitcoin. Ovanför tar vi exempelvis fram market capitalisation- värde(data[i].market_cap_usd), värdeförändring i procent(data[i].percent_change_24h), namnet på valutan(data[i].name), etc. 
        }
    });
});  /* End of DOCUMENT READY*/
    