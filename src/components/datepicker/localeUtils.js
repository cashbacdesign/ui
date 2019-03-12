import { DateTime, Info } from 'luxon';

const defaultLocale = 'en-GB';
const firstDayOfWeek = {
  'da-DK': 0,
  'de-DE': 0,
  'fr-FR': 0,
  'en-GB': 0,
  'en-US': 6,
  'es-ES': 0,
  'fi-FI': 0,
  'it-IT': 0,
  'nl-BE': 0,
  'pt-PT': 0,
  'pl-PL': 0,
  'sv-SE': 0,
};

export const formatDay = (day, locale = defaultLocale) =>
  DateTime.fromJSDate(day)
    .setLocale(locale)
    .toLocaleString(DateTime.DATE_HUGE);

export const formatMonthTitle = (date, locale = defaultLocale) =>
  DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString({ month: 'long', year: 'numeric' });

export const formatWeekdayShort = (dayOfWeekNumber, locale = defaultLocale) =>
  Info.weekdays('short', { locale })[dayOfWeekNumber];

export const formatWeekdayLong = (dayOfWeekNumber, locale = defaultLocale) =>
  Info.weekdays('long', { locale })[dayOfWeekNumber];

export const getFirstDayOfWeek = (locale = defaultLocale) => firstDayOfWeek[locale] || firstDayOfWeek[defaultLocale];

export const getMonths = (locale = defaultLocale) => Info.months('long', { locale });

export const formatDate = (date, locale = defaultLocale, format = DateTime.DATE_SHORT) =>
  DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString(format);

export const parseDate = (string, format = DateTime.DATE_SHORT, locale = defaultLocale) =>
  DateTime.fromFormat(string, format, { locale }).toJSDate();

export default {
  getFirstDayOfWeek,
  formatDate,
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getMonths,
  parseDate,
};
