import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddItem() {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState("");

  function addNewItem() {
    var item = {
      itemName: itemName,
      itemPrice: itemPrice,
      itemImage: itemImage,
    };
    dispatch({ type: "ADD_NEW_ITEM", payload: item });
  }

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Item Price"
          value={itemPrice}
          onChange={(e) => {
            setItemPrice(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Item Image"
          value={itemImage}
          onChange={(e) => {
            setItemImage(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary" onClick={addNewItem}>
          ADD ITEM
        </button>
      </div>
    </div>
  );
}
