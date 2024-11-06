const RuntimeConverter = ({ timeSpan }) => {
  
  const minutes = Array.isArray(timeSpan) ? timeSpan[0] : timeSpan;
  if (minutes == null || minutes== undefined) {
    return <div>Duration: N/A</div>;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return (
    <div>
      <span>Duration: </span>
      {hours > 0 && (
        <span>
          {hours} {hours > 1 ? "hours" : "hour"}
        </span>
      )}
      {remainingMinutes > 0 && (
        <span>
          {hours > 0
            ? ` and ${remainingMinutes} minutes`
            : `${remainingMinutes} minutes`}
        </span>
      )}
    </div>
  );
};

export default RuntimeConverter;
