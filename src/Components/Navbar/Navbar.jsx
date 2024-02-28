import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu,setmenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("Shop")}}><Link to='/' style={{textDecoration:'none', color:'#F9014F'}}>Home</Link>{menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Mens")}}><Link to='/Mens' style={{textDecoration:'none', color:'#F9014F'}}>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Womens")}}><Link to='/Womens' style={{textDecoration:'none', color:'#F9014F'}}>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Kids")}}><Link to='/Kids' style={{textDecoration:'none', color:'#F9014F'}}>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>   
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            <Link to='/login'><button>Login</button></Link>
        </div>
      
    </div>
  )
}

export default Navbar
