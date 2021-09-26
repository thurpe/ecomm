import React from "react";
import { useDispatch } from "react-redux";

export default function Item({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <h2>{item.itemName}</h2>
      <img src={item.itemImage} className="img-fluid" alt="" />
      <h2>{item.itemPrice}/-</h2>
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
