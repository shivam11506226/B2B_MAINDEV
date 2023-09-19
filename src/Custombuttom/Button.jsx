import React from 'react'
import  "./Button.css"

const Custombutton = ({title,type,onClick}) => {
  return (
    <>
      <button class="button" type={type} onClick={onClick}>
        <span class="button-content">{title} </span>
      </button>
    </>
  );
}

export default Custombutton