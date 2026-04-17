import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({styling, title,  type, onClick}) => {
  return (
    <Link to={onClick}>
          <button className={`${styling}`} type={type}  >
        {title}
    </button>
    </Link>
  )
}

export default Button