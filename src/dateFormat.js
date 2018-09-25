// @flow strict
const wdayMap = ["日", "月", "火", "水", "木", "金", "土"];

const dateFormat = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const wday = wdayMap[date.getDay()];
  return `${month}月${day}日(${wday})`;
};

export default dateFormat;
