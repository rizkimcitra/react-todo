import { IoTrash, IoCheckmarkCircleOutline, IoRepeatOutline } from 'react-icons/io5'
import { Context } from '@/context'
import { useContext } from 'react'
import PropTypes from 'prop-types'

export default function Todo({ children, isCompleted = false, id = '' }) {
  const { dispatch } = useContext(Context)

  return !isCompleted ? (
    <div
      className='w-full flex items-center p-3.5 px-6 sm:py-4 lg:py-6 sm:px-8 rounded-lg border border-gray-200 dark:border-transparent transition bg-white hover:border-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700'
      title={`${children} is your current task, ganbare!`}>
      <div className='w-4/5'>
        <span className='text-sm sm:text-base text-gray-800 dark:text-gray-300'>{children}</span>
      </div>
      <div className='w-1/5 flex items-center justify-end space-x-1 sm:space-x-2'>
        <button
          onClick={() => dispatch({ type: 'EDIT', id: id })}
          className='text-xl sm:text-2xl  opacity-75 hover:opacity-100 outline-none text-blue-500'>
          <IoCheckmarkCircleOutline />
        </button>
        <button
          id={id}
          onClick={() => dispatch({ type: 'REMOVE', id: id })}
          className='text-xl sm:text-2xl opacity-75 hover:opacity-100 outline-none text-red-500'>
          <IoTrash />
        </button>
      </div>
    </div>
  ) : isCompleted ? (
    <div
      className='w-full flex items-center p-3.5 px-6 sm:py-4 lg:py-6 sm:px-8 rounded-lg border border-gray-200 dark:border-transparent transition bg-white hover:border-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700 opacity-40'
      title={`Congratulation, well done, you've completed ${children}`}>
      <div className='w-4/5'>
        <span className='text-sm sm:text-base text-gray-800 dark:text-gray-300 line-through'>{children}</span>
      </div>
      <div className='w-1/5 flex items-center justify-end space-x-1 sm:space-x-2'>
        <button
          onClick={() => dispatch({ type: 'EDIT', id: id })}
          className='text-xl sm:text-2xl  opacity-75 hover:opacity-100 outline-none text-blue-500'>
          <IoRepeatOutline />
        </button>
        <button
          id={id}
          onClick={() => dispatch({ type: 'REMOVE', id: id })}
          className='text-xl sm:text-2xl opacity-75 hover:opacity-100 outline-none text-red-500'>
          <IoTrash />
        </button>
      </div>
    </div>
  ) : null
}

Todo.propTypes = {
  children: PropTypes.node.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
}
