import { useEffect, useState } from "react";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([]);

    useEffect(() =>{
          fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4889338&lng=78.3922053&restaurantId=56096&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };
    
    // const {name} = resInfo.cards[2].card.card.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;