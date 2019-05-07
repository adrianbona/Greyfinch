import GifButton from './GifButton.view.js'
import React from 'react'
import {getGiphys} from '../Services/Giphy'

export default class GifButtonLogic extends React.Component {
    state = {
        gif: null,
    }

    componentDidMount = () => {
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
            getGiphys().then((response) => {
                this.setState({
                    gif: response
                })
            })
        })
    }

    render = () => {
        if (!this.state.gif) {
            return null
        }

        return (
            <GifButton
                gif={this.state.gif.get('image_url')}
                onClick={this.handleClick}/>
        )
    }
}
