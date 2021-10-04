import { BiPlusCircle } from 'react-icons/bi'
import { Context } from '@/context'
import { useContext } from 'react'

export default function Forms() {
  const { formRef, dispatch, input, setInput, handleDisplayForm } = useContext(Context)

  const handleForm = e => {
    e.preventDefault()
    if (input.length > 0) {
      dispatch({
        type: 'ADD',
        todo: {
          isCompleted: false,
          content: input,
        },
      })
      setInput('')
      handleDisplayForm()
    }
  }

  return (
    <section ref={formRef} className='fixed bottom-0 left-0 w-full translate-y-full transition-transform duration-200'>
      <div className='grid place-items-center max-w-5xl mx-auto px-4 lg:px-8 h-32 sm:h-40 lg:h-48 rounded-t-lg'>
        <form onSubmit={handleForm} className='w-full space-y-2 sm:space-y-4 lg:space-y-6'>
          <div className='flex items-center w-full h-10 sm:h-12 rounded-lg outline-none overflow-hidden transition p-0.5 ring-blue-500 focus-within:ring bg-gray-200 dark:bg-gray-700'>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className='w-full h-full text-sm sm:text-base lg:text-lg px-4 sm:px-6 outline-none bg-transparent text-gray-800 dark:text-gray-300'
              type='text'
              placeholder='buy a coffee'
              required
            />
            <button className='grid place-items-center h-full w-16 sm:w-24 lg:w-32 text-base sm:text-lg lg:text-xl rounded-r-lg bg-blue-500 text-white'>
              <BiPlusCircle />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
