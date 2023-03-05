import moment from 'moment';

const DISPLAY_FORMAT = 'DD MMMM YYYY';

export const convertToDisplayFormat = (dateString: string | Date): string => {
  const dateToDiplay = moment(dateString).format(DISPLAY_FORMAT);
  return dateToDiplay;
};

export const convertToISOString = (date: Date): string => {
  const ISOString = date.toISOString();

  // Temporary fix to remove zone offset
  const formattedISOString = ISOString.replace(/T.*$/, 'T00:00:00.000Z');
  return formattedISOString;
};
