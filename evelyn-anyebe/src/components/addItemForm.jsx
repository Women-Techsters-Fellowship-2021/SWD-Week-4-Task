import { useState, useEffect, useContext } from "react";
import Button from "./button";
import ShoppingListContext from "./shoppingListContext";

function AddItemForm({ addListItem, editItem }) {

  /*------------------------------------------------------------
  Add item form states
--------------------------------------------------------------*/
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const [titleInputError, setTitleInputError] = useState("");
  const [quantityInputError, setQuantityInputError] = useState("");
  const [descInputError, setDescInputError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { itemToEdit, setItemToEdit } = useContext(ShoppingListContext);

  /*------------------------------------------------------------
    Handle item to edit with use effect
--------------------------------------------------------------*/
  useEffect(() => {
    
    if (Object.keys(itemToEdit).length) {
      setTitle(itemToEdit.title);
      setQuantity(itemToEdit.quantity);
      setDescription(itemToEdit.description);
      setEditMode(true);
    }
  }, [itemToEdit]);

  /*------------------------------------------------------------
    Input guards
--------------------------------------------------------------*/

  //Gaurd when typing to title input field
  const titleInputHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
    if (e.target.value.trim().length < 3) {
     
      setTitleInputError("Title must be 3 letter above");
      return false;
    }
    setTitleInputError("");
  };

  //Gaurd when typing to qunatity input
  const quantityInputHandler = (e) => {
    e.preventDefault();
    setQuantity(parseInt(e.target.value));
    if (e.target.value % 1 !== 0 || e.target.value <= 0) {
      setQuantityInputError("A whole number expected");
      return false;
    }
    setQuantityInputError("");
  };

  //Gaurd when typing to description textarea
  const descInputHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
    if (e.target.value.trim().length < 10) {
      setDescInputError("List item description should be 10 characters above");
      return false;
    }
    setDescInputError("");
  };


/*------------------------------------------------------------
Handle submit
--------------------------------------------------------------*/
  const submitHandler = (e) => {
    //Gaurd for inputs
    e.preventDefault();
    if (
      description.trim().length < 10 ||
      quantity % 1 !== 0 ||
      quantity <= 0 ||
      title.trim().length < 3
    ) {
      setDescInputError("Please fill all values");
      return false;
    }

    // Edit item
    if (editMode) {
      const itemID = itemToEdit.itemID;
      const index = itemToEdit.index;
      editItem({
        itemID,
        title,
        quantity,
        description,
        index,
      });

      setEditMode(false);
      setItemToEdit({});

      //Reset form
      setTitle("");
      setQuantity("");
      setDescription("");
      return true;
    }
    // Return a random integer from 1 to 1000
    const random = Math.floor(Math.random() * 1000);
    addListItem({ itemID: title + random, title, quantity, description });

    //Reset form
    setTitle("");
    setQuantity("");
    setDescription("");
  };

  return (
    <form id="add-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Item title"
        id="title"
        name="title"
        required
        autoComplete="off"
        value={title}
        onInput={titleInputHandler}
      />
      <input
        type="number"
        placeholder="Quantity"
        id="quantity"
        name="quantity"
        required
        value={quantity}
        onInput={quantityInputHandler}
      />
      <span id="titleError" className="error">
        {titleInputError}
      </span>
      <span id="quantityError" className="error">
        {quantityInputError}
      </span>
      <textarea
        placeholder="Description"
        id="description"
        name="description"
        required
        value={description}
        onInput={descInputHandler}
      ></textarea>
      <span id="descriptionError" className="error">
        {descInputError}
      </span>
      <Button value="+" id="add-btn" />
    </form>
  );
}

export default AddItemForm;
