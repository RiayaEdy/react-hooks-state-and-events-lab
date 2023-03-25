import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterEle, setFilterEle] = useState("All")
  function handleFilter(event) {
    setFilterEle(event.target.value)
  }
    const itemsFiltered=items.filter((item)=>{
      if (filterEle === "All") {
        return true;
      }
      return item.category === filterEle
    })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All" >Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsFiltered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
