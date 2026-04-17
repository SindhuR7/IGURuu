import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({styling, title, onClick}) => {
  return (
    <Link to={onClick}>
          <button className={`${styling}`} >
        {title}
    </button>
    </Link>
  )
}

export default Button