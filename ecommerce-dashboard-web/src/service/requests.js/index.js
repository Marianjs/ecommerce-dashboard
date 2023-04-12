import axios from "axios";

/**
 * file that manages the API requests using axios
 */

const API_URL = "https://localhost:7139/api";

const requests = {
  get: (url, params) =>
    axios.get(`${API_URL}/${url}`, { params }).then((response) => response.data),
  create: (url, data) =>
    axios.post(`${API_URL}/${url}`, data).then((response) => response.data),
  update: (url, data) =>
    axios.put(`${API_URL}/${url}`, data).then((response) => response.data),
  delete: (url) =>
    axios.delete(`${API_URL}/${url}`).then((response) => response.data),
};

export default requests;