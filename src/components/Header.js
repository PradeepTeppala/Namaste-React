import { LOGO_URL } from "../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  
  const cartItem = useSelector((store) => store.cart.items);
  
    return (
      <div className="flex justify-between bg-orange-400 shadow-lg">
        <div className="logo-container">
          <img className="w-40" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li  className="px-4 font-bold text-lg" >Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4 font-bold text-lg"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/">Home</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/About">About Us</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/Contact">Contact Us</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/Cart">Cart - ({cartItem.length})</Link></li>
            <button 
            className="login px-4 py-1 bg-gray-300  rounded-lg  font-bold text-lg"
            onClick={() => {
              btnNameReact === "Login" 
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
            }}
            >
            {btnNameReact}
            </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;