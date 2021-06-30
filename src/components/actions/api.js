import axios from 'axios'

const api = axios.create({
    baseURL: '',
    withCredentials: true
})

export const passwordAPI = {
    registration(data) {
        return api.post('', data)
    }
};

export const authApi = {
    login(data) {
        return api.post('', data)
    },
    logOut() {
        return api.delete('')
    },
    me() {
        return api.get('')
    }
}
