import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'

const MealItemForm = props => {
    const [quantityValid, setQuantityValid] = useState(true)

    const quantityInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const quantity = quantityInputRef.current.value
        const quantityNumber = +quantity
        if(quantity.trim().length === 0 || quantityNumber < 1) {
            setQuantityValid(false)
            return
        }
        props.addItem(quantityNumber)
    }

    return <form className={styles.form} onSubmit={submitHandler}>
        <Input label="Quantity"
            ref={quantityInputRef}
            input={{
                id: 'amount_'+props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
        }} />
        <button>+ Add</button>
        {!quantityValid && <p>Please enter a valid quantity</p>}
    </form>
}

export default MealItemForm
