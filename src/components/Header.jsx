import { BiPlusCircle, BiMoon, BiSun } from 'react-icons/bi'
import { useContext, useEffect } from 'react'
import { Context } from '@/context'

export default function Header() {
  const headerBtn =
    'grid place-items-center w-12 h-12 sm:w-14 sm:h-14 cursor-pointer text-xl sm:text-2xl text-gray-900 dark:text-gray-200 duration-75'
  const { handleDisplayForm, isDark, setIsDark, setColor, toggleTheme } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('themeColor') === 'dark') {
      setIsDark(false)
      setColor()
    } else {
      setIsDark(true)
      setColor()
    }
  }, [])
  return (
    <header className='flex items-center justify-between space-x-2 sm:space-x-4 lg:space-x-6 w-full h-16 sm:h-24 lg:h-32'>
      <div>
        <h2 className='text-lg sm:text-2xl font-semibold select-none text-gray-900 dark:text-gray-200'>Todo App</h2>
      </div>
      <div className='flex items-center space-x-1 sm:space-x-2'>
        <div className={headerBtn} onClick={toggleTheme}>
          {isDark ? <BiMoon /> : <BiSun />}
        </div>
        <div className={headerBtn} onClick={handleDisplayForm}>
          <BiPlusCircle />
        </div>
      </div>
    </header>
  )
}
