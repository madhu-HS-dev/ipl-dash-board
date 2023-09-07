// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsList} = props
  const {id, name, teamImageUrl} = teamsList
  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-logo-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
