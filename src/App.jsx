import './App.css'
import {BsCart3} from 'react-icons/bs'
import { useState } from 'react'
export default function App(){
  const [counter, setCounter] = useState(0) 
  const [goods, setGoods] = useState(false)
  const [showCart, setShowCart] = useState(false)
  function handlePlus(){
    if(counter<100){
      setCounter(counter+1)
    }
  }

  function handleMinus(){
    if(counter>0){
      setCounter(counter-1)
    }
  }

  function handleCart(){
    if(counter>0){
      setGoods(true)
    }
  }


  return<>
  <nav>
  <div className='first'>
    <img src="/images/icon-menu.svg" alt="menu" className='menu' />
    <img className='logo' alt='logo' src='/images/logo.svg' />
    <ul>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </div>
   <div className="second">
   <img src='/images/icon-cart.svg'  alt="cart" className='cart' onClick={()=>{!showCart?setShowCart(true):setShowCart(false)}} />{goods && <span>{goods?counter:''}</span>}
      <img src='/images/image-avatar.png' alt='profilepic' className='profilepic' />
   </div>
  </nav>
  <div className={showCart?"cartdiv":"nocart"}>
        <h4>Cart</h4>
        {!goods && <p>Your cart is empty</p>}
        {
          goods && <><div className="item">
          <img src="/images/image-product-1-thumbnail.jpg" alt="itemimg" className='itemimg' />
          <div className="itemdes">
            <p>Fall Limited Edition Sneakers</p>
            <span>$125 x {counter} <b>${counter * 125}</b></span>
          </div>
          <img src="/images/icon-delete.svg" alt="delete" className='delete' onClick={()=>{setGoods(false); setCounter(0)}} />
        </div>
        <button>Checkout</button>
        </>
        }
      </div>
  <main>
  <div className="pics">
    <img src="/images/image-product-1.jpg" alt="product" className='product' />
  </div>
  <div className="des">
    <h5>SNEAKER COMPANY</h5>
    <h1>Fall Limited Edition Sneakers</h1>
    <p>
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
    </p>
    <br />
    <h2>$125.00</h2><span>50%</span>
    <s>$250.00</s>
    <br />
    <div className='foot'>
      <div className="counter">
      <img src="/images/icon-minus.svg" alt="minus" className='minus' onClick={()=>{handleMinus()}} />{counter}<img onClick={()=>{handlePlus()}} className='plus' alt='plus' src='/images/icon-plus.svg' />
      </div>
      <button onClick={()=>{handleCart()}}><BsCart3 className='buttoncart' />&nbsp; Add to cart</button>
    </div>
  </div>
  </main>
  </>
}