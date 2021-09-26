import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cartobj = useSelector((store) => store.cartReducer);
  const tableData = cartobj.cartItems.map((item) => {
    return (
      <tr>
        <td>{item.itemName}</td>
        <td>{item.itemPrice}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item });
            }}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <table className="table table-light table-bordered table-striped col-md-8 mt-5">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
}
