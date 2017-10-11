import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const TEAMS_API = 'http://localhost:3004/teams'
const fadeAnimation = {
    classNames: "fade",
    timeout: {
        enter: 500,
        exit: 500
    }
}

class Teams extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allTeams: [],
            filteredTeams: [],
            keywords: ''
        }
    }

    componentDidMount() {
        fetch(TEAMS_API, { method: 'GET' })
            .then(res => res.json())
            .then(json => {
                this.setState({ allTeams: json, filteredTeams: json })
            })
    }

    renderList = ({ filteredTeams }) => {
        return filteredTeams.map((t) => {
            return (
                <CSSTransition key={t.id} {...fadeAnimation}>
                    <Link className="team_item" to={`/team/${t.name}`}>
                        <img alt={t.name} src={`/images/teams/${t.logo}`} />
                    </Link>
                </CSSTransition>
            )
        })
    }

    searchTeam = (e) => {
        const keywords = e.target.value
        if (!keywords) {
            this.setState({
                filteredTeams: this.state.allTeams,
                keywords
            })
        }
        else {
            const filteredTeams = this.state.allTeams.filter((t) => {
                return t.name.toLowerCase().includes(keywords.toLowerCase())
            })
            console.log(filteredTeams);
            this.setState({
                filteredTeams,
                keywords
            })
        }
    }

    render() {
        return (
            <div className="teams_component">
                <div className="teams_input">
                    <input
                        value={this.state.keywords}
                        onChange={e => this.searchTeam(e)}
                        type="text"
                        placeholder="Search for a team" />
                </div>
                <div className="teams_container">
                    <TransitionGroup>
                        {this.renderList(this.state)}
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}

export default Teams