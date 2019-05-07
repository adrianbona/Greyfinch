import UseButton from './UseButton.view.js'
import React from 'react'

export default class UseButtonLogic extends React.Component {
    state = {
        count: 0,
    }

    render() {
        return (
            <UseButton
                {...this.state}
                onClick={() => this.setState({count: this.state.count + 1})}/>
        )
    }
}
