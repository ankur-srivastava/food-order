import React from 'react'
import foodImage from '../../assets/meals.jpeg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1>OrderFood</h1>
            <HeaderCartButton />
        </header>
        <div className={styles['main-image']}>
            <img src={foodImage} alt="Food" />
        </div>
    </React.Fragment>
}

export default Header
