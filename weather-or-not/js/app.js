console.log('keep calm and clear or mostly sunny')


$(() => { /// DOCUMENT.READY /// DO NOT TOUCH /// DOCUMENT.READY /// DO NOT TOUCH ///

    // ============================================================================================ //
    // ============================================================================================ //
    // HEADER //// CONTAINS APPLICATION LOGO & LOCATION INPUTS
    // ============================================================================================ //
    // ============================================================================================ //

    const $header = $('<header>') // HEADER CREATED
    $header.appendTo('body') // HEADER ADDED TO BODY

    const $h1Container = $('<div>').attr('id', 'h1-container') // CONTAINER FOR TITLE CREATED
    $h1Container.appendTo($header)

    const $h1 = $('<h1>').html('weather <br>or not').attr('id', 'weather-general') // APP TITLE
    $h1.appendTo($h1Container) // APP TITLE ADDED TO HEADER

    // const $h1Mobile = $('<h1>').html('weather or not').attr('id', 'weather-phone') // APP TITLE
    // $h1Mobile.appendTo($h1Container) // APP TITLE ADDED TO HEADER

    // ========== FROM CITY

    const $fromCity = $('<div>').addClass('location-input') // DIV CONTAINER FOR FROM LOCATION
    $fromCity.appendTo($header) // FROM CITY DIV ADDED TO HEADER

    const $fromCityQuestion = $('<h3>').text('where are you now?') // PROMPT FOR FROM CITY
    $fromCityQuestion.appendTo($fromCity) // FROM CITY PROMPT ADDED TO FROM CITY DIV

    const $fromCityAnswer = $('<input>').attr({ // ANSWER FIELD FOR FROM CITY
        'type': 'text',
        'name': 'from-city-answer',
        'placeholder': 'city' // VISIBLE TO USERS
    })
    $fromCityAnswer.appendTo($fromCity)// FROM CITY ANSWER FIELD ADDED TO FROM CITY DIV

    // ========== TO CITY

    const $toCity = $('<div>').addClass('location-input') // DIV CONTAINER FOR TO LOCATION
    $toCity.appendTo($header) // TO CITY DIV ADDED TO HEADER

    const $toCityQuestion = $('<h3>').text('where are you going?') // PROMPT FOR TO CITY
    $toCityQuestion.appendTo($toCity) // TO CITY PROMPT ADDED TO TO CITY DIV

    const $toCityAnswer = $('<input>').attr({ // ANSWER FIELD FOR TO CITY
        'type': 'text',
        'name': 'to-city-answer',
        'placeholder': 'city' // VISIBLE TO USERS
    })
    $toCityAnswer.appendTo($toCity)// TO CITY ANSWER FIELD ADDED TO TO CITY DIV

    // ========== SUBMIT CITIES

    const $buttonCities = $('<button>').attr({ // BUTTON FOR SUBMITTING LOCATIONS
        'type': 'submit',
        'value': 'submit-cities',
        'id': 'submit-cities-button'
    }).text('let\'s go') // TEXT ON BUTTON; LET'S GO + ARROW

    const $buttonCitiesIcon = $('<img>').attr({ // ARROW ICON ON CITIES BUTTON
        'src': 'images/arrow-white.png',
        'id': 'button-cities-icon'
    })
    $buttonCitiesIcon.appendTo($buttonCities) // ADDED ARROW TO CITIES BUTTON
    $buttonCities.appendTo($header) // SUBMIT CITIES BUTTON ADDED TO HEADER

    // ============================================================================================ //
    // ============================================================================================ //
    // MAIN //// CONTAINS LEFT AND RIGHT ARROWS & FORECAST CAROUSEL
    // ============================================================================================ //
    // ============================================================================================ //

    const $main = $('<main>') // CREATED MAIN CONTENT CONTAINER
    $main.appendTo('body')  // ADDED TO THE BODY, BELOW HEADER

    // ========== LEFT ARROW

    const $arrowBack = $('<div>').addClass('nav-arrow') // CREATED LEFT ARROW CONTAINER
    $arrowBack.appendTo($main) // ADDED TO MAIN

    const $arrowBackIcon = $('<img>').attr({ // CREATED LEFT ARROW
        'src': 'images/arrow-white.png',
        'id': 'left-arrow'
    })
    $arrowBackIcon.appendTo($arrowBack) // ADDED LEFT ARROW TO LEFT ARROW CONTAINER

    const $arrowBackLabel = $('<p>').attr('id', 'nav-arrow-back').text('back')
    $arrowBackLabel.appendTo($arrowBack)

    // ========== RIGHT ARROW

    const $arrowNext = $('<div>').addClass('nav-arrow') // CREATED RIGHT ARROW CONTAINER
    $arrowNext.appendTo($main) // ADDED TO MAIN

    const $arrowNextIcon = $('<img>').attr({ // CREATED RIGHT ARROW
        'src': 'images/arrow-white.png',
        'id': 'nav-arrow-next'
    })
    $arrowNextIcon.appendTo($arrowNext) // ADDED RIGHT ARROW TO RIGHT ARROW CONTAINER

    const $arrowNextLabel = $('<p>').attr('id', 'back-arrow-label').text('next')
    $arrowNextLabel.prependTo($arrowNext)

    // ========== FORECAST CAROUSEL
    // ========== FORECAST CAROUSEL
    // ========== FORECAST CAROUSEL

    const $forecaster = $('<div>').attr('id', 'forecaster')
    $forecaster.prependTo($arrowNext)

    // ======== CITY 1 ========= //

    const $forecast1 = $('<div>').addClass('forecast')
    $forecast1.appendTo($forecaster)

    const $forecasterLeft1 = $('<div>').addClass('weather-icon')
    $forecasterLeft1.appendTo($forecast1)

    const $forecasterRight1 = $('<div>').addClass('weather-info')
    $forecasterRight1.appendTo($forecast1)

    // ======== CITY 2 ========= //

    const $forecast2 = $('<div>').addClass('forecast')
    $forecast2.appendTo($forecaster)

    const $forecasterLeft2 = $('<div>').addClass('weather-icon')
    $forecasterLeft2.appendTo($forecast2)

    const $forecasterRight2 = $('<div>').addClass('weather-info')
    $forecasterRight2.appendTo($forecast2)

    // ======== SUMMARY ========= //

    const $forecast3 = $('<div>').addClass('forecast')
    $forecast3.appendTo($forecaster)

    const $forecasterLeft3 = $('<div>').addClass('weather-icon')
    $forecasterLeft3.appendTo($forecast3)

    const $forecasterRight3 = $('<div>').addClass('weather-info')
    $forecasterRight3.appendTo($forecast3)

    // ========== BACK BUTTON INFORMATION

    let currentCityIndex = 0
    let $currentCity = $forecaster.children().eq(currentCityIndex)
    let numberOfMessages = $forecaster.children().eq(currentCityIndex)

    const $next = $('#nav-arrow-next') // next button
    const $previous = $('#nav-arrow-back') // previous button

    // ======================
    // EVENT LISTENER/HANDLER
    // ======================

    $arrowNextIcon.on('click', () => { // next button
        $currentCity.hide() // hiding the current image
        // check if the currentCityIndex is less than the amount of images we have
        if (currentCityIndex < numberOfMessages) {
            // increment current image index
            currentCityIndex++
        } else { // if the currentCityIndex > the amount of images we have
            // reset the currentCityIndex to 0, so we cycle back
            currentCityIndex = 0
        }
        // change the currentCity
        $currentCity = $('#forecaster').children().eq(currentCityIndex)
        // show the new currentCity
        $currentCity.show()
    })

    // previous button
    $arrowBackIcon.on('click', () => {
        // hide the current image
        $currentCity.hide()
        // check if the currentCityIndex > 0
        if (currentCityIndex > 0) {
            // decrement the current image index
            currentCityIndex--
        } else { // if the currentCityIndex < 0, reset the currentCityIndex to the numberOfMessages
            currentCityIndex = numberOfMessages
        }
        // change the currentCity
        $currentCity = $('#forecaster').children().eq(currentCityIndex)
        // show the new currentCity
        $currentCity.show()
    })
    // ============================================================================================ //
    // ============================================================================================ //
    // BELOW //// CONTAINS INFORMATION ON THE WEATHER-OR-NOTE
    // ============================================================================================ //
    // ============================================================================================ //

    const $below = $('<div>').attr('id', 'below') // CREATED SECTION BELOW THE MAIN
    $below.appendTo('body') // BELOW ADDED TO BODY

    const $belowTitle = $('<h4>').text('need a reminder?')
    $belowTitle.appendTo($below)

    const $belowInfo = $('<p>').text('Send yourself a weather or note.')
    $belowInfo.appendTo($below)

    const $belowEmail = $('<input>').attr({
        'type': 'text',
        'placeholder': 'what\'s your email?'
    })
    $belowEmail.appendTo($below)

    const $buttonEmail = $('<button>').attr({
        'type': 'submit',
        'value': 'submit-email',
        'id': 'submit-email'
    }).text('send')

    const $buttonPlaneEmail = $('<img>').attr({
        'src': 'images/email.png',
        'id': 'button-email'
    })
    $buttonPlaneEmail.appendTo($buttonEmail)
    $buttonEmail.appendTo($below)

    // ============================================================================================ //
    // ============================================================================================ //
    // FOOTER / CONTAINS TWO VERSIONS DEPENDING ON MOBILE OR MEDIUM/COMPUTER SCREEN
    // ============================================================================================ //
    // ============================================================================================ //

    const $footerPhone = $('<footer>').addClass('phone')
    $footerPhone.html('this app was made with determination and a mac. <br>keep calm and clear or mostly sunny.')
    $footerPhone.appendTo('body') // <br> inserted for line break on mobile

    const $footerGeneral = $('<footer>').addClass('general') ///// GENERAL ///// GENERAL /////
    $footerGeneral.text('this app was made with determination and a mac. keep calm and clear or mostly sunny.')
    $footerGeneral.appendTo('body') // general version does not have a line break


    // ============================================================================================ //
    // ============================================================================================ //
    // AJAX //////////////////// STRONGER THAN GREECE / GREASE. THE MORE YOU REALIZE.
    // ============================================================================================ //
    // ============================================================================================ //

    $('#submit-cities-button').on('click', (event) => { // submit location on click
        event.stopPropagation(); // prevent page from reloading;

        let cityStart = $('input[name="from-city-answer"]').val(); // answers to the 'where from?'
        let cityEnd = $('input[name="to-city-answer"]').val(); // answers to the 'where from?'

        cityStart = 4740328;
        cityEnd = 5873095;

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/group?id=" + cityStart + "," + cityEnd + "&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
        }).then(
            (data) => {
                const $cloudsImg = $('<img>').attr({ 'src': 'images/weather/cloudy-part.png', 'id': 'weather-icon-image' })
                const $clearImg = $('<img>').attr({ 'src': 'images/weather/clear.png', 'id': 'weather-icon-image' })
                const $thunderstormImg = $('<img>').attr({ 'src': 'images/weather/thunderstorm.png', 'id': 'weather-icon-image' })
                const $rainImg = $('<img>').attr({ 'src': 'images/weather/rain.png', 'id': 'weather-icon-image' })
                const $drizzleImg = $('<img>').attr({ 'src': 'images/weather/drizzle-mist.png', 'id': 'weather-icon-image' })
                const $fogImg = $('<img>').attr({ 'src': 'images/weather/fog-haze.png', 'id': 'weather-icon-image' })
                const $crystalBall = $('<img>').attr({'src': 'images/or-not/crystal-ball.png'})
                
                
                ///// CITY 1 /////
                const skyConditions1 = data.list[0].weather[0].main; // cloud conditions
                const currentTemp1 = Math.round(data.list[0].main.temp); // current temperature
                const city1 = data.list[0].name; // current temperature
                let weathering1;

                if (skyConditions1 === "Clouds") {
                    weathering1 = "partly cloudy";
                    $cloudsImg.appendTo($forecasterLeft1)
                } else if (skyConditions1 === "Clear") {
                    weathering1 = "clear";
                    $clearImg.appendTo($forecasterLeft1)
                } else if (skyConditions1 === "Thunderstorm") {
                    weathering1 = "storming"
                    $thunderstormImg.appendTo($forecasterLeft1)
                } else if (skyConditions1 === "Rain") {
                    weathering1 = "raining"
                    $rainImg.appendTo($forecasterLeft1)
                } else if (skyConditions1 === "Drizzle") {
                    weathering1 = "drizzling"
                    $drizzleImg.appendTo($forecasterLeft1)
                } else if (skyConditions1 === "Mist") {
                    weathering1 = "misty"
                    $drizzleImg.appendTo($forecasterLeft1)
                } else if (skyConditions1 === "Haze") {
                    weathering1 = "hazy"
                    $fogImg.appendTo($forecasterLeft1)
                } else {
                    const $noData = $('<h3>').text("We're channeling Miss Cleo and everything's coming back foggy. Try again later.")
                    $noData.appendTo($forecasterRight1)
                    $crystalBall.appendTo($forecasterLeft1)
                }

                ///// CITY 2 /////
                const skyConditions2 = data.list[1].weather[0].main; // cloud conditions
                console.log(skyConditions2)
                const currentTemp2 = Math.round(data.list[1].main.temp); // current temperature
                const city2 = data.list[1].name; // current temperature
                let weathering2;

                if (skyConditions2 === "Clouds") {
                    weathering2 = "partly cloudy";
                    $cloudsImg.appendTo($forecasterLeft2)
                } else if (skyConditions2 === "Clear") {
                    weathering2 = "clear";
                    $clearImg.appendTo($forecasterLeft2)
                } else if (skyConditions2 === "Thunderstorm") {
                    weathering2 = "storming"
                    $thunderstormImg.appendTo($forecasterLeft2)
                } else if (skyConditions2 === "Rain") {
                    weathering2 = "raining"
                    $rainImg.appendTo($forecasterLeft2)
                } else if (skyConditions2 === "Drizzle") {
                    weathering2 = "drizzling"
                    $drizzleImg.appendTo($forecasterLeft2)
                } else if (skyConditions2 === "Mist") {
                    weathering2 = "misty"
                    $drizzleImg.appendTo($forecasterLeft2)
                } else if (skyConditions2 === "Haze") {
                    weathering2 = "hazy"
                    $fogImg.appendTo($forecasterLeft2)
                } else {
                    const $noData = $('<h3>').text("We're channeling Miss Cleo and everything's coming back foggy. Try again later.")
                    $noData.appendTo($forecasterRight2)
                    $crystalBall.appendTo($forecasterLeft2)
                }

                ///// OR NOT /////
                // if (currentTemp1)

                let $weatherInfo1 = $('<h3>').html("#rn it's " + currentTemp1 + "°F and " + weathering1 + " in " + city1 + ". <p> next up: " + city2 + ".");
                $weatherInfo1.appendTo($forecasterRight1)

                let $weatherInfo2 = $('<h2>').html("#rn it's " + currentTemp2 + "°F and " + weathering2 + " in " + city2 + ". <p> next up: " + "or not.");
                $weatherInfo2.appendTo($forecasterRight2)

                console.log(city1 + ": " + skyConditions1 + ", " + currentTemp1)
                console.log(city2 + ": " + skyConditions2 + ", " + currentTemp2)
            },
            () => {
                console.log('coming back foggy. try again')
            })

    }) // END OF #SUBMIT-LOCATION BUTTON CLICK; DO NOT ERASE

    // ============================================================================================ //
    // ============================================================================================ //
}) // DOCUMENT.READY /// DO NOT TOUCH ///
// ============================================================================================ //
// ============================================================================================ //

// 052b6765bf73ea440e9f314c5808f645

// "It's currently " + weathering1 " in " + userStart + "