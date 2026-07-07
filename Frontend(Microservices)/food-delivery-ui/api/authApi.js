import api from "./axiosConfig";

export const registerUser = async (userData) => {

    const response = await api.post(
        "http://localhost:8081/api/auth/register",
        userData
    );

    return response.data;
};

export const loginUser = async (loginData) => {

    const response = await api.post(
        "http://localhost:8081/api/auth/login",
        loginData
    );

    return response.data;
};