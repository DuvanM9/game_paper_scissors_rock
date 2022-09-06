import React from 'react'

export const ButtonFooter = ({opneModal, modalRules}) => {
  return (
    <div className='button_container'>
        <button class="RockPaperScissors_button" onClick={()=>{opneModal(!modalRules)}}>RULES</button>
    </div>
  )
}
