export const fuzzyTime = time => {
  const diff = new Date() - new Date(time);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const year = week * 52;

  if (diff < 1000) {
    return `now`;
  } else if (diff < minute) {
    return `${Math.floor(diff / second)} seconds ago`;
  } else if (diff < hour) {
    return `${Math.floor(diff / minute)} minutes ago`;
  } else if (diff < day) {
    return `${Math.floor(diff / hour)} hours ago`;
  } else if (diff < week) {
    return `${Math.floor(diff / day)} days ago`;
  } else if (diff < year) {
    return `${Math.floor(diff / week)} weeks ago`;      
  } else return `${Math.floor(diff / year)} years ago`;
};

export const ddmmyyyy = time => {
  time = new Date(time);
  let day = String(time.getDate());
  let month = String(time.getMonth() + 1);
  const year = String(time.getFullYear());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${day}/${month}/${year}`;
};
