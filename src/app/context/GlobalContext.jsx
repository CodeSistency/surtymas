'use client';

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({})

export const GlobalContextProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    const [color, setColor] = useState('red');

    const [carrito, setCarrito] = useState([])

    function newItemCarrito(item){
        console.log(item)
        setCarrito(prev => [...prev, item])
    }

    function removeFromCart(id) {
        console.log(id)
        setCarrito(prevItems => prevItems.filter(item => item._id !== id))
        
    }
    // console.log(color)

    return (
        <GlobalContext.Provider value={{ carrito, color, isOpen, setColor, removeFromCart, newItemCarrito, handleToggle }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);