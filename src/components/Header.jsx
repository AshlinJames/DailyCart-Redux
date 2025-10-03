import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'


const Header = ({ insideHeader }) => {

    const userWishlist = useSelector(state => state.wishlistReducer)
    const userCart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    return (
        <nav className="flex flex-col md:flex-row md:justify-between items-center w-full text-xl bg-purple-900 text-white font-bold p-5">
            {/* Logo */}
            <Link to="/" className="text-2xl mb-3 md:mb-0 flex items-center gap-2">
                <i className="fa-solid fa-truck-fast"></i>
                <span>Daily Cart</span>
            </Link>

            {/* Menu */}
            <ul className="flex flex-col md:flex-row items-center">
                {insideHeader && <li className="px-5 py-2 md:py-0">
                    <input onChange={e => dispatch(searchProduct(e.target.value))} type="text" className="p-2 rounded border" placeholder='Search products here!!!' />
                </li>}
                <li className="px-5 py-2 md:py-0">
                    <Link to="/wishlist" className="flex items-center gap-1">
                        <i className="fa-solid fa-heart text-red-500"></i>
                        Wishlist
                        <span className="ml-1 px-2 bg-black rounded-full text-sm">{userWishlist?.length}</span>
                    </Link>
                </li>
                <li className="px-5 py-2 md:py-0">
                    <Link to="/cart" className="flex items-center gap-1">
                        <i className="fa-solid fa-cart-shopping text-green-500"></i>
                        Cart
                        <span className="ml-1 px-2 bg-black rounded-full text-sm">{userCart?.length}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header