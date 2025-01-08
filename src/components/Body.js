import RestaurantCard  from "./RestaurantCard"; 
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

  const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=> {
      fetchData();
    }, []);
    
    const fetchData = async () => {
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4889338&lng=78.3922053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await  data.json();

      setListOfRestraunt(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
      return (
      <h1>
        Looks like you're offline!! Please check your internet connection
        </h1>
      );
    
    const { loggedInUser , setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter flex items-center">
          <div className="search m-4 p-4">
          <input 
          type="text" 
          data-testid="searchInput"
          className="border border-solid border-black" 
          value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
          <button 
          className="px-4 py-1 bg-green-300 m-4 rounded-lg"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
          >
            Search
            </button>
          </div>
          <div >
          <button 
          className="px-4 py-1 bg-gray-300  m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            ); 
            setFilteredRestaurant(filteredList); 
          }}>
            Top Rated Restaurants
          </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
          </div>
          <div className="flex flex-wrap">
           {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
             <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
        
      </div>
    );
  };

  export default Body;
