import axios from 'axios'

const avatarAPI = axios.create({
    baseURL: 'http://localhost:3000'
});

export const getAvatar = async (setIconFeatures) => {
    avatarAPI.get('/').then((res) => setIconFeatures(res.data))
}
