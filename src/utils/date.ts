export const date = new Date(Date.now()).toLocaleDateString('en-us', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const DateFormat = (hours = 0) => {
  let times = [];
  for (let i = 0; i < hours; i++) {
    const _date = new Date();
    times.push(_date.setHours(_date.getHours() - i));
  }
  let _hours = times.map(time => new Date(time).getHours());
  let _formatedHours = _hours.map(hour =>
    hour < 12 ? `${hour} am` : `${hour} pm`,
  );
  return _formatedHours.reverse();
};
/**Get the last seven days of the week starting from today */
const _dateDays = [...Array(7)].map((_, i) => {
  let _days = [];
  const d = new Date();
  _days.push(new Date(d.setDate(d.getDate() - i)).toDateString().split(' ')[0]);
  return d;
});
const _d = _dateDays.map(d => new Date(d).toDateString().split(' ')[0]);
export const _days = _d.reverse();

export const monthlyDataFormat = () => {
  var monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let _td = new Date(Date.now());
  let d;
  let month = [];

  for (var i = 7; i > 0; i -= 1) {
    d = new Date(_td.getFullYear(), _td.getMonth() - i + 1, 2);
    month.push(monthNames[d.getMonth()]);
  }
  return month;
};
