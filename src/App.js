import React, {Component} from 'react'
class App extends Component {
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => console.log(json))
    }

    render() {
        return (
            console.log("test")
        )
    }
}

export default App