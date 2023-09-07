// Write your code here
import './index.css'

const MatchCard = props => {
  const {latestMatchesDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = latestMatchesDetails
  const className = matchStatus === 'Won' ? 'won' : 'loss'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-comp-team">{competingTeam}</p>

      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${className}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
