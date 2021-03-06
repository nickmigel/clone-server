import axios from 'axios'

const axio = () => {
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}

export default axio