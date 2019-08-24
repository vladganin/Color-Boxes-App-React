import React from 'react';

class People extends React.Component {
    constructor() {
        super();
        this.state = {
            picture: [],
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/').then(results => {
            return results.json();
        }).then(data => {
            let picture = data.results.map((pic) => {
                return (
                    <div key={pic.results}>
                        <img src={pic.picture.large} alt="Human face front" />
                    </div>
                )
            })
            this.setState({ picture: picture });
            console.log("state", this.state.picture)
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.picture}
                </div>
            </div>
        )
    }
}

export default People