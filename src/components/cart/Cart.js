import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className={styles['cart-items']}>{[{
        id: 1,
        name: 'Tea',
        price: 10,
        amount: 2
    }].map((item)=>(
        <li>{item.name}</li>
    ))}</ul>

    return <Modal hideModalHandler={props.hideModalHandler}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>120</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.hideModalHandler}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>
}

export default Cart
