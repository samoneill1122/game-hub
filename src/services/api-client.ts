import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1801755290dc4049b6b74c5febfd3dd3"
    }
})