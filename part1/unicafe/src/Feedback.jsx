const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

const Feedback = (props) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={props.handleClickGood} text="good"/>
      <Button handleClick={props.handleClickNeutral} text="neutral"/>
      <Button handleClick={props.handleClickBad} text="bad"/>
    </div>
  );
}

export default Feedback;
