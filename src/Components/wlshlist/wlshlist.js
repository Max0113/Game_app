"use client";
import { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setWishlist([...new Set(parsed)]);
        }
      }
    } catch (error) {
      console.error("Failed to load wishlist from storage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Failed to save wishlist to storage:", error);
    }
  }, [wishlist]);

  const addGame = (gameid) => {
    setWishlist((prev) => (prev.includes(gameid) ? prev : [...prev, gameid]));
  };

  const removeGame = (gameid) => {
    setWishlist((prev) => prev.filter((id) => id !== gameid));
  };

  const toggleGame = (gameid) => {
    setWishlist((prev) =>
      prev.includes(gameid)
        ? prev.filter((id) => id !== gameid)
        : [...prev, gameid]
    );
  };

  const isInWishlist = (gameid) => wishlist.includes(gameid);

  return (
    <WishlistContext.Provider value={{ wishlist, addGame, removeGame, toggleGame, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
