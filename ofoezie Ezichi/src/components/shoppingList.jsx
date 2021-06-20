import Item from "./item";

function ShoppingList({ list }) {
  return (
    <section id="view-items">
      <h1>TODO LIST APP</h1>
      {list.map((item) => {
        return (
          <Item
            key={item.itemID}
            itemID={item.itemID}
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            index={item.index}
          />
        );
      })}
    </section>
  );
}

export default ShoppingList;
