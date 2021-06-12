import axios from 'axios'

const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    async getProducts() {
        try {
            const resp = await axios.get('http://localhost:4000/products');
            return resp.data.data;
        } catch (err) {
            console.error(err);
        }
    }
}

export { ApiService }
