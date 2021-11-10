import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

import Header from "../components/Header";
import Movie from "../components/Movie/Movie";
import ButtonCart from "../components/ButtonCart";
import Cart from "../components/ButtonCart";
import cartRecoil from "../store/cart";

import movieRecoil from "../store/movie";

const Home = () => {
  const [cart, setCart] = useRecoilState(cartRecoil);
  const [movie, setMovie] = useRecoilState(movieRecoil);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=a8a8e3cd72fe3c55fa0e2557ef7ad1cf&query=a"
      );
      console.log("res", res);
      const addPrice = res.data.results.map((items) => {
        return { ...items, price: 0 };
      });
      setMovie(addPrice);
    })();
  }, []);

  const onAddCart = (data, quantity) => {
    const addData = { ...data, quantity };
    setCart(cart.concat(addData));
  };

  const onDropCart = (id) => {
    if (cart.length) {
      const deleteData = cart.filter((items) => {
        return items.id !== id;
      });
    }
    setCart(deleteData);
  };

  const onHandlerCartQuantity = (id, quantity) => {
    if (cart.length) {
      const QuantityCart = cart.map((items) => {
        if (items.id === id) {
          return { ...items, quantity: quantity };
        }
        return items;
      });
      setCart(QuantityCart);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-start mx-5">
      <Header />
      <Movie
        onAddCart={onAddCart}
        onHandlerCartQuantity={onHandlerCartQuantity}
        onDropCart={onDropCart}
      />

      <ButtonCart cart={cart} isOpen={cart.length} />
    </div>
  );
};

export default Home;
