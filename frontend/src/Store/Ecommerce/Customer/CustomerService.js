import axios from "axios"

// import axios from "../../../Library/Axios"



const GetAllProducts = () => {
    return axios.get(`http://localhost:8080/allproducts`)
}

const SubmitShopkeeperData = (payload) => {
    return axios.post(`http://localhost:8080/shopregister`, payload)
}

const AddToCartApi = (payload) => {
    return axios.post(`http://localhost:8080/addtocart`, payload)
}

// const CustomerLogin = (payload) => {
//     console.log("payload",payload)

//     return axios.post(`http://localhost:8080/newregister`,payload)
// }

// const CustomerRegister = () => {
//     return axios.post(`http://localhost:8080/newregister`)
// }

export const CustomerService = {
    GetAllProducts,
    SubmitShopkeeperData,
    AddToCartApi
    // CustomerLogin
}