import { useState } from "react";

export function QuantitySelector({ onQuantityChange, productId }) {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity, productId);
  };

  return (
    <div className="flex items-center gap-2 justify-center mt-2 mb-2">
      <button
        onClick={() => updateQuantity(-1)}
        className="px-2 py-0.5 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        -
      </button>
      <span className="w-8 text-center" data-quantity>
        {quantity}
      </span>
      <button
        onClick={() => updateQuantity(1)}
        className="px-2 py-0.5 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}

export default function App() {
  return null; // We'll use QuantitySelector directly
}
