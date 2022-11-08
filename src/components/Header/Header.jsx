import React, { useContext } from 'react'
import Countries from '../../store/country-context'
import theme from '../../toggle/Toggle';
const Header = () => {
  const ctr = useContext(Countries);
  let currentTheme = 'light';
  if(ctr.theme){
    currentTheme = 'dark'
  }
  return (
    <header className={`${theme.general.header.main} ${theme[currentTheme].header.main} transition-all duration-200`}>
       <h1 className={`${theme.general.header.text} ${theme[currentTheme].header.text}`}>Where in the world?</h1>
       <div className='flex items-center cursor-pointer' onClick={ctr.toggleTheme}>
        
       <i className={`${theme.general.header.icon} ${theme[currentTheme].header.icon}`}></i>
        <div className={`${theme.general.header.toggle} ${theme[currentTheme].header.toggle}`}>Dark Mode</div>
       </div>
    </header>
  )
}

export default Header