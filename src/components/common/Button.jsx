import React from 'react'
import styles from './Button.module.scss'

const Button = ({ onClickEvent, text }) => {
  return (
    <button type="button" className={styles.button} onClick={onClickEvent}>
      {text}
    </button>
  )
}
export default Button
