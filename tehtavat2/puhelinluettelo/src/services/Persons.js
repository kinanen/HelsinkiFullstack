import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

const create = newObject => {
    return axios.post(baseUrl, newObject);
}

const update = (id, changedObject) => {
    return axios.put(`${baseUrl}/${id}`, changedObject)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)

};
export default {
    getAll,
    create,
    update,
    remove
}