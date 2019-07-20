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
    }).text('submit')

    const $buttonArrowLocation = $('<img>').attr({
        'src': 'images/arrow.png',
        'id': 'button-arrow'
    })

    const $buttonEmail = $('<button>').attr({
        'type': 'submit',
        'value': 'process',
        'id': 'submit-email'
    }).text('submit')

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
    // INFORMATION CAROUSEL
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

    //// starting city
    const $cityDataStart = $('<div>').addClass('city-data')
    $cityDataStart.appendTo($information)

    const $cityDataStartGeneral = $('<div>').addClass('general-data')
    $cityDataStartGeneral.appendTo($cityDataStart)

    const $cityDataStartWon = $('<div>').addClass('won-data')
    $cityDataStartWon.appendTo($cityDataStart)

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


    // ============================================== //
    // ============================================== //
    ///////////////////// FOOTERS //////////////////////
    // ============================================== //
    // ============================================== //

    const $footerMobile = $('<footer>').attr('id', 'footer-mobile') ///// MOBILE ///// MOBILE /////
    $footerMobile.html('this app was made with determination and a mac. <br>keep calm and clear or mostly sunny.')
    $footerMobile.appendTo('body') ///// MOBILE ///// MOBILE /////

    const $footerNormal = $('<footer>').attr('id', 'footer-normal') ///// GENERAL ///// GENERAL /////
    $footerNormal.text('this app was made with determination and a mac. keep calm and clear or mostly sunny.')
    $footerNormal.appendTo('body') ///// GENERAL ///// GENERAL ///// GENERAL ///// GENERAL /////


    // ============================================================================================ //
    // ============================================================================================ //
    // AJAX //////////////////// STRONGER THAN GREECE / GREASE. THE MORE YOU REALIZE.
    // ============================================================================================ //
    // ============================================================================================ //

    // test variables // 
    // cityStart = 5393068;
    // cityEnd = 703448;

    $('#submit-location').on('click', (event) => { // submit location on click
        event.stopPropagation(); // prevent page from reloading;

        let cityStart = $('input[name="starting-city"]').val(); // answers to the 'where from?'
        let cityEnd = $('input[name="destination-city"]').val(); // answers to the 'where from?'

        cityStart = 5814921;
        cityEnd = 5814921;

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/group?id=" + cityStart + "," + cityEnd + "&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
        }).then(
            (data) => {
                const skyConditions = data.list[0].weather[0].main; // cloud conditions
                const currentTemp = data.list[0].main.temp; // current temperature

                if (skyConditions === "Clouds") {
                    let $startGeneral = $('<h3>').text("#rn in atlanta, it's partly cloudy.")
                    $startGeneral.appendTo($cityDataStartGeneral);

                    let $generalImg = $('<img>').attr({'id': 'general-img', 'src': 'images/cloudy-partly.png'})
                    $generalImg.appendTo($cityDataStartGeneral);

                    if (currentTemp > 80) {
                        let $startWon = $('<h3>').text('don\'t sweater the small stuff. it\'s ' + Math.round(currentTemp) + '°F.')
                        $startWon.appendTo($cityDataStartWon)

                        let $wonImg = $('<img>').attr({'id': 'won-img', 'src': 'images/shorts.png'})
                        $wonImg.appendTo($cityDataStartWon)
                    }
                } else if (skyConditions === "Clear") {
                    let $startGeneral = $('<h3>').text("um... brella? nope. clear skies in walla walla.")
                    $startGeneral.appendTo($cityDataStartGeneral);

                    let $generalImg = $('<img>').attr({'id': 'general-img', 'src': 'images/cloudy-partly.png'})
                    $generalImg.appendTo($cityDataStartGeneral);

                    if (currentTemp < 80 && (cityStart || cityEnd) === 5814921) {
                        let $startWon = $('<h3>').text('go out and spend that dolla dolla. it\'s ' + Math.round(currentTemp) + '°F.')
                        $startWon.appendTo($cityDataStartWon)

                        let $wonImg = $('<img>').attr({'id': 'won-img', 'src': 'images/drink.png'})
                        $wonImg.appendTo($cityDataStartWon)
                    }
                }

                




                // let $startGeneral = $('<h1>').text("Currently, in Atlanta, 'it's " + data.list[0].weather[0].main )
                console.log(data.list[0].weather[0].main);
                console.log(data.list[0].main.temp);
            },
            () => {
                console.log('coming back foggy. try again')
            }
        )

    }) // END OF #SUBMIT-LOCATION BUTTON CLICK; DO NOT ERASE

    // ============================================================================================ //
    // ============================================================================================ //
}) // DOCUMENT.READY /// DO NOT TOUCH ///
// ============================================================================================ //
// ============================================================================================ //

// 052b6765bf73ea440e9f314c5808f645

// "It's currently " + weathering " in " + userStart + "
