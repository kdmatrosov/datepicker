var dateAssitant = (function()
{
    var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    function formatDate (d)  // функция по формированию вида даты дд.мм.гггг
    {
        d = [d.getDate(), d.getMonth() + 1, d.getFullYear()];
        return d.join('.').replace(/\b(\d)\b/g, '0$1');
    }
    function correctDn(d)
    {
        return (d == 0) ? 6 : d - 1;
    }
    function dateAss()
    {
        return dateAss;
    }
    dateAss.getPreviousDay = function()
    {
        var date = new Date();
        date.setDate(date.getDate() - 1);
        return formatDate(date);
    };

    dateAss.getDayName = function(num)
    {
        var temp = num;
        while(num >= 10)
        {
            num = num % 10;
        }
        while(temp >= 100)
        {
            temp = temp % 10;
        }
        if (num > 0 && num < 5)
        {
            if (temp > 10 && temp < 15)
            {
                return 'дней';
            }
            if (num == 1) return 'день';
            return 'дня';
        }
        return 'дней';
    };

    dateAss.getDay = function(num)
    {
        var days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        return days[num];
    };

    dateAss.getMonth = function(year, month)
    {
        var _date = new Date(year, month, 1);
        var _month = [];
        while (_date.getMonth() == month)
        {
            var day = _date.getDate();
            _month[day] = correctDn(_date.getDay());
            _date.setDate(day + 1);
        }
        return _month;
    };

    dateAss.getCurrentMonth = function()
    {
        var today = new Date();
        return dateAss.getMonth(today.getFullYear(), today.getMonth());
    };

    return dateAss;
})();
