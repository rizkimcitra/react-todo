import { createContext, useState, useRef, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { todosReducer } from '@/hooks/todoReducer'

export const Context = createContext()

export default function Provider({ children }) {
  const [input, setInput] = useState('')
  const [isDark, setIsDark] = useState(false)
  const formRef = useRef()

  const [todos, dispatch] = useReducer(todosReducer, [], () => {
    const localData = localStorage.getItem('todos')
    return localData ? JSON.parse(localData) : []
  })

  const handleDisplayForm = () => {
    formRef.current.classList.toggle('translate-y-full')
  }

  const setColor = () => {
    const htmlClassName = localStorage.getItem('themeColor')
    const html = document.documentElement
    if (htmlClassName) html.className = htmlClassName
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      localStorage.removeItem('themeColor')
      localStorage.setItem('themeColor', 'dark')
      setColor()
    } else {
      localStorage.removeItem('themeColor')
      localStorage.setItem('themeColor', 'ligth')
      setColor()
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <Context.Provider
      value={{ todos, dispatch, input, setInput, formRef, handleDisplayForm, toggleTheme, setColor, setIsDark, isDark }}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}
