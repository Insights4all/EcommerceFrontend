import axios from "axios"

// import axios from "../../../Library/Axios"



const GetAllProducts = () => {
    return axios.get(`http://localhost:8080/allproducts`)
}


export const CustomerService = {
    GetAllProducts,
}