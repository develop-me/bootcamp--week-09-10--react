// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/blog",

    headers: {
        // make sure we get JSON back
        Accept: "application/json"
        // use your own key
        Authorization: "Bearer 1e1c27284c86aad7922a805f217f784b097b513"
    },
});
