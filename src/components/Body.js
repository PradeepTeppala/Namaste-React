import RestaurantCard from "./RestaurantCard"; 
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

  const Body = () => {

    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(()=> {
      fetchData();
    }, []);
    
  
    const fetchData = async () => {
      const data = await fetch(

        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4889338&lng=78.3922053&carousel=true&third_party_vendor=1"
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

      );

      const json = await  data.json();

       console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      
      setListOfRestraunt(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      
      setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };


    
    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
          <input 
          type="text" 
          className="search-box" 
          value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
          <button 
          onClick={() => {
            console.log(searchText)
            const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
          >
            Search
            </button>
          </div>
          <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            ); 
            setListOfRestraunt(filteredList); 
          }}>
            Top Rated Restaurants
          </button>
          </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => 
          (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;

