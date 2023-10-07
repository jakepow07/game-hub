import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a34fd16e20014cd9ac5937788d363299'
    }
})