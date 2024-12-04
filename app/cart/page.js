"use client"
import { Provider, useDispatch, useSelector } from 'react-redux';
import './cart.css';
import { myStore } from '@/store/store';
import { removeFromCart } from '@/store/slices/products';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Cart() {

  return <Provider store={myStore}>
    <MyCart></MyCart>
    
  </Provider>
}
function MyCart() {
  const cartItems = useSelector((store) => store.productSlice.cart);

  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });

  const [selectIndex, setSelectedIndex] = useState(null);

  let dispatch = useDispatch(null);

  const deletedItem = () => {
    if (selectIndex !== null) {
      dispatch(removeFromCart(selectIndex));
      setSelectedIndex(null);
      toast.success("Your item is deleted")
    }else{
      toast.error("You didn't select the items")
    }
  }

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="cart_title ">
          Shopping Cart <small>({cartItems.length} Items In Your Cart)</small>
        </div>

        {/* Cart Items */}
        <div className="cart_items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart_item_row">
              <div className="cart_item_image">
                <img src={item.src} alt="" />
              </div>
              <div className="cart_item_info">
                <div className="cart_item_name">{item.name}</div>
                <div className="cart_item_price">{item.price}</div>
              </div>
              <div className="cart_item_select">
                <input type="checkbox"
                  checked={selectIndex === index}
                  onChange={() => setSelectedIndex(selectIndex == index ? null : index)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Order Total */}
        <div className="order_total">
          <div>Total Bill: {total}</div>
        </div>

        {/* Buttons */}
        <div className="cart_buttons">
          <button className="button cart_button_clear" onClick={deletedItem}> Delete Selected Item</button>
          <button className="button cart_button_checkout"
          onClick={()=>{
            toast.success("You receive the order soon");
          }}
          >Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

