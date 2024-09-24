/* eslint-disable spellcheck/spell-checker */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import Hebcal from 'hebcal';
import {DEFAULT_TIME_ZONE} from '../config/config.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const getTs = (timeZone) => {
    return dayjs().tz(timeZone).unix();
};

const getLastMinuteTs = (timeZone) => {
    const time = dayjs().tz(timeZone).unix();
    return time - (time % 60);
};

const subtractTs = (ts, howMuch, unit, timeZone) => {
    return dayjs.unix(ts).tz(timeZone).subtract(howMuch, unit).unix();
};

const getDate = (timeZone) => {
    return dayjs().tz(timeZone).format();
};
const getFirstDayInMonth = (timeZone) => {
    return dayjs().tz(timeZone).startOf('month').unix();
};
const getDateFormat = (timeZone, format, ts) => {
    return ts ? dayjs.unix(ts).tz(timeZone).format(format) : dayjs().tz(timeZone).format(format);
};

const getStartOfDay = (timeZone = DEFAULT_TIME_ZONE) => {
    return dayjs().tz(timeZone).set('hour', 0).set('minute', 0).unix();
};

const getEndOfDay = (timeZone) => {
    return dayjs().tz(timeZone).set('hour', 23).set('minute', 59).set('second', 59).unix();
};
const getYesterday = (timeZone = DEFAULT_TIME_ZONE) => {
    return dayjs().tz(timeZone).subtract(1, 'day').set('hour', 0).set('minute', 0).unix();
};
const tsToStartOfMonth = (ts, timeZone = DEFAULT_TIME_ZONE) => {
    return dayjs.unix(ts).tz(timeZone).startOf('month').unix();
};

const tsToEndOfMonth = (ts, timeZone) => {
    return dayjs.unix(ts).tz(timeZone).endOf('month').unix();
};

const getStartOfWeek = (ts, timeZone = DEFAULT_TIME_ZONE) => {
    return dayjs.unix(ts).tz(timeZone).startOf('week').unix();
};

const setHours = (ts, hours, timeZone) => {
    return dayjs.unix(ts).tz(timeZone).hour(hours.split(':')[0]).minute(hours.split(':')[1]).unix();
};

const tsGetDayOfWeek = (ts, timeZone) => {
    return dayjs.unix(ts).tz(timeZone).day() + 1;
};

const tsGetDayOfWeekHour = (ts, timeZone) => {
    return dayjs.unix(ts).tz(timeZone).format('d_HH:mm');
};

const getHourMinutes = (ts, timeZone) => {
    return dayjs.unix(ts).tz(timeZone).format('HH:mm');
};

const addMinute = (ts, minute, timeZone) => dayjs.unix(ts).tz(timeZone).add(minute, 'minute').unix();

const formatGoogleCalendarDate = (timestamp) => {
    return dayjs.unix(timestamp).utc().format('YYYYMMDDTHHmmss[Z]');
};

const getDaysDifference = (startDate, endDate) => {
    if(!startDate || !endDate) { return 0; }
    const date1 = dayjs.unix(startDate);
    const date2 = dayjs.unix(endDate);
    return date2.diff(date1, 'days');
};

function getHebrewDate (timestamp) {
    const gregDate = new Date(timestamp * 1000);
    const heDate = new Hebcal.HDate(gregDate);
    const day = heDate.day;
    const month = heDate.getMonthName('h');
    const year = heDate.getFullYear();
    const heDay = Hebcal.gematriya(day);
    const heYear = Hebcal.gematriya(year);
    return `${heDay} ${month} ${heYear.substring(1)}`;
}

const formattedDate = (timestamp, timeZone = DEFAULT_TIME_ZONE) => {
    return dayjs.unix(timestamp).tz(timeZone).format('YYYY-MM-DDTHH:mm:ssZ');
};
const tsGetFormattedMonth = (timestamp, timeZone = DEFAULT_TIME_ZONE) => {
    return dayjs.unix(timestamp).tz(timeZone).format('MMMM');
};
const twoHoursFromNow = (timeZone = DEFAULT_TIME_ZONE) => {
    return dayjs().tz(timeZone).add(2, 'hour').unix();
};
const addTimeUnit = (ts, amount, unit, timeZone) => {
    return dayjs.unix(ts).tz(timeZone).add(amount, unit).unix();
};
const getTimezoneOffset = (timezone) => {
    const offsetMinutes = dayjs().tz(timezone).utcOffset();
    const offsetHours = offsetMinutes / 60;
    return offsetHours;
};

const addDaysToToday = (dayToAdd, timeZone) => {
    return dayjs().tz(timeZone).add(dayToAdd, 'day').startOf('day').unix();
};

export {
    getTs,
    subtractTs,
    getStartOfDay,
    getEndOfDay,
    getYesterday,
    getDate,
    getFirstDayInMonth,
    getDateFormat,
    tsToStartOfMonth,
    tsToEndOfMonth,
    setHours,
    getHourMinutes,
    tsGetDayOfWeek,
    tsGetDayOfWeekHour,
    getLastMinuteTs,
    addMinute,
    formatGoogleCalendarDate,
    getHebrewDate,
    getDaysDifference,
    formattedDate,
    twoHoursFromNow,
    getStartOfWeek,
    addTimeUnit,
    getTimezoneOffset,
    addDaysToToday,
    tsGetFormattedMonth
};
