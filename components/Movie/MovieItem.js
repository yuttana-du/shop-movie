import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import cloneDeep from 'lodash/cloneDeep'

import movieRecoil from "../../store/movie";
import truncate from "lodash/truncate";
import Quantity from "../Quantity";
import ButtonAddMovie from "../ButtonAddMovie";
import cartRecoil from "../../store/cart";


const MovieItem = ({
  value,
  onAddCart,
  onHandlerCartQuantity,
  onDropCart,
}) => {
  const [movie, setMovie] = useRecoilState(movieRecoil);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [price, setPrice] = useState("");
  const [cart, setCart] = useRecoilState(cartRecoil);
  
  useEffect(() => {

    if(!cart.length) {
      setIsAdded(false)
    }

  }, [cart])

  useEffect(() => {
    if (cart.length) {
      const reQuantity = cart.find((items) => {
        return items.id === value.id;
      });

      setQuantity(reQuantity?.quantity);
      if (reQuantity?.quantity !== undefined) setIsAdded(true);
      if (reQuantity?.quantity === undefined) {
        setQuantity(1);
      }
    }
  
    const oldPrice = cart.map((items)=>{
      if(items.id===value.id)setPrice(items.price)
      return items
    })
    
  }, []);

  const onAddQuantity = () => {
    setQuantity(quantity + 1);
    onHandlerCartQuantity(value.id, quantity + 1);
  };

  const onDropQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onHandlerCartQuantity(value.id, quantity - 1);
    }
  };

  const onClickAdd = () => {
    setIsAdded(true);
    onAddCart(value, quantity);
  };

  const onClickUnAdd = () => {
    setIsAdded(false);
    onDropCart(value.id);
  };

  const onClickEditPrice = () => {

    setIsEdit(true);

  };

  const onClickSavePrice = (id) => {
    const cloneMovie = cloneDeep(movie)
    const index = movie.findIndex((item) => item.id === id);
    cloneMovie[index]?.price = Number(price);
    setMovie(cloneMovie);
    setIsEdit(false);
    if(cart.length){
      const cloneCart = cloneDeep(cart)
      const indexEdit = cart.findIndex((item) => item.id === id);
      cloneCart[indexEdit]?.price=Number(price);
        setCart(cloneCart);
    }
  };

  return (
    <div
      className="flex flex-row justify-between items-center  h-20 my-w15"
      key={value.id}
    >
      <div className="flex flex-row items-center">
        <div
          className={`h-20 w-20 bg-no-repeat bg-right bg-${value.poster_path} bg-Container rounded-timer mr-w22`}
        >
          <image src={value.poster_path} />
        </div>
        <div className="flex flex-col font-body leading-A18 tracking-A8">
          <p className=" text-normal font-medium text-BlackTortoise mb-w5">
            {value.title}
          </p>
          <div className="flex flex-row">
            <div className="flex flex-row justify-center items-center rounded-w3 text-normal bg-green-300 text-gray-500 w-w18 px-2.5 h-w18 mr-1">
              {value.original_language}
            </div>
            <div className="flex flex-row justify-center items-center rounded-w3 text-normal bg-yellow-300 text-gray-500 w-w18 px-3 h-w18 mr-2">
              {value.vote_average}
            </div>
            <span className=" text-about text-DeepGrey mb-2">
              {truncate(value.overview, {
                length: 50,
                separator: " ",
              })}
            </span>
          </div>
          <div className="flex flex-row">
            <input
              type="number"
              placeholder="Enter Price ($)"
              className="border-solid rounded-md bg-Container box-border px-2 text-black w-6/12 mr-3 "
              name="price"
              value={price}
              disabled={!isEdit}
              onChange={(event) => setPrice(event.target.value)}
            />
            <Quantity
              quantity={quantity}
              onAddQuantity={onAddQuantity}
              onDropQuantity={onDropQuantity}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={
            isEdit ? () => onClickSavePrice(value.id) : () => onClickEditPrice()
          }
          className={`border-solid rounded-md bg-${isEdit ? "gray-500": price>0 ? "green-300":"yellow-500"} bg-${price>0 ? "green-300":""} box-border px-2 text-white mr-2 h-w38`}
        >
          {isEdit ? "Enter Edit " : "Price Edit"}
        </button>
        <ButtonAddMovie
          isAdded={isAdded}
          quantity={quantity}
          value={value}
          onClickAdd={onClickAdd}
          onClickUnAdd={onClickUnAdd}
        />
      </div>
    </div>
  );
};

export default MovieItem;
