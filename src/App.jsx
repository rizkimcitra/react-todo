import { useContext } from 'react'
import { Context } from '@/context'
import { Layout } from '@/layouts'
import Header from '@/components/Header'
import Todo from '@/components/Todo'
import Forms from '@/components/Forms'

export default function App() {
  const { todos } = useContext(Context)
  return (
    <Layout Main>
      <Header />
      <Layout Todos>
        {todos ? (
          todos.length ? (
            todos.map(({ id, isCompleted, content }) => (
              <Todo key={id} isCompleted={isCompleted} id={id}>
                {content}
              </Todo>
            ))
          ) : (
            <div className='grid place-items-center w-full h-[50vh]'>
              <p className='text-center text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-300 select-none'>
                It seems you are all set
              </p>
            </div>
          )
        ) : null}
        <Forms />
      </Layout>
    </Layout>
  )
}
