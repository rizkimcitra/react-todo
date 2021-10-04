import PropTypes from 'prop-types'

export const Layout = ({ children, Main, Todos }) =>
  Main ? (
    <main className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-0'>{children}</main>
  ) : Todos ? (
    <div className='w-full space-y-2 sm:space-y-4'>{children}</div>
  ) : null

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  Main: PropTypes.bool,
  Todos: PropTypes.bool,
}
