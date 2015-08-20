window.onload = function () {

    var Pickers = document.getElementsByTagName("datepicker");
    var datePickers = [];
    console.log(Pickers);
    console.log(Pickers.length);
    console.log(domAssistant);

    for (var i = 0, len = Pickers.length; i < len; i++) {
        var new_datepicker = domAssistant('div').addClass('d-picker');
        new_datepicker
            .appointEvent('click', this.div, function()
            {
                var d_picker = domAssistant(this);
                var panel = d_picker.getDocumentElementsWithAttribute('panel', '', this)[0];
                panel.classList.toggle('dspl-none');
            });
        new_datepicker.appendChild('input')
            .addClass('d-picker__value')
            .addAttribute('type', 'text').addAttribute('placeholder', 'дд.мм.гггг')
            .replace(Pickers[0]);
        new_datepicker.appendChild('div').addClass('d-picker__panel').addClass('dspl-none').addAttribute('panel', '');
        datePickers.push(new_datepicker.get());
    }
    console.log(datePickers);
};