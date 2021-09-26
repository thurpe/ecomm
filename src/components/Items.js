import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

export default function Items() {
  const itemsobj = useSelector((store) => store.itemsReducer);
  const [itemsList, setItemsList] = useState(itemsobj.items);
  const [searchKey, setSearchKey] = useState("");

  function filterItems() {
    const duplicateList = itemsobj.items;
    const filteredList = duplicateList.filter((item) =>
      item.itemName.toLowerCase().includes(searchKey.toLowerCase())
    );
    setItemsList(filteredList);
  }
  const itemsData = itemsList.map((item) => {
    return (
      <div className="col-md-4">
        <Item item={item} />
      </div>
    );
  });

  return (
    <div className="container">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Items"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        onKeyUp={filterItems}
      />
      <div className="row">{itemsData}</div>
    </div>
  );
}
