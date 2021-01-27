import {
  format,
  formatDistance,
  differenceInCalendarDays,
  parseJSON,
  getYear,
} from 'date-fns';

const formatDate = (eventText, date) => {
  const today = new Date();
  const updatedDate = parseJSON(date)
  
  if (differenceInCalendarDays(today, updatedDate) <= 30) {
    return `${eventText} ${formatDistance(updatedDate, today, { addSuffix: true })}`;
  } else if (getYear(today) === getYear(updatedDate)) {
    return `${eventText} on ${format(updatedDate, 'MMM co')}`;
  } else {
    return `${eventText} on ${format(updatedDate, "MMM co',' yyyy")}`;
  }
}

export default formatDate;
