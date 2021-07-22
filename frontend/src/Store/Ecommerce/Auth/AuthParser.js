const UserLogin = (res) => {
    let data = [];

    if (res && res.response) {
        res = res.response;
    }

    if (!res) {
        return data
    }

    return data;
}



export const AuthParser = {

    UserLogin
}