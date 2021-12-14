import React, { Component } from 'react'
import styles from './Header.module.css'
export default class Header extends Component {
    render() {
        return (
            <header className={styles.mainHeader}>
                <ul>
                    <li>Drinks</li>
                    <li>Sobre nós</li>
                    <li>
                        <h1 className={styles.logo}>Bons Drinks</h1>
                    </li>
                    <li>Nosso time</li>
                    <li>Contato</li>
                </ul>
            </header>
        )
    }
}