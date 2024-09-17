import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer'>
        {props.total} {props.total>1? "items": "item"} in the list
    </div>
  )
}

export default Footer