window.onload = function () {

    var Pickers = document.getElementsByTagName("datepicker");
    var datePickers = [];

    for (var i = 0, len = Pickers.length; i < len; i++) {
        var da = new domAssistant();
        var new_datepicker = da('div').addClass('d-picker').addAttribute("id", Pickers[0].getAttribute("id"));
        new_datepicker
            .appointEvent('click', this.div, function(e)
            {
                var text    = da.getDocumentElementsWithAttribute('type', 'text', this)[0];
                var panel   = da.getDocumentElementsWithAttribute('panel', '', this)[0];
                if (!e.target.hasAttribute('panel') && !e.target.parentNode.hasAttribute('panel'))
                {
                    panel.classList.toggle('dspl-none');

                }
                text.focus();
            });
        new_datepicker.appendChild('input')
            .addClass('d-picker__value')
            .addAttribute('type', 'text').addAttribute('placeholder', 'дд.мм.гггг')
            .appointEvent('blur', this.input, function(e)
            {
                var parentNode = this.parentNode;
                var panel = da.getDocumentElementsWithAttribute('panel', '', parentNode)[0];
                panel.classList.add('dspl-none');

            })
            .appointEvent('click', this.input, function()
            {
                var parentNode = this.parentNode;
                var panel = da.getDocumentElementsWithAttribute('panel', '', parentNode)[0];
                if (da.hasClass(panel, 'dspl-none')) {
                    var data   = da.getDocumentElementsWithAttribute('data', '', parentNode)[0];
                    da.removeAllChildrenFromNode(data);

                    var month = [];
                    if (this.value == '') {
                        month = dateAssitant.getCurrentMonth();
                    }
                    else {
                        var date = this.value.split('.');
                        month = dateAssitant.getMonth(date[2], --date[1]);
                    }

                    var days = dateAssitant.getDays();
                    new_datepicker.appendChildToNode(data, 'div').addClass('d-picker__week');
                    var week = new_datepicker.get(true);
                    var i = 0, len = days.length;
                    do {
                        new_datepicker.appendChildToNode(week, 'div', days[i++]).addClass('d-picker__day_name');
                    } while (i < len);
                    i = 1; len = month.length;
                    week = null;
                    var first__line = false;
                    do {
                        if (week == null || month[i] == 0)
                        {
                            if (week == null)
                            {
                                first__line = true;
                            }
                            new_datepicker.appendChildToNode(data, 'div').addClass('d-picker__week');
                            week = new_datepicker.get(true);
                            if (first__line)
                            {
                                first__line = false;
                                for (var j = 0; j < month[i]; j ++)
                                {
                                    new_datepicker.appendChildToNode(week, 'div', '').addClass('d-picker__day').addClass('-empty');
                                }
                            }
                        }
                        new_datepicker.appendChildToNode(week, 'div', i++).addClass('d-picker__day');
                    } while (i < len);
                }
            });
        new_datepicker.appendChild('div').addClass('d-panel').addClass('dspl-none').addAttribute('panel', '')
            .appointEvent('mouseenter', new_datepicker.get(true), function(e)
            {
                var parentNode = this.parentNode;
                var text = da.getDocumentElementsWithAttribute('type', 'text', parentNode)[0];
                text.onblur = function()
                {
                };

            })
            .appointEvent('mouseleave', new_datepicker.get(true), function(e)
            {
                var parentNode = this.parentNode;
                var text = da.getDocumentElementsWithAttribute('type', 'text', parentNode)[0];
                var panel = da.getDocumentElementsWithAttribute('panel', '', parentNode)[0];
                text.onblur = function()
                {
                    panel.classList.add('dspl-none');
                };
            });


        var panel = new_datepicker.get(true);
        new_datepicker.appendChildToNode(panel, 'div').addClass('d-panel__header');
        new_datepicker.appendChildToNode(panel, 'div').addClass('d-panel__data').addAttribute('data', '');
        new_datepicker.replace(Pickers[0]);
        datePickers.push(new_datepicker.get());
    }
    console.log(datePickers);
};