import axiosClient from "./axiosClient";

const songApi = {
    getAll: () => {
        const url = `/songs/get-all`;
        return axiosClient.get(url);
    },
}

export default songApi;