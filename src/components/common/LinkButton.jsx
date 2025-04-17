import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
import classNames from 'classnames'

const LinkButton = ({ href, className, children }) => {
  return (
    <Link to={href} className={classNames(styles.button, className)}>
      {children}
    </Link>
  )
}

export default LinkButton
