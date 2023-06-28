var date = new Date();
console.log(date); //Tue Jun 27 2023 18:28:11 GMT+0700 (GMT+07:00)

/**
     * new Date()
        new Date(date string)
        new Date(year,month)
        new Date(year,month,day)
        new Date(year,month,day,hours)
        new Date(year,month,day,hours,minutes)
        new Date(year,month,day,hours,minutes,seconds)
        new Date(year,month,day,hours,minutes,seconds,ms)

        new Date(milliseconds)
 */

/**
         * Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
         */

console.log(date.getFullYear());
console.log(date.getMonth());

/**
 * Set Date Methods
Set Date methods are used for setting a part of a date:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
 */
