import { useState, useContext, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const [transition, setTransition] = useState(false)
    const { items } = cartCtx

    const btnClasses = `${styles.button} ${transition ? styles.bump : ''}`

    const numberOfItems = items.reduce((previous,next) => {
        return previous+next.quantity
    }, 0)

    useEffect(()=>{
        if(items.length === 0) {
            return
        }
        setTransition(true)
        const timer = setTimeout(()=>{
            setTransition(false)
        }, 300)

        // cleanup function
        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={btnClasses} onClick={props.showModalHandler}>
        <span className={styles.icon}><CartIcon /></span>
        <span>Cart</span>
        <span className={styles.badge}>{numberOfItems}</span>
    </button>
}

export default HeaderCartButton
