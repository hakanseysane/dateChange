/*
 * jQuery Date Format Changer v1.0
 * 25 Nov 2015 Hakan Seysane - Fikir Fokur DSA
 * 
 */
(function ($) {

    $.dateChange = function (settings, __date__) {
        var defaults = {
            viewtype: "datetime", // otherwise "timeago"
            seperators:
                {
                    date: ".",         // Available for (-),(/) - Day, Month, Year Seperator
                    dateTime: " ",     // This seperates date and time
                    time: ":"          // Time seperator can be only this
                },
            options:
                {
                    showYear: true,
                    showDay: true,
                    showAsStringDate: false,    // Example: 25 November 2015
                    abbreviateMonthName: false, // Example: 25 Nov 2015
                    showTime: true,
                    showSeconds: false
                }
            ,
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

        };

        settings = $.extend(defaults, settings);
        var s = settings;

        var date = new Date(parseInt(__date__.substr(6)));
        //var date = new Date(parseInt("/Date(1448372863827)/".substr(6)));
        if (s.viewtype == "timeago") {
            return jQuery.timeago(date);
        }
        else{
        var day = date.getDate();
        var month = date.getMonth(); // Index number. If month is January, return 0 
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var seconds = date.getSeconds();


        var showYear = s.options.showYear;
        var showDay = s.options.showDay;
        var showAsStringDate = s.options.showAsStringDate;
        var abbreviateMonthName = s.options.abbreviateMonthName;
        var showTime = s.options.showTime;
        var showSeconds = s.options.showSeconds;

        var dSep = s.seperators.date;

        var result = "";

        if (showAsStringDate) {
            dSep = " ";
        }

       
            if (showDay) {
                result += day + dSep;
            }
            var Month;
            if (showAsStringDate) {
                Month = s.monthNames[month];
                if (abbreviateMonthName) {
                    Month = Month.substr(0,3);
                }
            }
            else {
                Month = (month + 1);
            }

            result += Month + dSep;

            if (showYear) {
                result += year;
            }

            if (showTime) {
                result += s.seperators.dateTime;
                result += hour + s.seperators.time;
                result += minute;
                if (showSeconds) {
                    result += s.seperators.time + seconds;
                }
            }

            return result;

        }
    }
})(jQuery);
