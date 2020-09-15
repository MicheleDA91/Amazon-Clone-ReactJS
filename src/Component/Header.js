import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAutentication = () => {
    if (user) {
      auth.signOut();
    } else {
      auth.signIn();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/checkin">
          <div onClick={handleAutentication} className="header_option">
            <span className="header_optionLine1">
              hello {user ? "" : "guest"}
            </span>
            <span className="header_optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLine1">return</span>
          <span className="header_optionLine2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLine1">your</span>
          <span className="header_optionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_shoppingbag">
            <ShoppingBasketIcon />
            <span className="header_optionLine2 header_bagcounter">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
