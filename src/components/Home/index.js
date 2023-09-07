// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsData = data.teams
    const updatedTeamData = teamsData.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedTeamData, isLoading: false})
  }

  renderTeamLists = () => {
    const {teamsList} = this.state
    return (
      <ul className="team-cards-container">
        {teamsList.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamsList={eachTeam} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="logo-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" width={50} height={50} />
          </div>
        ) : (
          this.renderTeamLists()
        )}
      </div>
    )
  }
}

export default Home
