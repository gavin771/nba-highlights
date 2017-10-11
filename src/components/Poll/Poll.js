import React, { Component } from 'react'

const POLL_TEAMS_API = 'http://localhost:3004/teams'

class Poll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pollTeams: []
        }
    }

    fetchPollTeams() {
        fetch(`${POLL_TEAMS_API}?poll=true&_sort=count&_order=desc`,
            { method: 'GET' })
            .then(res => res.json())
            .then(json => {
                this.setState({ pollTeams: json })
            })
    }

    addCount(count, id) {
        fetch(`${POLL_TEAMS_API}/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ count: count + 1 })
            })
            .then(() => {
                this.fetchPollTeams()
            })
    }

    componentDidMount() {
        this.fetchPollTeams()
    }

    renderPoll() {
        let teams = this.state.pollTeams;
        const position = ['1st', '2nd', '3rd']

        return teams.map((t, i) => {
            return (
                <div className="poll_item" key={t.id} onClick={()=>this.addCount(t.count, t.id)}>
                    <img alt={t.name} src={`/images/teams/${t.logo}`} />
                    <h4>{position[i]}</h4>
                    <div>{t.count} Votes</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="home_poll">
                <h3>Who will be the next champion ?</h3>
                <div className="poll_container">
                    {this.renderPoll()}
                </div>
            </div>
        )
    }
}

export default Poll