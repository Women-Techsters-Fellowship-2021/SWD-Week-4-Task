import { useContext, useState } from "react";
import Button from "./button";
import ShoppingListContext from "./shoppingListContext";

function Item({ itemID, title, description, quantity, index }) {

  /*This manages the status of an item whether active or done mode
    0 is done , 1 is active */
  const [itemStatus, setItemStatus] = useState(true);
  const [itemClass, setItemClass] = useState("item");
  const [btnDisabbled, setBtnDisabbled] = useState("");


  const { setItemToEdit } = useContext(ShoppingListContext);


  /*------------------------------------------------------------
    Monitor Item status
--------------------------------------------------------------*/
  const handleItemStatus = () => {
    if (itemStatus) {
      setItemStatus(!itemStatus);
      setItemClass("item-muted");
      setBtnDisabbled("disabled");
    }
  };

  /*------------------------------------------------------------
    Send edit item to context for add item form to access
--------------------------------------------------------------*/
  const handleEdit = () => {
    setItemToEdit({ itemID, title, description, quantity, index });
  };

  return (
    <div className={itemClass}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="quantity">Quantity: x{quantity}</p>
      </div>
      <div>
        <Button
          value="Edit"
          btnDisabbled={btnDisabbled}
          handleClick={handleEdit}
          id={`btnEdit${itemID}`}
        />
        <Button
          value="Done"
          btnDisabbled={btnDisabbled}
          handleClick={handleItemStatus}
          id={`btnDone${itemID}`}
        />
      </div>
    </div>
  );
}

export default Item;
