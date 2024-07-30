import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store, { persistor } from './app/store.tsx'
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>

    <BrowserRouter>
    <App />
    </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
