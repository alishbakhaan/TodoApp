import { useEffect, useState } from 'react'
import {userContext} from './context/userContext'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import ToggleButton from './Components/ToggleButton'
import { themeContext } from './context/themeContext'

function Page() {
  const [count, setCount] = useState(0)
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme= () => {
    setThemeMode('light');
  }
  const darkTheme= () => {
    setThemeMode('dark');
  }

  useEffect(() => {
  let selector = document.querySelector('html');
  selector.classList.remove('light', 'dark');
  selector.classList.add(themeMode)
  }, [themeMode])

  
  return (
    <>
<userContext.Provider value={{count, setCount}}>
  <Navbar/>
      <div className="card flex justify-center">
        <button className='bg-blue-500 p-4 font-bold' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>       
      </div>
</userContext.Provider>

<themeContext.Provider value={{themeMode, lightTheme, darkTheme}}>
<ToggleButton/>
<Card/>
</themeContext.Provider>  

</>
  )
}

export default Page
