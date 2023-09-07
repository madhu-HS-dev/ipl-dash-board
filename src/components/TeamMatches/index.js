// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: {}, recentMatch: [], bannerUrl: '', isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData

    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      latestMatch: updatedLatestMatchDetails,
      recentMatch: updatedRecentMatches,
      bannerUrl: teamBannerUrl,
      isLoading: false,
    })
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'CSK':
        return 'csk'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'DC':
        return 'dc'
      case 'MI':
        return 'mi'
      case 'RR':
        return 'rr'
      case 'SRH':
        return 'srh'
      default:
        return ''
    }
  }

  renderTeamDetails = () => {
    const {latestMatch, recentMatch, bannerUrl} = this.state
    return (
      <>
        <img src={bannerUrl} alt="team banner" />
        <p className="latest-match-heading">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatch} />
        <ul className="match-cards-container">
          {recentMatch.map(eachItem => (
            <MatchCard key={eachItem.id} latestMatchesDetails={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" width={50} height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const className = this.getClassName()
    return (
      <div className={`team-matches-container ${className}`}>
        {isLoading ? this.renderLoader() : this.renderTeamDetails()}
      </div>
    )
  }
}

export default TeamMatches
