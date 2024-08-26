import './App.css'
import {BsCart3} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
export default function App(){
  const [counter, setCounter] = useState(0) 
  const [goods, setGoods] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [selectedImage, setSelectedImage] = useState()
  const [light ,setLight] = useState(false)
  const[indeX, setIndeX] = useState(0)
  const [imageThumbnails, setImageThumbnails] = useState([{link:'images/image-product-1-thumbnail.jpg', text:"image1", selected:true}, 
  {link:'images/image-product-2-thumbnail.jpg', text:"image2", selected:false}, 
  {link:'images/image-product-3-thumbnail.jpg', text:"image3", selected:false}, 
  {link:'images/image-product-4-thumbnail.jpg', text:"image4", selected:false} ])

  

  const images = [{link:'images/image-product-1.jpg', text:"image1"}, 
  {link:'images/image-product-2.jpg', text:"image2"}, 
  {link:'images/image-product-3.jpg', text:"image3"}, 
  {link:'images/image-product-4.jpg', text:"image4"} ]

  window.addEventListener('scroll', () => {
    if(showCart===true){
      setShowCart(false)
    }
  });

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


  function handleImage(index, img){
    setSelectedImage(images[index].link) //set the selected image state to the link value of the object in the index passed as an argument
    /*imageThumbnails.forEach(img=>img.selected=false)
    img.selected=true*/ //ignorre
    const newImageThumbnails =imageThumbnails.map(IMG=>{ //just for the border color thing showing which image you selected
      if(IMG===img){
        return {...IMG, selected:true} //if it matches with the passed img, set its selected key to true
      }else{
        return{...IMG, selected:false} //if it doesn't set it to false
      }
    })
    setImageThumbnails(newImageThumbnails)
  }

  function showimg(){
    setLight(true)
  }

  function handleMobileBack(){
   if(indeX-1 <0){ //same as "if youre on the first pic and the user still clicks back"
    const currentIndex = images.length-1 //this value would be the index of the last image
    setIndeX(currentIndex) //set the state to the index of the last image
    setSelectedImage(images[currentIndex].link) //set the selected image to the link of the last object(image)
        const newImageThumbnails =imageThumbnails.map(IMG=>{ //just for the border color thing showing which image you selected
      if(IMG===imageThumbnails[currentIndex]){
        return {...IMG, selected:true} //if it matches with the passed img, set its selected key to true
      }else{
        return{...IMG, selected:false} //if it doesn't set it to false
      }
    })
    setImageThumbnails(newImageThumbnails) 
   } else{
    const currentIndex = indeX - 1 
    setIndeX(currentIndex) 
    setSelectedImage(images[currentIndex].link)
    const newImageThumbnails =imageThumbnails.map(IMG=>{ //just for the border color thing showing which image you selected
      if(IMG===imageThumbnails[currentIndex]){
        return {...IMG, selected:true} //if it matches with the passed img, set its selected key to true
      }else{
        return{...IMG, selected:false} //if it doesn't set it to false
      }
    })
    setImageThumbnails(newImageThumbnails) 
   }
  }

 

  function handleMobileNext(){
    if(indeX+1 >= images.length){ //if its on the last image and the user still clicks next
      const currentIndex = 0 //index of the first image
      setIndeX(currentIndex) 
      setSelectedImage(images[0].link) //selected image would be the link ofthe first image
      const newImageThumbnails =imageThumbnails.map(IMG=>{ //just for the border color thing showing which image you selected
        if(IMG===imageThumbnails[currentIndex]){
          return {...IMG, selected:true} //if it matches with the passed img, set its selected key to true
        }else{
          return{...IMG, selected:false} //if it doesn't set it to false
        }
      })
      setImageThumbnails(newImageThumbnails) 
    }else{
      const currentIndex = indeX + 1
      setIndeX(currentIndex)
      setSelectedImage(images[currentIndex].link)
      const newImageThumbnails =imageThumbnails.map(IMG=>{ //just for the border color thing showing which image you selected
        if(IMG===imageThumbnails[currentIndex]){
          return {...IMG, selected:true} //if it matches with the passed img, set its selected key to true
        }else{
          return{...IMG, selected:false} //if it doesn't set it to false
        }
      })
      setImageThumbnails(newImageThumbnails) 
    }
   
  }


  return<>
  {light && <LightBox handleMobileBack={handleMobileBack} handleMobileNext={handleMobileNext} setLight={setLight} imageThumbnails={imageThumbnails}
  selectedImage={selectedImage}
  handleImage={handleImage} />}
  <nav>
  <div className='first'>
  <input type='checkbox' id='check' />
    <label htmlFor='check'><img src="/images/icon-menu.svg" alt="menu" className='menu' /></label>
  <div className="mobileMenu">
  <label htmlFor='check'><img src="/images/icon-close.svg" alt="close" className='close' /></label>
    <ul>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </div>
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
          <img src ="/images/icon-delete.svg" alt="delete" className='delete' onClick={()=>{setGoods(false); setCounter(0)}} />
        </div>
        <button>Checkout</button>
        </>
        }
      </div>
  <main>
  <div  className="pics">
  <img src={!selectedImage?"/images/image-product-1.jpg":selectedImage} alt="product" className='product' onClick={()=>{showimg()}} />
    <div className="picspics" style={{backgroundImage: `url(${!selectedImage?"/images/image-product-1.jpg":selectedImage})`}} >
    <img src="/images/icon-next.svg"  alt="back" className='back' onClick={handleMobileBack} />
    <img src="/images/icon-next.svg" alt="next" className='next' onClick={handleMobileNext} />
    </div>
    <div className="bottompics">
      {imageThumbnails.map((img, index)=>{
        return <img key={index} src={img.link} alt={img.text} className={img.selected?'bottomimageselected':'bottomimage'} onClick={()=>{handleImage(index, img)}} />
      })}
    </div>
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


function LightBox ({setLight, selectedImage, imageThumbnails, handleImage, handleMobileBack, handleMobileNext}){
  function handleDismiss(e){
    if(e.target.className.includes("dismiss")){
      setLight(false)
    }
  }
  return<>
  <div onClick={handleDismiss} className="lightpics dismiss">
   <AiOutlineClose className='close' onClick={()=>{setLight(false)}} />
  <div className="scrolls">
  <img src="/images/icon-next.svg" alt="back" className='back' onClick={handleMobileBack} />
    <img src={!selectedImage?"/images/image-product-1.jpg":selectedImage} alt="product" className='product' />
    <img src="/images/icon-next.svg" alt="next" className='next' onClick={handleMobileNext} />
  </div>
      <div className="bottompics">
      {imageThumbnails.map((img, index)=>{
        return <img key={index} src={img.link} alt={img.text} className={img.selected?'bottomimageselected':'bottomimage'} onClick={()=>{handleImage(index, img)}} />
      })}
    </div>
  </div>
  </>
}