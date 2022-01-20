import axios from 'axios'

const jsonplaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getData = async (setData) => {
    jsonplaceholder.get('/posts').then((res) => setData(res.data))
}

export const postData = async (b, setData) => {
    jsonplaceholder.post('/posts', b)
        .then((res) => setData(pervState => [ fixId(res.data), ...pervState]))
}

const fixId = (data) => {
    let gg = data
    gg.id = 1
    return gg
}

export const updateRequest = async (e, changeData, eventBody, setEdit) => {
    jsonplaceholder.put(`/posts/${e.id}`, {id:e.id, title:e.title, body: eventBody, userId: e.userId})
        .then((res) => changeData(e,res))
        .then(setEdit(-1))
}