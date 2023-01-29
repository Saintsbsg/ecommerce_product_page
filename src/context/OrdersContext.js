import { createContext, useState } from "react";

export const OrdersContext = createContext();

export const OrdersContextProvider = ({children}) =>{
    const [orders, setOrders] = useState(0);

    return(
        <OrdersContext.Provider value={{orders, setOrders}}>
            {children}
        </OrdersContext.Provider>
    )
}