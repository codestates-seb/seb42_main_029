import React from 'react';

function FormatDate(date) {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  return `${year}-${month}-${day}-${hours}:${minutes}`;
}

function DateComponent() {
  const dateString = '2023-04-03T05:13:24';
  const date = new Date(dateString);

  return <div>{FormatDate(date)}</div>;
}

export default DateComponent;