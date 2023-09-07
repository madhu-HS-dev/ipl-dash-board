// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-card">
      <div className="competing-team-logo-container">
        <div>
          <p className="latest-match-comp-team">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-venue">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-result-logo"
        />
      </div>
      <hr className="line" />
      <div>
        <p className="latest-match-innings-heading">First Innings</p>
        <p className="latest-match-innings-description">{firstInnings}</p>
        <p className="latest-match-innings-heading">Second Innings</p>
        <p className="latest-match-innings-description">{secondInnings}</p>
        <p className="latest-match-innings-heading">Man Of The Match</p>
        <p className="latest-match-innings-description">{manOfTheMatch}</p>
        <p className="latest-match-innings-heading">Umpires</p>
        <p className="latest-match-innings-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
