import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0
}

// Reducer function is outside of the component as it doesnt need anything from the component.
// state : last state snapshot
// action : you pass
// return new state
const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price*action.item.quantity
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {
    // We use the useReducer hook instead of useState, because the state management here is slightly complex
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    // If item exists in the cart then update quantity, else add item
    const addItem = (item) => {
        // dispatch will call cartReducer function
        dispatchCartAction({
            type: 'ADD',
            item
        })
    }

    const removeItem = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id
        })
    }
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem,
        removeItem
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider
