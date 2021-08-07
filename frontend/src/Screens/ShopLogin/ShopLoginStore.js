import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AuthAction } from "../../Store/Ecommerce/Auth/AuthAction";

const mapStateToProps = (state) => {
  return {
    shop_login_Data: state.ecommerce.auth.shop_login_Data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ShopLogin: AuthAction.ShopLogin,
    },
    dispatch
  );

// eslint-disable-next-line import/no-anonymous-default-export
export default (Container) => {
  return connect(mapStateToProps, mapDispatchToProps)(Container);
};
