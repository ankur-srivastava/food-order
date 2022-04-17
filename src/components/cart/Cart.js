import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItemsInCart = cartCtx.items.length > 0

    const addItemToCart = item => {
        cartCtx.addItem(item)
    }

    const removeItemFromCart = id => {
        cartCtx.removeItem(id)
    }

    const cartItems = <ul className={styles['cart-items']}>{cartCtx.items.map((item)=>(
        <CartItem name={item.name} 
            quantity={item.quantity} 
            price={item.price}
            onAdd={addItemToCart.bind(null, item)} 
            onRemove={removeItemFromCart.bind(null, item.id)}/>
    ))}</ul>

    return <Modal hideModalHandler={props.hideModalHandler}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.hideModalHandler}>Close</button>
            {hasItemsInCart && <button className={styles.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart
