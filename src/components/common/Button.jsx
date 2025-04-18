import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

const Button = ({ onClickEvent, text, className }) => {
  return (
    <button type="button" className={classNames(styles.button, className)} onClick={onClickEvent}>
      {text}
    </button>
  )
}
export default Button
