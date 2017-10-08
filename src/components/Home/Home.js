import React, { Component } from 'react'

import Jumbotron from '../Jumbotron/Jumbotron'
const HOME_API = 'http://localhost:3004/home'



class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            home: {}
        }
    }

    getHomeData = () => {
        fetch(HOME_API, { method: 'GET' })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    home: json
                })
            })
    }

    componentDidMount() {
        this.getHomeData();
    }


    render() {
        return (
            <div>
                <Jumbotron slides={this.state.home.slider} />
                Home
            </div>
        )
    }
}

export default Home