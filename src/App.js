// create your App component here

import React, {Component} from "react";

class App extends Component {
    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(astronauts => {
                // debugger;
                this.setState({ astronauts: astronauts.people });
            })
    }

    render() {
        return(
            <div>
                <h1>Astronauts in Space</h1>
                <ul>
                    {this.state.astronauts.map(astronaut => <li>{astronaut.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default App;