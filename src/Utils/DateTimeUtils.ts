import moment from 'moment';

const DISPLAY_FORMAT = 'DD MMMM YYYY';

export const convertToDisplayFormat = (dateString: string): string => {
  const dateToDiplay = moment(dateString).format(DISPLAY_FORMAT);
  return dateToDiplay;
};