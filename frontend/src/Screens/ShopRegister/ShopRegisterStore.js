import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { CustomerAction } from "../../Store/Ecommerce/Customer/CustomerAction"



const mapStateToProps = (state) => {
    return {
        product_data: state.ecommerce.customer.product_data,
        form_Data:state.ecommerce.customer.form_data

        }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProducts: CustomerAction.GetAllProducts,
    formData: CustomerAction.SaveFormData,
    submitFormData:CustomerAction.ShopkeeperData

    //  CPCustomerAction.CPCustomerList ,


}, dispatch)

// eslint-disable-next-line import/no-anonymous-default-export
export default (Container) => {
    return connect(mapStateToProps, mapDispatchToProps)(Container);
}