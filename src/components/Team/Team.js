import React, { Component } from 'react'

const TEAM_API = 'http://localhost:3004/teams'

class Team extends Component {
    constructor(props) {
        super(props)

        this.state = {
            team: []
        }
    }

    componentDidMount() {
        fetch(`${TEAM_API}?name=${this.props.match.params.id}`, { method: 'GET' })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    team: json
                })
            })
    }

    renderSquad = (squad) => {
        if (squad) {
            return squad.map((m) => {
                return (
                    <div key={m.name} className="item player_wrapper">
                        <img alt={m.name} src={`/images/avatar.png`} />
                        <h4>{m.name}</h4>
                        <div className="node">
                            <span> Number:</span>{m.number}
                        </div>
                        <div className="node">
                            <span> PPG:</span>{m.PPG}
                        </div>
                        <div className="node">
                            <span> APG:</span>{m.APG}
                        </div>
                        <div className="node">
                            <span> RPG:</span>{m.RPG}
                        </div>
                    </div>
                )
            })
        }

    }

    renderData = ({ team }) => {
        
        if (team.length>0) {
            let _team = team[0]
            return (
                <div key={_team.id} className="team_data_wrapper">
                    <div className="left">
                        <img alt={_team.name} src={`/images/teams/${_team.logo}`} />
                    </div>
                    <div className="right">
                        <h1>{_team.name}</h1>
                        <p>{_team.description}</p>
                        <hr />
                        <div className="squad">
                            {this.renderSquad(_team.squad)}
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="team_data">
                {this.renderData(this.state)}
            </div>
        )
    }
}

export default Team