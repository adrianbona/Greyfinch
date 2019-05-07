import App from './App.view.js'
import React from 'react'
import {getGiphys} from '../Services/Giphy'

let AppLogic = props => {
    getGiphys()
    return <App {...props}/>
}
export default AppLogic