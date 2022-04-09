import { useEffect, useState } from "react"

const FoodItem = (props) => {
    const [itemQty, setItemQty] = useState(0)

    const addItem = () => {
        console.log(`id = ${props.id} and qty = ${itemQty}`)
        props.updateQuantity(props.id, itemQty)
    }

    const qtyChange = (e) => {
        setItemQty(e.target.value)
    }

    useEffect(() => {
        setItemQty(props.itemQuantity)
    }, [])

    return <div style={{margin: 2}}>
        <div style={{padding: 2, textAlign: "left"}}>
            <span>{props.name}</span>
            <input type="number" min="0" name="quantity" 
                value={itemQty}
                onChange={qtyChange}
                style={{position: "absolute", right: "100px", width: "35px", height: "35px"}}
                size="2" />
        </div>
        <div style={{padding: 2, textAlign: "left"}}>
            <span>{props.price}</span>
            <button 
                style={{position: "absolute", right: "100px"}}
                onClick={addItem}>+Add</button>
        </div>
    </div>
}

export default FoodItem
