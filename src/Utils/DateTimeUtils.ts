import moment from 'moment';

const DISPLAY_FORMAT = 'DD MMMM YYYY';

export const convertToDisplayFormat = (dateString: string | Date): string => {
  const dateToDiplay = moment(dateString).format(DISPLAY_FORMAT);
  return dateToDiplay;
};
