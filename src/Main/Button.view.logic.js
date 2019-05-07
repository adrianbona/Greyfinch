import Button from './Button.view.js'
import React from 'react'
import * as PropTypes from 'prop-types'

class ButtonLogic extends React.Component {
    state = {
        isActive: false,
    }

    componentWillUnmount() {
        this.willUnmount = true
    }

    onClick = event => {
        const {onClick} = this.props

        this.setState({isActive: !this.state.isActive}, () => {
            setTimeout(() => {
                if (this.willUnmount) return

                this.setState({isActive: !this.state.isActive})
            }, 150)
        })

        if (onClick) {
            onClick(event)
        }
    }

    render() {
        return (
            <Button {...this.state} {...this.props} onClick={this.onClick}/>
        )
    }
}

ButtonLogic.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default ButtonLogic