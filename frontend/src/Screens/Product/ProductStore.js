import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { CustomerAction } from "../../Store/Ecommerce/Customer/CustomerAction"



const mapStateToProps = (state) => {
    return {
        cartData: state.ecommerce.customer.add_to_cart,
        }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    AddToCart: CustomerAction.AddToCart,
    AddToCartApi:CustomerAction.AddToCartApi
   

    //  CPCustomerAction.CPCustomerList ,


}, dispatch)

// eslint-disable-next-line import/no-anonymous-default-export
export default (Container) => {
    return connect(mapStateToProps, mapDispatchToProps)(Container);
}