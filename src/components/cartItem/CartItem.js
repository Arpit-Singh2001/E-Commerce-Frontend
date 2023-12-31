import React from "react";
import dummyCartImg from "../../assets/naruto.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, resetCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
function CartItem({ cart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="CartItem">
      <div className="item-img">
        <img
          src={cart.image}
          alt="cart img"
          onClick={() => navigate(`/products/${cart.key}`)}
        />
      </div>

      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">{cart.title}</p>
          <p className="price">₹ {cart.price}</p>

          <div className="quantity-selector">
            <span
              className="btn decrement"
              onClick={() => dispatch(removeFromCart(cart))}
            >
              -
            </span>
            <span className="quantity">{cart.quantity}</span>
            <span
              className="btn increment"
              onClick={() => dispatch(addToCart(cart))}
            >
              +
            </span>
          </div>

          <p className="total-price">
            Subtotal: ₹ {cart.quantity * cart.price}
          </p>
        </div>
        <div className="item-remove">
          <AiOutlineClose onClick={() => dispatch(resetCart(cart))} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
