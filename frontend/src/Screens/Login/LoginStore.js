import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { AuthAction } from "../../Store/Ecommerce/Auth/AuthAction"
import { CustomerAction } from "../../Store/Ecommerce/Customer/CustomerAction"



const mapStateToProps = (state) => {
    return {
        customer_login_Data: state.ecommerce.auth.customer_login_Data,
        }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    UserLogin: AuthAction.UserLogin,
}, dispatch)

// eslint-disable-next-line import/no-anonymous-default-export
export default (Container) => {
    return connect(mapStateToProps, mapDispatchToProps)(Container);
}