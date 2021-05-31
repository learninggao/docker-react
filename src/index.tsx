import React from 'react'
import ReactDOM from 'react-dom'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any */
declare let module: { hot: any }

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default

    ReactDOM.render(<NewApp />, document.getElementById('root'))
  })
}
