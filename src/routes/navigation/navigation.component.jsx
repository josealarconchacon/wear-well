import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Ecommerce } from "../../assets/ecommerce.svg";
import { UserContext } from "../../context/user.context";
import "./navigation.styles.scss";
const Navigation = () => {
  const { currentValue } = useContext(UserContext);
  console.log(currentValue);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo" to="/">
          <Ecommerce className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
          <Link className="nav-links" to="/auth">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
