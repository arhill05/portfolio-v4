import differenceInCalendarYears from "date-fns/differenceInCalendarYears";

function Age(props) {
  const birthday = new Date(props.birthday);

  const differenceInYears = differenceInCalendarYears(Date.now(), birthday);
  return <span>{differenceInYears}</span>;
}

export default Age;
