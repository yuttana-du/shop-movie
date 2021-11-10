import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import Header from "../components/Header";
import Foods from "../components/Foods/Foods";
import ButtonCart from "../components/ButtonCart";
import Cart from "../components/ButtonCart";
import cartRecoil from "../store/cart";
import timeRecoil from "../store/time";

const Home = () => {
  const [time, setTime] = useRecoilState(timeRecoil);
  const [minute, setMinute] = useState("5");
  const [second, setSecond] = useState("00");
  const [cart, setCart] = useRecoilState(cartRecoil);

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
