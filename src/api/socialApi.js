import axiosClient from "./axiosClient";

const socialApi = {
    getAll: () => {
        const url = `/socials/get-all`;
        return axiosClient.get(url);
    },
}

export default socialApi;