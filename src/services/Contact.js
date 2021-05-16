import axios from 'axios';

const BASE_URL = `http://localhost:3006`

const getAllConactDetails = () => axios.get(`${BASE_URL}/contact-list`);

const addContactDetail = (payload) => axios.post(`${BASE_URL}/contact-list`, payload);

const updateContactDetail = (id, payload) => axios.put(`${BASE_URL}/contact-list/${id}`, payload);

const deleteContactDetail = (id) => axios.delete(`${BASE_URL}/contact-list/${id}`);

const getContactById = (id) => axios.get(`${BASE_URL}/contact-list/${id}`);

const Contact = {
    getAllConactDetails,
    addContactDetail,
    updateContactDetail,
    deleteContactDetail,
    getContactById,
}

export default Contact;