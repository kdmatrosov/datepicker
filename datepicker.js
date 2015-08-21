window.onload = function () {

    var Pickers = new DomAssitant().gt(null, "datepicker");
    var datePickers = [];
    for (var i = 0, len = Pickers.length; i < len; i++) {
        (function() {
            var da = new DomAssitant();
            var new_datepicker = da.ce('div').addClass('d-picker').attr("id", Pickers[0].getAttribute("id"));
            new_datepicker
                .on('click', function (e) {
                    var text = da.getDocumentElementsWithAttribute('type', 'text', this)[0];
                    var panel = da.getDocumentElementsWithAttribute('panel', '', this)[0];
                    if (!e.target.hasAttribute('panel') && !e.target.parentNode.hasAttribute('panel') && !e.target.parentNode.hasAttribute('data') && !e.target.parentNode.parentNode.hasAttribute('data')) {
                        panel.classList.toggle('dspl-none');

                    }
                    text.focus();
                });

            var input = initElem(new_datepicker, 'input').addClass('d-picker__value').attr('type', 'text').attr('placeholder', 'дд.мм.гггг')
                .on('blur', function (e) {
                    d_panel.addClass('dspl-none');

                })
                .on('click', function () {
                    var self = this;
                    var parentNode = self.parentNode;
                    if (d_panel.hasClass('dspl-none')) {
                        var data = input.getDocumentElementsWithAttribute('data', '', parentNode)[0];
                        p_data.racfn();

                        var month = [];
                        var y, m;
                        if (this.value == '') {

                            var today = new Date();
                            y = today.getFullYear();
                            m = today.getMonth();
                        }
                        else {
                            var date = this.value.split('.');
                            y = date[2];
                            m = --date[1];
                        }
                        month = dateAssitant.getMonth(y, m);
                        self.y = y;
                        self.m = m;

                        p_header__name.text(dateAssitant.getMonthName(m));
                        var days = dateAssitant.getDays();
                        var week = initElem(p_data, 'div').addClass('d-picker__week');
                        var i = 0, len = days.length;
                        do {
                            initElem(week, 'div', days[i++]).addClass('d-picker__day_name');
                        } while (i < len);
                        i = 1;
                        len = month.length;
                        week = null;
                        var first__line = false;
                        do {
                            if (week == null || month[i] == 0) {
                                if (week == null) {
                                    first__line = true;
                                }
                                week = initElem(p_data, 'div').addClass('d-picker__week');
                                if (first__line) {
                                    first__line = false;
                                    for (var j = 0; j < month[i]; j++) {
                                        initElem(week, 'div').addClass('d-picker__day_name').addClass('-empty');
                                    }
                                }
                            }
                            var day = initElem(week, 'div', i++).addClass('d-picker__day').on('click', function () {
                                self.value = dateAssitant.getFormatedDate(self.y, self.m, this.innerText);

                            });
                        } while (i < len);
                    }
                });
            var d_panel = initElem(new_datepicker, 'div').addClass('d-panel').addClass('dspl-none').attr('panel', '')
                .on('mouseenter', function (e) {
                    var parentNode = this.parentNode;
                    var text = new_datepicker.getDocumentElementsWithAttribute('type', 'text', parentNode)[0];
                    text.onblur = function () {
                    };

                })
                .on('mouseleave', function (e) {
                    var parentNode = this.parentNode;
                    var text = new_datepicker.getDocumentElementsWithAttribute('type', 'text')[0];
                    var panel = new_datepicker.getDocumentElementsWithAttribute('panel', '')[0];
                    text.onblur = function () {
                        panel.classList.add('dspl-none');
                    };
                });

            var p_header = initElem(d_panel, 'div').addClass('p-header');
            var p_header__prev = initElem(p_header, 'div', '-').addClass('p-header__prev');
            var p_header__name = initElem(p_header, 'div').addClass('p-header__name');
            var p_header__next = initElem(p_header, 'div', '+').addClass('p-header__next');
            var p_data = initElem(d_panel, 'div').addClass('d-panel__data').attr('data', '');
            new_datepicker.replace(Pickers[0]);
            datePickers.push(new_datepicker.getCE());
        })();
    }
    function initElem(da, type, content)
    {
        var elem = da.ac(type, content);
        return new DomAssitant().init(elem);
    }
};