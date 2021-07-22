import axios from "../../../Library/Axios"

const UserLogin = () => {
    return axios.get(`login`)
}


export const AuthService = {
    UserLogin,
}