import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const BASE_URL = "https://sharpspaceltd.netlify.app"; // Change this to your actual domain

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const phoneNumber = "254732652000";

    let message = `🛒 *Order Summary*%0A%0A`;
    cartItems.forEach((item, index) => {
      const productLink = `${BASE_URL}/product-details/${item.slug.current}`;

      message += `🔹 *${index + 1}. ${item.title}*%0A`;
      message += `   - Price: Kshs. ${item.price.toLocaleString()}%0A`;
      message += `   - Quantity: ${item.quantity}%0A`;
      message += `   - 🔗 [View Product](${productLink})%0A%0A`;
    });

    message += `💰 *Total: Kshs. ${totalPrice.toLocaleString()}*%0A`;
    message += `📩 *Please confirm your order.*`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="lg:max-w-[455px] w-full">
      <div className="bg-white shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">Order Summary</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* Order list */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <h4 className="font-medium text-dark">Product</h4>
            <h4 className="font-medium text-dark text-right">Subtotal</h4>
          </div>

          {cartItems.map((item, key) => (
            <div
              key={key}
              className="flex items-center justify-between py-5 border-b border-gray-3"
            >
              <p className="text-dark">{item.title}</p>
              <p className="text-dark text-right">
                Kshs. {(item.discountedPrice * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex items-center justify-between pt-5">
            <p className="font-medium text-lg text-dark">Total</p>
            <p className="font-medium text-lg text-dark text-right">
              Kshs. {totalPrice.toLocaleString()}
            </p>
          </div>

          {/* WhatsApp Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-green-600 mt-7.5"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
