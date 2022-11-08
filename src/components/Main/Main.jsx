import React, { useContext } from 'react'
import Input from '../UI/Input'
import Country from '../../store/country-context'
import Countries from '../Countries/Countries'
import theme from '../../toggle/Toggle'
const Main = () => {
  const ctr = useContext(Country);
  let current = 'light';
  if(ctr.theme){
    current='dark'
  }
  return (
    <main className={`${theme.general.main.main} ${theme[current].main.main}`}>

    <Input theme={theme[current]}/>

    <Countries theme={theme[current]}/>
    </main>
  )
}

export default Main