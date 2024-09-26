import { useState, useEffect } from "react"
import type { MenuItem, OrderItem } from "../types/types";


const useOrder = () => {
    
    //Initial States
    const initialOrder = () : OrderItem[] => {
        const localStorageOrder = localStorage.getItem('order')
        return localStorageOrder ? JSON.parse(localStorageOrder) : []
    }

    const [order, setOrder] = useState<OrderItem[]>(initialOrder)
    const [tip, setTip] = useState(0)

    //Effect
    //Save in Local Storage
    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order))
    }, [order])

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => item.id === orderItem.id)
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity+1} 
                : orderItem
            )
            setOrder(updatedOrder)
        }else{
            const newItem = {...item, quantity:1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: OrderItem['id']) => {
        const orderUpdated = order.filter(item => item.id !== id);
        setOrder(orderUpdated);
    }

    const placeOrder = () => {
        console.log("guardando...")
        setOrder([]);
        setTip(0);
    }

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
 }

export default useOrder