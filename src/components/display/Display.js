import React from 'react'
import FoodItem from './FoodItem'

const Display = (props) => {
    const qtyList = props.quantity
    return <React.Fragment>
        {props.items.map((element) => (
            <>
                <FoodItem name={element.name} price={element.price} id={element.id} 
                    updateQuantity={props.updateQuantity} itemQuantity={qtyList[element.id]}/>
            </>
            
        ))}
    </React.Fragment>
}

export default Display
