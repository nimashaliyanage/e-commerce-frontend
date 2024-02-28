import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-discription">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe iure vel alias exercitationem maxime laboriosam nemo, commodi architecto accusamus delectus veniam maiores voluptatem? Veniam, sunt dicta iste incidunt suscipit molestiae?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <p className='productdisplay-right-category'><span>Category :</span>Women , T-shirt , Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            
        </div>
    </div>
  )
}

export default ProductDisplay
