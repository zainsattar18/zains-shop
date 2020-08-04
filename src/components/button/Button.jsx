import React from 'react'
import "./Button.scss"

export default function Button({children, ...otherProps}) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}
