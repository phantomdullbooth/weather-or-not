console.log('keep calm, clear, or mostly sunny')

/// DOCUMENT.READY /// DO NOT TOUCH /// DOCUMENT.READY /// DO NOT TOUCH ///
$(() => { /// DOCUMENT.READY /// DO NOT TOUCH /// DOCUMENT.READY /// DO NOT TOUCH ///
    /// DOCUMENT.READY /// DO NOT TOUCH /// DOCUMENT.READY /// DO NOT TOUCH ///

    // ============================================== //
    // ============================================== //
    ////////////////////// BUTTONS /////////////////////
    // ============================================== //
    // ============================================== //

    const $buttonLocation = $('<button>').attr({
        'type': 'submit',
        'value': 'process',
        'id': 'submit-location'
    }).text('let\'s go')

    const $buttonArrowLocation = $('<img>').attr({
        'src': 'images/arrow.png',
        'id': 'button-arrow'
    })

    const $buttonEmail = $('<button>').attr({
        'type': 'submit',
        'value': 'process',
        'id': 'submit-email'
    }).text('send')

    const $buttonArrowEmail = $('<img>').attr({
        'src': 'images/arrow.png',
        'id': 'button-arrow'
    })



    // ============================================== //
    // ============================================== //
    ////////////////////// HEADER //////////////////////
    // ============================================== //
    // ============================================== //

    const $header = $('<header>')
    $header.appendTo('body')

    const $h1 = $('<h1>').html('weather <br>or not')
    $h1.appendTo($header)

    // ============================================== //
    //////////////// LOCATIONS INPUT ////////////////
    // ============================================== //

    const $startContainer = $('<div>').addClass('specific-container')
    $startContainer.appendTo($header)

    const $startQuestion = $('<h4>').text('where from?')
    $startQuestion.appendTo($startContainer)

    const $startInput = $('<input>').attr({
        'type': 'text',
        'name': 'starting-city',
        'placeholder': 'city'
    })
    $startInput.appendTo($startContainer)

    // END ////////////////

    const $endContainer = $('<div>').addClass('specific-container')
    $endContainer.appendTo($header)

    const $endQuestion = $('<h4>').text('where to?')
    $endQuestion.appendTo($endContainer)

    const $endInput = $('<input>').attr({
        'type': 'text',
        'name': 'destination-city',
        'placeholder': 'city'
    })
    $endInput.appendTo($endContainer)

    // SUBMIT ////////////////

    $buttonLocation.appendTo($header)
    $buttonArrowLocation.appendTo($buttonLocation)




    // ============================================================================================ //
    // ============================================================================================ //
    // MAIN SECTION
    // ============================================================================================ //
    // ============================================================================================ //

    const $information = $('<div>').attr('id', 'carousel-container')
    $information.appendTo('body')

    // ================= //
    // ============================== //
    /////////////// BACK ARROW ///////////////

    const $backArrowContainer = $('<div>').addClass('arrow-container')
    $backArrowContainer.appendTo($information)

    const $backArrow = $('<img>').attr({
        'src': 'images/arrow.png',
        'id': 'back-arrow'
    })
    $backArrow.appendTo($backArrowContainer)

    const $backArrowLabel = $('<p>').attr('id', 'back-arrow-label').text('back')
    $backArrowLabel.appendTo($backArrowContainer)

    // ================= //
    // ============================== //
    /////////////// INFORMATION CAROUSEL ///////////////

    const $forecast = $('<div>').attr('id', 'forecast-carousel')
    $forecast.appendTo($information)

    // ======== CITY 1 ========= //

    const $forecast1 = $('<div>').addClass('forecast')
    $forecast1.appendTo($forecast)

    const $forecast1Conditions = $('<div>').addClass('conditions')
    $forecast1Conditions.appendTo($forecast1)

    const $forecast1Temperature = $('<div>').addClass('temperature')
    $forecast1Temperature.appendTo($forecast1)

    //// ending city
    // const $cityDataEnd = $('<div>').addClass('city-data')
    // $cityDataEnd.appendTo($information)

    // const $cityDataEndGeneral = $('<div>').addClass('general-data')
    // $cityDataEndGeneral.appendTo($cityDataEnd)

    // const $cityDataEndWon = $('<div>').addClass('won-data')
    // $cityDataEndWon.appendTo($cityDataEnd)

    // //// summary
    // const $summary = $('<div>').addClass('city-data')
    // $summary.appendTo($information)

    // const $summaryGeneral = $('<div>').addClass('general-data')
    // $summaryGeneral.appendTo($summary)

    // const $summaryWon = $('<div>').addClass('won-data')
    // $summaryWon.appendTo($summary)


    // ================= //
    // ============================== //
    /////////////// FORWARD ARROW ///////////////

    const $forwardArrowContainer = $('<div>').addClass('arrow-container')
    $forwardArrowContainer.appendTo($information)

    const $forwardArrowLabel = $('<p>').attr('id', 'back-arrow-label').text('next')
    $forwardArrowLabel.appendTo($forwardArrowContainer)

    const $forwardArrow = $('<img>').attr({
        'src': 'images/arrow.png',
        'id': 'forward-arrow'
    })
    $forwardArrow.appendTo($forwardArrowContainer)




    // ============================================== //
    // ============================================== //
    ///////////////// WEATHER OR NOTE //////////////////
    // ============================================== //
    // ============================================== //

    const $subfooter = $('<div>').attr('id', 'subfooter')
    $subfooter.appendTo('body')

    const $subfooterTitle = $('<h5>').text('need a reminder?')
    $subfooterTitle.appendTo($subfooter)

    const $subfooterInfo = $('<p>').text('Send yourself a weather or note.')
    $subfooterInfo.appendTo($subfooter)

    const $noteInput = $('<input>').attr({
        'type': 'text',
        'placeholder': 'enter your email'
    })
    $noteInput.appendTo($subfooter)

    $buttonEmail.appendTo($subfooter)
    $buttonArrowEmail.appendTo($buttonEmail)


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

    $('#submit-location').on('click', (event) => { // submit location on click
        event.stopPropagation(); // prevent page from reloading;

        let cityStart = $('input[name="starting-city"]').val(); // answers to the 'where from?'
        let cityEnd = $('input[name="destination-city"]').val(); // answers to the 'where from?'

        cityStart = 4347800;
        cityEnd = 5814921;

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/group?id=" + cityStart + "," + cityEnd + "&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
        }).then(
            (data) => {
                const skyConditions = data.list[0].weather[0].main; // cloud conditions
                const currentTemp = Math.round(data.list[0].main.temp); // current temperature
                const city = data.list[0].name; // current temperature

                switch (skyConditions) {
                    case "Clouds":
                        let $skies = $('<h3>').text("#rn in " + city + ", it's partly cloudy.");
                        $skies.appendTo($forecast1Conditions);
                        break;
                    case "Clear":
                        let $skies2 = $('<h3>').text("um... brella? nope. clear skies in " + city + ".");
                        $skies2.appendTo($forecast1Conditions);
                        break;
                    case "Rain":
                        let $skies3 = $('<h3>').text("two's company. three's a cloud. #rn it's raining in " + city + ".");
                        $skies3.appendTo($forecast1Conditions);
                        let $rain = $('<img>').attr({ 'src': 'images/rain.png', 'id': 'conditions-image' })
                        $rain.prependTo($forecast1Conditions);
                        break;
                    default: $skies4 = $('<h3>').text("sorry, we're channeling miss cleo and everything's coming back foggy. try again.");
                        $skies4.appendTo($forecast1Conditions);
                }
                if (currentTemp >= 90) {
                    let $temp = $('<h3>').text("you should go jump in a pool or something. it's " + currentTemp + "°F.");
                    $temp.appendTo($forecast1Temperature);
                } else if (currentTemp >= 75) {
                    let $temp2 = $('<h3>').text("mmm... a milkshake would be so good right now. it's " + currentTemp + "°F.");
                    $temp2.appendTo($forecast1Temperature);
                    let $rain = $('<img>').attr({ 'src': 'images/drink.png', 'id': 'conditions-image' })
                    $rain.prependTo($forecast1Temperature);
                } else if (currentTemp >= 55) {
                    let $temp3 = $('<h3>').text("don't sweater the small stuff. a light jacket will do. it's " + currentTemp + "°F.");
                    $temp3.appendTo($forecast1Temperature);
                } else if (currentTemp <= 40) {
                    $temp3 = $('<h3>').text("feels like you could you a coat-conspirator. it's " + currentTemp + "°F.");
                    $temp3.appendTo($forecast1Temperature);
                } else {
                    $temp4 = $('<h3>').text("sorry, we're channeling miss cleo and everything's coming back foggy. try again.");
                    $temp4.appendTo($forecast1Temperature);
                }
                /////
                console.log(data.list[0].weather[0].main);
                console.log(data.list[0].main.temp);
                /////
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

// "It's currently " + weathering " in " + userStart + "