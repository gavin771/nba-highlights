import React, { Component } from 'react'

const SUBBSCRIPTION_API = 'http://localhost:3004/subscriptions'

class Subscriptions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            error: false,
            success: false
        }
    }

    saveSubscription = (email) => {
        fetch(SUBBSCRIPTION_API,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
            .then(res => res.json())
            .then(() => {
                this.setState({ email: '', success: true, error: false });
            })
    }

    clearMessages = () => {
        setTimeout(() => {
            this.setState({ error: false, success: false })
        }, 3000)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            this.saveSubscription(email);
        }
        else {
            this.setState({ error: true, success: false })
        }
        this.clearMessages();
    }

    onChangeInput = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <div className="subscribe_panel">
                <h3> Subscribe To Us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="youremail@gmail.com"
                            value={this.state.email}
                            onChange={this.onChangeInput} />
                        <div className={this.state.error ? "error show" : "error"}>
                            Your email is invalid
                        </div>
                        <div className={this.state.success ? "success show" : "success"}>
                            Check your email for confirmation
                        </div>
                    </form>
                </div>
                <small>
                    Lorem ipsum
                </small>
            </div>
        )
    }
}

export default Subscriptions