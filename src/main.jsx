import ReactDOM from 'react-dom'
import Provider from '@/context'
import App from '@/App'
import '@/styles/globals.css'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
  undefined,
)
