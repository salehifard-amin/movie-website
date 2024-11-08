const RuntimeConverter = ({ timeSpan }) => {
  
  const minutes = Array.isArray(timeSpan) ? timeSpan[0] : timeSpan;
  if (minutes == null || minutes== undefined) {
    return <div className="duration">Duration: N/A</div>;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return (
    <p className="duration">
      <span className="duration-text">Duration: </span>
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
    </p>
  );
};

export default RuntimeConverter;
