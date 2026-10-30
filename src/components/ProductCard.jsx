function ProductCard(props) {
  return (
    <div style={{
      border: "2px solid black",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px"
    }}>

      <h2>{props.name}</h2>

      <p>Price: ₹{props.price}</p>

      <p>Quantity: {props.quantity}</p>

      <p>Selected Colour: {props.selectedColor}</p>

      <p>Delivery City: {props.deliveryCity}</p>

      <hr />

      <label>Select Colour: </label>

      <select
        value={props.selectedColor}
        onChange={(e) => props.setSelectedColor(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <br /><br />

      <label>Delivery City: </label>

      <input
        type="text"
        value={props.deliveryCity}
        onChange={(e) => props.setDeliveryCity(e.target.value)}
      />

      <br /><br />

      <button onClick={props.addToCart}>
        Add to Cart
      </button>

      <button
        onClick={props.removeOne}
        disabled={props.quantity === 0}
        style={{ marginLeft: "10px" }}
      >
        Remove One
      </button>

      <button
        onClick={props.resetCart}
        style={{ marginLeft: "10px" }}
      >
        Reset Cart
      </button>

      <hr />

      <h3>Total: ₹{props.quantity * props.price}</h3>

      <h3>
        {props.quantity === 0
          ? "Cart is empty"
          : "Product added to cart"}
      </h3>

    </div>
  );
}

export default ProductCard;