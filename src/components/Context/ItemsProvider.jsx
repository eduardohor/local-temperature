import React, { useState, createContext, useEffect } from "react";

export const ItemsContext = createContext();

const SAVED_ITEMS = "savedItems";

export function ItemsProvider(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemsContext.Provider>
  );
}
