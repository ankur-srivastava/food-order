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
        const updatedTotalAmount = state.items.reduce((prev, next) => {
            return prev+next.price*next.quantity
        }, 0)

        const existingCartItemIndex = state.items.findIndex((item)=>{
            return item.id === action.item.id
        })

        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: action.item.quantity + existingCartItem.quantity
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if(action.type === 'REMOVE') {
        const existingIndex = state.items.findIndex((item) => {
            return item.id === action.id
        })
        const existingItem = state.items[existingIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems

        // Two cases : if we have only 1 item then removing that should remove the item 
        // from list else normal removal
        if(existingItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = {...existingItem, quantity: existingItem.quantity-1}
            updatedItems[existingItem] = updatedItem
        }
        console.log('updatedTotalAmount = ', updatedTotalAmount)
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
