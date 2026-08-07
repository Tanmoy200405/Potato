import { createContext, useEffect, useState } from "react";
import { food_list as assets_food_list, menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");
    const [food_list, setFoodList] = useState(assets_food_list);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const currency = "$";
    const deliveryCharge = 5;

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
              if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            if (response.data && response.data.success && Array.isArray(response.data.data) && response.data.data.length > 0) {
                setFoodList(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    }

    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
            if (response.data && response.data.success && response.data.cartData) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.error("Error loading cart data:", error);
        }
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;