// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://username.restful.training/api/blog",

    // use your own key
    params: {
        key: "1e1c27284c86aad7922a805f217f784b097b513",
    },

    // make sure we get JSON back
    headers: {Accept: "application/json"},
});
