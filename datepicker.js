window.onload = function () {

    var Pickers = document.getElementsByTagName("datepicker");
    var datePickers = [];

    for (var i = 0, len = Pickers.length; i < len; i++) {
        var new_datepicker = domAssistant('div').addClass('d-picker');
        new_datepicker
            .appointEvent('click', this.div, function(e)
            {
                var d_picker = domAssistant(this);
                var text    = d_picker.getDocumentElementsWithAttribute('type', 'text', this)[0];
                var panel   = d_picker.getDocumentElementsWithAttribute('panel', '', this)[0];
                if (!e.target.hasAttribute('panel'))
                {
                    panel.classList.toggle('dspl-none');
                }
                text.focus();
            });
        new_datepicker.appendChild('input')
            .addClass('d-picker__value')
            .addAttribute('type', 'text').addAttribute('placeholder', 'дд.мм.гггг')
            .replace(Pickers[0])
            .appointEvent('blur', this.input, function(e)
            {
                var d_picker = new_datepicker.get();
                var panel = domAssistant(d_picker).getDocumentElementsWithAttribute('panel', '', d_picker)[0];
                panel.classList.add('dspl-none');

            })
            .appointEvent('click', this.input, function()
            {
                var month = [];
                if (this.value == '')
                {
                    month = dateAssitant.getCurrentMonth();
                }
                else
                {
                    var date = this.value.split('.');
                    month = dateAssitant.getMonth(date[2], --date[1]);
                }
                console.log(month);
            });
        new_datepicker.appendChild('div').addClass('d-picker__panel').addClass('dspl-none').addAttribute('panel', '')
            .appointEvent('mouseenter', new_datepicker.get(true), function(e)
            {
                var d_picker = new_datepicker.get();
                var text = domAssistant(d_picker).getDocumentElementsWithAttribute('type', 'text', d_picker)[0];
                text.onblur = function()
                {
                };

            })
            .appointEvent('mouseleave', new_datepicker.get(true), function(e)
            {
                var d_picker = new_datepicker.get();
                var text = domAssistant(d_picker).getDocumentElementsWithAttribute('type', 'text', d_picker)[0];
                var panel = domAssistant(d_picker).getDocumentElementsWithAttribute('panel', '', d_picker)[0];
                text.onblur = function()
                {
                    panel.classList.add('dspl-none');
                };
            });
        datePickers.push(new_datepicker.get());
    }
};