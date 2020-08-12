import axios from "axios";

export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer <token>",
    },
});
