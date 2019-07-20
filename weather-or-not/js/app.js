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




    // ============================================== //
    // ============================================== //
    /////////////// INFORMATION CAROUSEL ///////////////
    // ============================================== //
    // ============================================== //

    const $information = $('<div>').attr('id', 'carousel-container')
    $information.appendTo('body')

    // BACK ////////////////

    const $backArrowContainer = $('<div>').addClass('arrow-container')
    $backArrowContainer.appendTo($information)

    const $backArrow = $('<img>').attr({
        'src': 'images/arrow.png',
        'id': 'back-arrow'
    })
    $backArrow.appendTo($backArrowContainer)

    const $backArrowLabel = $('<p>').attr('id', 'back-arrow-label').text('back')
    $backArrowLabel.appendTo($backArrowContainer)

    // FORWARD ////////////////

    const $forwardArrowContainer = $('<div>').addClass('arrow-container')
    $forwardArrowContainer.appendTo($information)

    const $forwardArrowLabel = $('<p>').attr('id', 'back-arrow-label').text('forward')
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

    $('#submit-location').on('click', (event) => { // submit location on click
        event.preventDefault(); // prevent page from reloading;

        let cityStart = $('input[name="starting-city"]').val(); // answers to the 'where from?'
        let cityEnd = $('input[name="destination-city"]').val(); // answers to the 'where from?'
        
        cityStart = 5393068;
        cityEnd = 703448;

    

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/group?id=" + cityStart + "," + cityEnd + "&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
    }).then(
        (data) => {
            console.log(data);
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