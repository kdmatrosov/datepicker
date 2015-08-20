window.onload = function () {

    var Pickers = document.getElementsByTagName("datepicker");
    var datePickers = [];
    console.log(Pickers);
    console.log(Pickers.length);
    console.log(domAssistant);

    for (var i = 0, len = Pickers.length; i < len; i++) {
        var new_datepicker = domAssistant('div').addClass('d-picker')
            .appendChild('input').addClass('d-picker__value').addAttribute('type', 'text').addAttribute('placeholder', 'дд.мм.гггг').replace(Pickers[0]);
        datePickers.push(new_datepicker);
    }
    console.log(datePickers);
};