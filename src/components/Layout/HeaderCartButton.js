import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)

    const numberOfItems = cartCtx.items.reduce((previous,next) => {
        return previous+next.quantity
    }, 0)

    return <button className={styles.button} onClick={props.showModalHandler}>
        <span className={styles.icon}><CartIcon /></span>
        <span>Cart</span>
        <span className={styles.badge}>{numberOfItems}</span>
    </button>
}

export default HeaderCartButton
