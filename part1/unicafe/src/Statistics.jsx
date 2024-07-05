const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => { 
  const total = good + neutral + bad;
  const average = total ? (good - bad)/total : 0;
  const positive = total ? good/total : 0;

  return (
    <div>
      <h1>Statistics</h1>
      {(good || neutral || bad) ? (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good}/>
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad}/>
            <StatisticsLine text="total" value={total}/>
            <StatisticsLine text="average" value={average.toFixed(2)}/>
            <StatisticsLine text="positive" value={`${(positive * 100).toFixed(2)} %`}/>
          </tbody>
        </table>
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  );
}

export default Statistics;
