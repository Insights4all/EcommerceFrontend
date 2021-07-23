import axios from "axios"

// import axios from "../../../Library/Axios"



const GetAllProducts = () => {
    return axios.get(`http://localhost:8080/allproducts`)
}

const SubmitShopkeeperData = (payload) => {
    return axios.post(`http://localhost:8080/shopregister`, payload)
}


export const CustomerService = {
    GetAllProducts,
    SubmitShopkeeperData
}