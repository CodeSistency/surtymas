'use client';

import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({})

export const GlobalContextProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    const [color, setColor] = useState('red');

    const [carrito, setCarrito] = useState([])

    const [results, setResults] = useState()

    function newItemCarrito(item) {
        console.log(item);
        
        // Check if an object with the same ._id already exists in the carrito array
        const isDuplicate = carrito.some(obj => obj._id === item._id);
        
        if (!isDuplicate) {
          setCarrito(prev => [...prev, item]);
        }
      }

    function removeFromCart(id) {
        console.log(id)
        setCarrito(prevItems => prevItems.filter(item => item._id !== id))
        
    }
    
    useEffect(() => {
        console.log(carrito)
        console.log(results)
    }, [carrito, results])

    return (
        <GlobalContext.Provider value={{ carrito, color, isOpen, results, setCarrito, setResults, setColor, removeFromCart, newItemCarrito, handleToggle }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);