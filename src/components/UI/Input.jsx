import React, { useContext, useReducer } from 'react'
import Countries from '../../store/country-context';
const filterReducer = (state,action) =>{
  
  if(action.type === 'FILTER'){
    return {filter:action.val,showFilter: false}
  }
  if(action.type === 'TOGGLE'){
    return { ...state, showFilter: !state.showFilter}

  }
}
const Input = () => {
  // const [filter,setFilter] = useState({showFilter: false, filter:''});
  const [filter,dispatch] = useReducer(filterReducer,{filter:'',showFilter:false})
  const ctr = useContext(Countries);
  const regions = ['Africa','Asia','America','Oceania','Europe'];
  const toggleFilter = () =>{
  dispatch({type:'TOGGLE'});  
  }
  
  const changeFilter = (e) => {
   dispatch({type:'FILTER',val:e.target.textContent})
    ctr.filter(e.target.textContent)
  }

  console.log(filter)
  return (
    <form className='px-8 relative  font-nunitoSans flex flex-col md:flex-row md:justify-between space-y-5 md:space-y-0 items-start'>
    <div className={`relative ${ctr.theme ? 'text-white bg-veryDarkBlue' : 'text-veryDarkBlueL bg-white'} text-base self-stretch`} >

  <input type='text' placeholder='Search for a country' className={`w-full shadow-lg py-3 pl-14 rounded-md focus:pl-14 focus:outline-none ${ctr.theme ? 'bg-darkBlue text-white' : 'bg-white text-veryDarkBlueL'} md:w-96`} onChange={e=> ctr.addCountryFilter(e.target.value)}/>
  <div className='absolute left-5 top-3'>
  <i className="fa-solid fa-magnifying-glass"></i>
  </div>
    </div>
    <div className='relative font-semibold text-darkBlue'  onClick={toggleFilter}>

<div className={`shadow-lg rounded-md py-4 px-4 ${ctr.theme ? 'bg-darkBlue text-white' : 'bg-white text-veryDarkBlueL'} cursor-pointer`}>
     <input type='text' value={filter.filter ? filter.filter : 'Filter by Region'} readOnly  className={`focus:outline-none  ${ctr.theme ? 'bg-darkBlue text-white focus:outline-darkBlue' : 'bg-white text-veryDarkBlueLfocus:outline-white'} cursor-pointer `} />
     <i className="fa-solid fa-angle-down cursor-pointer"></i>
     
    </div>
    <div className={`absolute top-16 left-0 pl-4 shadow-lg rounded-lg w-full ${ctr.theme?'bg-darkBlue text-white':'bg-white text-veryDarkBlueL'} flex space-y-1 py-3 transition-all duration-300  flex-col ${!filter.showFilter ? 'h-0 overflow-hidden py-0' : '' }`}>
      {regions.map(reg=> <p key={reg} onClick={changeFilter} className='cursor-pointer'>{reg}</p>)}

     </div>
    </div>
    </form>
  )
}

export default Input