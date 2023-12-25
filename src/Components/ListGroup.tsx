import { MouseEvent, useState } from "react";

const handleClick = (event:MouseEvent) => console.log(event);

function ListGroup() {
    const items = ["Kathmandu", "Pokhara", "Chitwan", "Butwal", "Nepalgunj"]
    const [selectedIndex, setSelectedIndex]=useState(-1)
    return (
      <>
        <h2>List</h2>
        {items.length == 0 && <p>No Items Found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex == index ? "list-group-item active" : "list-group-item"             }
              onClick={()=>setSelectedIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

export default ListGroup 