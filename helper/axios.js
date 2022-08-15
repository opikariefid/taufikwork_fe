import axios from "axios"

const get = async (path, headers) => {
    return await axios.get(`${process.env.NEXT_PUBLIC_URL}/${path}`, headers);
}

const del = async (path, headers) => {
    return await axios.delete(`${process.env.NEXT_PUBLIC_URL}/${path}`, headers);
}

const post = async (path,body,headers) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_URL}/${path}`,body, headers);
}

export {
    get,
    post,
    del
}