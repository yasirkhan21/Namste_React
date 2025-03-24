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
    <div className="m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg transition duration-300 ease-in-out">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="text-gray-600">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="text-lg font-semibold mt-4 mb-2">Menu</h2>
      <ul className="menu-card-list space-y-2 w-[500px]">
        {Array.isArray(itemCards) && itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li 
              key={item.card.info.id}
              className="menu-card flex items-start space-x-4 p-2 bg-white rounded-md shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="menu-logo-container w-1/3">
                <img
                  className="rounded-lg w-full h-auto"
                  src={CDN_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                />
              </div>
              <div className="menu-details w-2/3">
                <h3 className="menu-item-name text-md font-semibold">
                  {item.card.info.name}
                </h3>
                <p className="menu-item-price text-gray-700">
                  {"Rs. " +
                    (item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100)}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="no-menu-items text-center text-gray-500">
            No menu items available
          </li>
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
