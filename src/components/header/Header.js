import React from 'react'
import logo from '../../Assets/images/logo.svg'

export const Header = ({score = 12}) => {
  return (
    <div className='gameOptions_score'>
        <img src={logo} alt="logo_svg"/>
        <div class="scoreContainer" >
        <p class="scoreContainer_Title"> SCORE </p>
        <p class="scoreContainer_Number">{score} </p>
    </div>
    </div>
  )
}
