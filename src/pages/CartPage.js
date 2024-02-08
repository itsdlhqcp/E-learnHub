import React from 'react';
import { useCartContext } from '../context/cart_context';
import styled from "styled-components";
import CartItem from "../components/CartItem";
import {MdClear} from "react-icons/md";

const CartPage = () => {
  const {cart: cartItems, total_items, clearCart} = useCartContext();

  if(cartItems.length < 1){
    return (
      <NotFoundWrapper>
        <div className='container'>No items found in the cart.</div>
      </NotFoundWrapper>
    )
  }

  return (
    <CartWrapper>
      <div className='container'>
        <div className='cart-pg-title'>
          <h3>My Learning</h3>
        </div>
        <div className='cart-grid grid'>
          {/* card grid left */}
          <div className='cart-grid-left'>
            <div className='flex flex-wrap flex-between'>
              <div className='cart-count-info'>
                <span className='fw-7 fs-18'>{total_items}</span> list of learning courses
              </div>
              <button type = "button" className='cart-clear-btn flex fs-15 fw-6 text' onClick={() => clearCart()}>
                <MdClear className='text-pink' />
                <span className='d-inline-block text-pink'>Clear All</span>
              </button>
            </div>

            <div className='cart-items-list grid'>
              {
                cartItems.map(cartItem => {
                  return (
                    <CartItem key = {cartItem.courseID} cartItem = {cartItem} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </CartWrapper>
  )
}

const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`;

const CartWrapper = styled.div`
  padding: 30px 0;
  .card-pg-title{
    padding: 20px 0 6px 0;
  }
  .cart-grid{
    row-gap: 40px;
    .cart-grid-left{
      margin-bottom: 30px;
    }

    .cart-clear-btn{
      span{
        margin-left: 6px;
      }
    }

    .cart-items-list{
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value{
      font-size: 34px;
    }
    .checkout-btn{
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);

      &:hover{
        background-color: var(--clr-dark);
      }
    }
    .cart-total{
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px){
      grid-template-columns: 70% 30%;;
      column-gap: 32px;
    }
  }
`;

export default CartPage
