import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

import Header from "../components/Header";
import Foods from "../components/Foods/Foods";
import ButtonCart from "../components/ButtonCart";
import Cart from "../components/ButtonCart";
import cartRecoil from "../store/cart";
import timeRecoil from "../store/time";
import movieRecoil from "../store/movie";

const Home = () => {
  const [time, setTime] = useRecoilState(timeRecoil);
  const [minute, setMinute] = useState("5");
  const [second, setSecond] = useState("00");
  const [cart, setCart] = useRecoilState(cartRecoil);
  const [movie, setMovie] = useRecoilState(movieRecoil);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=a8a8e3cd72fe3c55fa0e2557ef7ad1cf&query=a"
      );
      console.log("res", res);
      setMovie(res.data.result);
    })();
  }, []);

  useEffect(() => {
    if (time < 1) {
      console.log("left to order");
    }
    setMinute(Math.floor(time / 60));
    if (time % 60 < 10) {
      setSecond("0" + (time % 60));
    } else {
      setSecond(time % 60);
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time < 1) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

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
      <Header minute={minute} second={second} />
      <Foods
        onAddCart={onAddCart}
        onHandlerCartQuantity={onHandlerCartQuantity}
        onDropCart={onDropCart}
      />

      <ButtonCart cart={cart} isOpen={cart.length} />
    </div>
  );
};

export default Home;
