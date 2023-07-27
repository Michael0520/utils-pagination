import axios from "axios";

export const jsonPlaceHolderAxios = axios.create({
    baseURL: 'https://picsum.photos/v2/list'
})