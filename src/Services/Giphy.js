import * as axios from 'axios'
import * as immutable from 'immutable'

const API_HOST = 'https://cors-anywhere.herokuapp.com/https://api.giphy.com'
const API_PATH = '/v1/gifs'
const API_KEY = 'eKE5YhnXK7OMusB4j35L0KgbVwxx2vxS'

const responseErrorOrGeneric = (error) => error.response && error.response.data && error.response.data.error ?
    error.response.data.error : 'There was an error processing your request'

const get = (url) => {
    return axios.get(url).catch((error) => {
        throw Error(responseErrorOrGeneric(error))
    })
}

export const getGiphys = () => {
    const animals = ['cat', 'dog', 'elephant', 'lion', 'monkey']
    return get(`${API_HOST}${API_PATH}/search?q=${animals.join('+')}&api_key=${API_KEY}`).then((response) => {
        return immutable.fromJS(response.data)
    }).catch(() => {
        return immutable.List()
    })
}