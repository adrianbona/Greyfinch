import GifButton from './GifButton.view.js'
import React from 'react'
import {getGiphys} from '../Services/Giphy'
import CircularProgress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'
import * as PropTypes from 'prop-types'

const styles = ({
    progress: {
        color: 'rgba(0, 206, 124, 0.7)',
        animationDuration: '550ms',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '100px',
    },
})

class GifButtonLogic extends React.Component {
    state = {
        gif: null,
    }

    componentDidMount = () => {
        this.updateGifFromGiphy()
    }

    updateGifFromGiphy = () => {
        getGiphys().then((response) => {
            this.setState({
                gif: response
            })
        })
    }

    handleClick = () => {
        this.setState({
            gif: null
        }, () => {
            this.updateGifFromGiphy()
        })
    }

    render = () => {
        const {classes} = this.props

        if (!this.state.gif) {
            return (
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    className={classes.progress}
                    size={50}
                    thickness={5}/>
            )
        }

        return (
            <GifButton
                gif={this.state.gif.get('fixed_height_downsampled_url')}
                onClick={this.handleClick}/>
        )
    }
}

GifButtonLogic.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GifButtonLogic)