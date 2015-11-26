# dateChange
Date time formatter jquery plugin

## Usage


example:
```
date = "/Date(1448372863827)/";
$.dateChange(Settings, data[i].date)
```

### Settings
```
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
            ```
## prerequisite
jquery.timeago.js
