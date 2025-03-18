import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);
  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("item", itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul className="menu-card-list">
        {Array.isArray(itemCards) && itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id} className="menu-card">
              <div className="menu-card-content">
                <div className="menu-logo-container">
                  <img
                    className="menu-logo"
                    src={CDN_URL + item.card.info.imageId}
                    alt={item.card.info.name} // Use item's name for better alt text
                  />
                </div>
                <div className="menu-details">
                  <h3 className="menu-item-name">{item.card.info.name}</h3>
                  <p className="menu-item-price">
                    {"Rs. " +
                      (item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100)}
                  </p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="no-menu-items">No menu items available</li>
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
