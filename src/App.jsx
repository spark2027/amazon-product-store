import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {

  // Product details
  const productName = "Wireless Mouse";
  const price = 499;

  // State variables
  const [quantity, setQuantity] = useState(0);

  const [selectedColor, setSelectedColor] = useState("Black");

  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");

  const [showProduct, setShowProduct] = useState(true);

  // useEffect for browser title
  useEffect(() => {

    const previousTitle = document.title;

    document.title = "Amazon Product Store - Cart: " + quantity;

    return () => {
      document.title = previousTitle;
    };

  }, [quantity]);

  // Add product
  const addToCart = () => {
    setQuantity(prev => prev + 1);
  };

  // Remove one product
  const removeOne = () => {
    setQuantity(prev => prev > 0 ? prev - 1 : 0);
  };

  // Reset quantity only
  const resetCart = () => {
    setQuantity(0);
  };

  // Show or hide product
  const toggleProduct = () => {
    setShowProduct(prev => !prev);
  };

  return (
    <div>

      {/* Header */}
      <Header />

      {/* Show / Hide Button */}
      <button onClick={toggleProduct}>
        {showProduct ? "Hide Product" : "Show Product"}
      </button>

      {/* Product Card */}
      {showProduct && (
        <ProductCard
          name={productName}
          price={price}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
          setSelectedColor={setSelectedColor}
          setDeliveryCity={setDeliveryCity}
          addToCart={addToCart}
          removeOne={removeOne}
          resetCart={resetCart}
        />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;