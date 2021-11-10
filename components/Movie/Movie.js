import React, { useState } from "react";
import { useRecoilState } from "recoil";

import cartRecoil from "../../store/cart";
import movieRecoil from "../../store/movie";
import MovieItem from "./MovieItem";

const Movie = ({ onAddCart, onHandlerCartQuantity, onDropCart }) => {
  const [cart] = useRecoilState(cartRecoil);
  const [movie, setMovie] = useRecoilState(movieRecoil);

  return (
    <div className="overflow-y-auto">
      {movie.map((menu) => (
        <MovieItem
          key={menu.id}
          value={menu}
          onAddCart={onAddCart}
          onHandlerCartQuantity={onHandlerCartQuantity}
          onDropCart={onDropCart}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default Movie;
