import reactDOM from 'react-dom'
import { App } from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import authReducer from './reducer/auth'
import jobReducer from './reducer/Job'


const store = configureStore({
  reducer:{
    auth:authReducer,
    job:jobReducer
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware()
})

reactDOM.render(<>
  <Provider store={store}>
    <App />
  </Provider>
</>, document.getElementById('root'))